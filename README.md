# Rietow Family Dentistry

Website for [Rietow Family Dentistry](https://www.rietowfamilydentistry.com) in Greenwood, IN.

React + TypeScript + Material UI, built with Create React App.

## Development

```sh
npm ci
npm start        # dev server at http://localhost:3000
npm run build    # production build in ./build
```

## Where things live

- `src/data/` — contact info, office hours, routes, theme colors
- `src/content/` — page copy (home, services, team)
- `src/pages/` — one component per route
- `src/assets/` — images (WebP; resize before adding — keep photos under ~200 KB)
- `public/` — favicon, app icons, `robots.txt`, `sitemap.xml`

## Deployment

Hosted on S3 + CloudFront in AWS account `671002779066`. AWS CodeBuild runs `buildspec.yml`:
it builds the site, uploads `build/` to S3, and invalidates the CloudFront cache.

When adding a page, also add it to `public/sitemap.xml`.
