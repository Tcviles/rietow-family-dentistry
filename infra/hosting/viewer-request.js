// CloudFront Function (viewer request) for www.rietowfamilydentistry.com
//
// The site is a single-page app served from an S3 website bucket. Without this,
// S3 has no file for /services etc. and answers with its error document
// (index.html) plus a 404 status, so search engines treat every page but the
// homepage as missing.
//
// Keep ROUTES in sync with src/data/routes.ts.
var ROUTES = ['/', '/services', '/team', '/discount', '/forms', '/contact'];

function handler(event) {
  var request = event.request;
  var uri = request.uri;
  var host = request.headers.host ? request.headers.host.value : '';

  // Canonical host: rietowfamilydentistry.com -> www
  if (host === 'rietowfamilydentistry.com') {
    return redirect('https://www.rietowfamilydentistry.com' + uri + querySuffix(request.querystring));
  }

  // /services/ -> /services
  if (uri.length > 1 && uri.charAt(uri.length - 1) === '/') {
    return redirect(uri.slice(0, -1) + querySuffix(request.querystring));
  }

  // Known app routes get the app shell with a 200. Files (anything with an
  // extension) and unknown paths pass through untouched, so unknown pages
  // still return a real 404.
  if (ROUTES.indexOf(uri) !== -1) {
    request.uri = '/index.html';
  }

  return request;
}

function redirect(location) {
  return {
    statusCode: 301,
    statusDescription: 'Moved Permanently',
    headers: { location: { value: location } },
  };
}

function querySuffix(qs) {
  var parts = [];
  for (var key in qs) {
    var entry = qs[key];
    if (entry.multiValue) {
      for (var i = 0; i < entry.multiValue.length; i++) {
        parts.push(key + '=' + entry.multiValue[i].value);
      }
    } else {
      parts.push(entry.value === '' ? key : key + '=' + entry.value);
    }
  }
  return parts.length ? '?' + parts.join('&') : '';
}
