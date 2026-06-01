# Token Robot Public Homepage Check

## Files Created

- `docs/index.html`
- `docs/styles-home.css`
- `docs/home-script.js`
- `docs/HOMEPAGE_CHECK.md`

## Files Updated

- `docs/robots.txt`

The root homepage is now allowed for indexing, while `/epk/` remains blocked in `robots.txt`.

## Sections Created

- Hero section with official Token Robot logo, claim, positioning and public action buttons.
- `TRANSMISSION 01` audio teaser section with a placeholder for the future 4:44 public teaser mix.
- `Audio Fragments` section with five public snippet placeholder cards.
- `Visual World` gallery using approved existing Token Robot image assets.
- `Video Signals` placeholder section for future reels, shorts or local video clips.
- `What is Token Robot?` about section.
- `Private previews` section for selected promoters, labels and booking contacts.
- `Follow the Machine` section with Instagram, SoundCloud and booking links.

## Future SoundCloud Placement

- Main 4:44 public teaser mix embed goes in `docs/index.html` inside the `.audio-module` block in the `TRANSMISSION 01` section.
- Snippet embeds go in each `.fragment-card` below the TODO comments:
  - Fragment 01 - Robotic Groove
  - Fragment 02 - Psychedelic Signal
  - Fragment 03 - Funk Circuit
  - Fragment 04 - Inside the Machine
  - Fragment 05 - Daylight Glitch

## Private Link Check

- No private SoundCloud playlist or private 75-minute set links are exposed on the public homepage.
- Public audio buttons currently point only to the public SoundCloud profile: `https://soundcloud.com/tokenrobot`.
- The private EPK is linked only as a subtle trusted-contact link: `https://token-robot.com/epk/`.
- Private preview request uses `mailto:booking@token-robot.com?subject=Token%20Robot%20Private%20Preview%20Request`.

## Indexing Check

- `docs/index.html` does not contain `noindex` or `nofollow`.
- `docs/index.html` includes normal SEO title, description and Open Graph metadata.
- `docs/epk/index.html` still contains:
  - `<meta name="robots" content="noindex, nofollow, noarchive, nosnippet">`
  - `<meta name="googlebot" content="noindex, nofollow, noarchive, nosnippet">`
- `docs/robots.txt` allows the public root and disallows `/epk/`.

## Asset / Image Check

- Images are loaded with relative paths from `docs/index.html`, using the existing approved `docs/epk/assets/...` files.
- Images use proportional sizing and `object-fit` rules; no image is stretched.
- Gallery tiles use consistent aspect-ratio containers.
- The official Token Robot logo is used from `epk/assets/logo/token-robot-logo-silver.png`.

## Remaining TODOs

- Add the public 4:44 SoundCloud embed when the teaser mix is uploaded.
- Add public SoundCloud/audio embeds for the five snippet cards when available.
- Replace video placeholders with approved Instagram Reel, YouTube Shorts or local video embeds later.
