# repasito-web

Marketing website for RePasito, served at https://repasito.app from GitHub Pages.

Static [Astro](https://astro.build) site in the 11 languages the app ships in. It sets no cookies and stores nothing in the browser. Visits are counted with Cloudflare Web Analytics, which is cookieless.

## Develop

```sh
npm ci
npm run dev       # http://localhost:4321
npm test          # unit tests (store links, platform routing)
npm run check     # type check
npm run build     # static output in dist/
```

## Configuration

Deployment values are environment variables (`.env.example`). In CI they come from the
GitHub Pages configuration and the repository's **Actions variables**:

| Variable | Source | Effect |
| --- | --- | --- |
| `SITE_URL`, `BASE_PATH` | Pages settings (custom domain) | Canonical URLs, hreflang, sitemap |
| `APPLE_PROVIDER_TOKEN` | Actions variable | Adds `pt`/`ct` campaign parameters to App Store links |
| `CF_BEACON_TOKEN` | Actions variable | Cloudflare Web Analytics (cookieless page views, referrers, countries) |
| `GA_MEASUREMENT_ID` | Actions variable | Loads GA4 (sets cookies, which needs a consent banner; leave unset) |
| `PLAY_ENABLED` | Actions variable, default `true` | Shows the Google Play badge and Android copy |

To change the domain, set it under **Settings → Pages → Custom domain**. The site needs no code change.

## Tracked links

Every store badge carries a campaign:

- **App Store:** `ct=web_<placement>` (with the provider token set). Reported in App Store Connect → Analytics → Acquisition → Campaigns. Safari visits also show up as *Web Referrer: repasito.app*.
- **Google Play:** `referrer=utm_source=…&utm_campaign=web_<placement>`. Reported in Play Console acquisition reports and in Firebase as the `first_open` campaign.

Visitors who arrive through a tracked link (`?c=<token>` or `utm_campaign`) keep that token on the store badges.

`/get/?c=<token>` is the link to use off-site, e.g. in social bios. It sends iPhone and iPad visitors to the App Store and Android visitors to Google Play, and shows both badges on desktop.

Channels are registered in `src/config/campaigns.ts`. To print every link:

```sh
npm run links -- --pt <apple provider token>          # readable list
npm run links -- --pt <apple provider token> --csv    # spreadsheet
```

Token convention: `<channel>_<placement>`, lowercase, at most 40 characters (Apple's limit), e.g. `ig_bio` or `cr_ana` for a creator.

## Content

- Copy: `src/i18n/locales/<locale>.ts`. The `Dict` type makes the compiler reject a locale with a missing key.
- Privacy policy: `src/content/privacy.html` (English, canonical at `/privacy/`).
- Store badges: CI downloads the official localized artwork (`npm run badges`). If a download fails, the badge falls back to a text button.
- Pose artwork and icons come from the app's asset catalog (`dance-app/RePasito/Resources/Assets.xcassets`).
