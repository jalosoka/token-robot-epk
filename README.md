# Token Robot EPK Landing Page

Private Token Robot EPK landing page prepared for GitHub Pages.

## GitHub Pages

Recommended first test deployment:

```text
https://jalosoka.github.io/token-robot-epk/epk/
```

GitHub Pages settings:

```text
Source: Deploy from a branch
Branch: main
Folder: /docs
```

The landing page entry point is:

```text
docs/epk/index.html
```

## Privacy

The page is public by direct link, but search indexing is disabled with:

```html
<meta name="robots" content="noindex, nofollow, noarchive, nosnippet">
<meta name="googlebot" content="noindex, nofollow, noarchive, nosnippet">
```

The publishing root also includes:

```text
docs/robots.txt
```

with:

```text
User-agent: *
Disallow: /
```

No sitemap is included.

## Structure

```text
docs/
  .nojekyll
  robots.txt
  epk/
    index.html
    styles.css
    script.js
    assets/
      logo/
      images/
      epk/
      qr/
      fonts/
```

## Important

Do not change the Infomaniak MX records for `booking@token-robot.com` when connecting the custom domain later.
