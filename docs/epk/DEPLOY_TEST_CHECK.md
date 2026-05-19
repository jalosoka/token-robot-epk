# Token Robot EPK GitHub Pages Deployment Check

## Repository

- Repository name: `jalosoka/token-robot-epk`
- Expected test URL: `https://jalosoka.github.io/token-robot-epk/epk/`
- GitHub Pages publishing source: `main` branch, `/docs` folder

## Final Folder Structure

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

## Deployment Status

- `docs/epk/index.html` exists: yes
- `docs/epk/styles.css` exists: yes
- `docs/epk/script.js` exists: yes
- Required `assets/` folders exist locally: yes
- No `CNAME` file was created for this first GitHub Pages test step.
- GitHub repository access is available through the GitHub connector.
- GitHub Pages activation must still be done manually in the repository settings because the connector does not expose Pages settings tools.

## Manual GitHub Pages Activation Needed

1. Open the GitHub repository `jalosoka/token-robot-epk`.
2. Go to `Settings`.
3. Open `Pages`.
4. Under `Build and deployment`, set `Source` to `Deploy from a branch`.
5. Set `Branch` to `main`.
6. Set folder to `/docs`.
7. Save.

The expected test page is:

```text
https://jalosoka.github.io/token-robot-epk/epk/
```

## Path And Asset Checks

- All asset paths in `docs/epk/index.html` are relative, for example `assets/images/...`, `assets/logo/...`, `assets/epk/...`, `assets/qr/...`.
- No local `C:/Users/...` Windows paths were found in `docs/epk/index.html`, `docs/epk/styles.css` or `docs/epk/script.js`.
- CSS path is relative: `styles.css?v=header-autohide-1`.
- JavaScript path is relative: `script.js?v=header-autohide-1`.
- Local deployment preview from the project root returned HTTP `200` for:
  - `/docs/epk/`
  - `/docs/epk/styles.css?v=header-autohide-1`
  - `/docs/epk/script.js?v=header-autohide-1`
  - `/docs/epk/assets/logo/token-robot-logo-silver.png`
  - `/docs/epk/assets/epk/Token_Robot_EPK_2027_FINAL_CLICKABLE_WEB.pdf`
  - `/docs/epk/assets/qr/token-robot-epk-qr-orange.png`

## Privacy / Indexing

- `docs/epk/index.html` contains:
  - `<meta name="robots" content="noindex, nofollow, noarchive, nosnippet">`
  - `<meta name="googlebot" content="noindex, nofollow, noarchive, nosnippet">`
- `docs/robots.txt` contains:
  - `User-agent: *`
  - `Disallow: /`
- No sitemap is included.
- The page is publicly accessible by direct URL once deployed, but requests search engines not to index, follow, archive, or snippet it.
- This is not password protection.

## Links And Features

- SoundCloud players are still present: 2 iframes.
- Selected Tracks Preview link is present:
  `https://soundcloud.com/tokenrobot/sets/token-robot-private-preview-1`
- Original Set / Inside the Machine link is present:
  `https://soundcloud.com/tokenrobot/token-robot-inside-the-machine-2027`
- EPK PDF download link is present and points to:
  `assets/epk/Token_Robot_EPK_2027_FINAL_CLICKABLE_WEB.pdf`
- Booking mail link is present:
  `mailto:booking@token-robot.com`
- Instagram link is present:
  `https://instagram.com/token.robot`
- SoundCloud profile link is present:
  `https://soundcloud.com/tokenrobot`
- QR block links to:
  `https://token-robot.com/epk`
- Header auto-hide script is still present.

## Remaining Issues / Manual Steps

- Enable GitHub Pages manually using `/docs` as the publishing folder.
- Test the default GitHub Pages URL before adding any custom domain or DNS settings.
