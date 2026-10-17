#!/usr/bin/env bash
# Applies the hosting fixes to the site's CloudFront distribution:
#   - viewer-request function: real 200s for app routes, trailing-slash and apex redirects
#   - default behavior: 5-minute edge cache, Cache-Control: no-cache, security headers
#   - /static/* behavior: long edge cache, Cache-Control: immutable (filenames are content-hashed)
#
# Idempotent: re-running re-uploads the function and re-applies the same settings.
# Run from the repo root:  AWS_PROFILE=rietow infra/hosting/apply.sh
set -euo pipefail
cd "$(dirname "$0")"

DIST_ID=E30JEYOZPCJEI9
FN_NAME=rietow-viewer-request
CACHING_OPTIMIZED=658327ea-f89d-4fab-a63d-7e88639e58f6  # AWS managed policy
export AWS_REGION=us-east-1

policy_id() { # $1 = list-cache-policies | list-response-headers-policies, $2 = name
  if [ "$1" = cache ]; then
    aws cloudfront list-cache-policies --type custom \
      --query "CachePolicyList.Items[?CachePolicy.CachePolicyConfig.Name=='$2'].CachePolicy.Id | [0]" --output text
  else
    aws cloudfront list-response-headers-policies --type custom \
      --query "ResponseHeadersPolicyList.Items[?ResponseHeadersPolicy.ResponseHeadersPolicyConfig.Name=='$2'].ResponseHeadersPolicy.Id | [0]" --output text
  fi
}

CP_HTML=$(policy_id cache rietow-html-5min)
[ "$CP_HTML" = None ] && CP_HTML=$(aws cloudfront create-cache-policy --cache-policy-config file://cache-policy-html.json --query CachePolicy.Id --output text)
RH_HTML=$(policy_id headers rietow-html)
[ "$RH_HTML" = None ] && RH_HTML=$(aws cloudfront create-response-headers-policy --response-headers-policy-config file://headers-html.json --query ResponseHeadersPolicy.Id --output text)
RH_STATIC=$(policy_id headers rietow-static)
[ "$RH_STATIC" = None ] && RH_STATIC=$(aws cloudfront create-response-headers-policy --response-headers-policy-config file://headers-static.json --query ResponseHeadersPolicy.Id --output text)

# Upload the current function code, then publish it to LIVE
if ETAG=$(aws cloudfront describe-function --name "$FN_NAME" --query ETag --output text 2>/dev/null); then
  ETAG=$(aws cloudfront update-function --name "$FN_NAME" --if-match "$ETAG" \
    --function-config '{"Comment":"SPA routes plus trailing-slash and apex redirects","Runtime":"cloudfront-js-2.0"}' \
    --function-code fileb://viewer-request.js --query ETag --output text)
else
  ETAG=$(aws cloudfront create-function --name "$FN_NAME" \
    --function-config '{"Comment":"SPA routes plus trailing-slash and apex redirects","Runtime":"cloudfront-js-2.0"}' \
    --function-code fileb://viewer-request.js --query ETag --output text)
fi
FN_ARN=$(aws cloudfront publish-function --name "$FN_NAME" --if-match "$ETAG" \
  --query 'FunctionSummary.FunctionMetadata.FunctionARN' --output text)

# Patch the distribution
TMP=$(mktemp -d)
aws cloudfront get-distribution-config --id "$DIST_ID" --output json > "$TMP/current.json"
cp "$TMP/current.json" "backup-$(date +%Y%m%d-%H%M%S).json"
jq --arg fn "$FN_ARN" --arg cp "$CP_HTML" --arg rh "$RH_HTML" --arg rs "$RH_STATIC" --arg co "$CACHING_OPTIMIZED" '
  .DistributionConfig
  | .DefaultCacheBehavior.CachePolicyId = $cp
  | .DefaultCacheBehavior.ResponseHeadersPolicyId = $rh
  | .DefaultCacheBehavior.FunctionAssociations = {Quantity: 1, Items: [{FunctionARN: $fn, EventType: "viewer-request"}]}
  | .CacheBehaviors = {Quantity: 1, Items: [(.DefaultCacheBehavior
      | .PathPattern = "/static/*"
      | .CachePolicyId = $co
      | .ResponseHeadersPolicyId = $rs
      | .FunctionAssociations = {Quantity: 0})]}
' "$TMP/current.json" > "$TMP/new.json"

echo "Changes to distribution $DIST_ID:"
diff <(jq -S .DistributionConfig "$TMP/current.json") <(jq -S . "$TMP/new.json") || true
read -r -p "Apply these changes? [y/N] " answer
[ "$answer" = y ] || { echo "Aborted; nothing changed on the distribution."; exit 1; }

aws cloudfront update-distribution --id "$DIST_ID" --if-match "$(jq -r .ETag "$TMP/current.json")" \
  --distribution-config "file://$TMP/new.json" --query 'Distribution.Status' --output text
echo "Waiting for CloudFront to deploy (usually 2-5 minutes)..."
aws cloudfront wait distribution-deployed --id "$DIST_ID"
echo "Done. To roll back, restore the DistributionConfig from the newest infra/hosting/backup-*.json."
