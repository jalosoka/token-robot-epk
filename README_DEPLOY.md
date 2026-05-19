# Token Robot EPK Landing Page Deployment

This repository is prepared for a GitHub Pages test deployment of the private Token Robot EPK landing page.

## Deployment Target

First test URL:

```text
https://jalosoka.github.io/token-robot-epk/epk/
```

Later custom domain:

```text
https://token-robot.com/epk
```

## Folder Structure

GitHub Pages should publish from the `/docs` folder.

```text
docs/
  .nojekyll
  robots.txt
  epk/
    index.html
    styles.css
    script.js
    DEPLOY_TEST_CHECK.md
    assets/
      logo/
      images/
      epk/
      qr/
      fonts/
```

## Privacy / Search Indexing

The page is intended for selected promoters, labels and booking contacts.

The final deployed `docs/epk/index.html` keeps these tags:

```html
<meta name="robots" content="noindex, nofollow, noarchive, nosnippet">
<meta name="googlebot" content="noindex, nofollow, noarchive, nosnippet">
```

The publishing root also contains `docs/robots.txt`:

```text
User-agent: *
Disallow: /
```

This means the page can be opened by direct link, but search engines are asked not to index, follow, archive, or snippet it. This is not password protection.

## First GitHub Pages Test Deployment

1. Open the GitHub repository:

   ```text
   jalosoka/token-robot-epk
   ```

2. In GitHub, open:

   ```text
   Repository -> Settings -> Pages
   ```

3. Under `Build and deployment`, set:

   ```text
   Source: Deploy from a branch
   Branch: main
   Folder: /docs
   ```

4. Save.

5. Wait for GitHub Pages to finish publishing.

6. Test:

   ```text
   https://jalosoka.github.io/token-robot-epk/epk/
   ```

## Updating The EPK PDF Later

The landing page links to:

```text
docs/epk/assets/epk/Token_Robot_EPK_2027_FINAL_CLICKABLE_WEB.pdf
```

To update the EPK without changing the landing page URL:

1. Replace that PDF file with the new final web PDF.
2. Keep the same filename.
3. Commit/upload the replacement.
4. The `Download EPK` button will continue to work.

## Future custom domain setup for token-robot.com

Only do this after the GitHub Pages test URL works correctly.

1. Add a `CNAME` file in the GitHub Pages publishing folder containing exactly:

   ```text
   token-robot.com
   ```

2. In GitHub Pages settings, set the custom domain to:

   ```text
   token-robot.com
   ```

3. At Infomaniak, update only the website DNS records. Do not change mail records.

4. Keep all MX records for `booking@token-robot.com`.

5. DNS records likely needed:

   For the apex domain `token-robot.com`, add GitHub Pages A records:

   ```text
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

   For `www.token-robot.com`, add a CNAME to:

   ```text
   jalosoka.github.io
   ```

6. After DNS works, enable HTTPS in GitHub Pages.

7. Final live URL should be:

   ```text
   https://token-robot.com/epk
   ```

## Important DNS Warning

Do not delete or replace Infomaniak MX records. The booking email must continue working:

```text
booking@token-robot.com
```

Only website DNS records should be changed when connecting the custom domain.
