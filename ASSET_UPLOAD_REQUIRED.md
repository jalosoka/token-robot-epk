# Remaining Asset Upload Step

The GitHub connector successfully committed the static landing page structure and text files.

The remaining binary assets must be uploaded with GitHub Desktop, git, or the GitHub web file uploader because the connector cannot reliably upload the large image/PDF/font binaries from the local workspace.

Upload the complete local folder:

```text
C:\Users\janiv\Documents\TokenRobot_Codex_Work\docs\epk\assets
```

to this repository path:

```text
docs/epk/assets
```

Required asset folders:

```text
docs/epk/assets/logo/
docs/epk/assets/images/
docs/epk/assets/epk/
docs/epk/assets/qr/
docs/epk/assets/fonts/
```

A complete upload ZIP has also been prepared locally:

```text
C:\Users\janiv\Documents\TokenRobot_Codex_Work\04_EXPORTS\token-robot-epk-github-pages-docs.zip
```

After the assets are uploaded, enable GitHub Pages with:

```text
Source: Deploy from a branch
Branch: main
Folder: /docs
```

Expected test URL:

```text
https://jalosoka.github.io/token-robot-epk/epk/
```
