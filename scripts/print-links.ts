/**
 * Prints every tracked link for the channels in src/config/campaigns.ts.
 *
 *   npm run links -- [--site https://repasito.app] [--pt <apple provider token>] [--csv]
 *
 * Defaults: SITE_URL or https://repasito.app, and RePasito's Apple provider token.
 */
import { parseArgs } from 'node:util';
import { CAMPAIGNS } from '../src/config/campaigns.ts';
import { appStoreUrl, playStoreUrl } from '../src/lib/storeLinks.ts';

const { values } = parseArgs({
  options: {
    site: { type: 'string', default: process.env.SITE_URL ?? 'https://repasito.app' },
    pt: { type: 'string', default: process.env.PUBLIC_APPLE_PROVIDER_TOKEN ?? '128847862' },
    csv: { type: 'boolean', default: false },
  },
});

const store = { appStoreId: '6787456464', playPackage: 'com.leontopodi.danceup.android', appleProviderToken: values.pt };
const site = values.site!.replace(/\/+$/, '');

const rows = CAMPAIGNS.map((c) => ({
  channel: c.description,
  token: c.campaign,
  smart: `${site}/get/?c=${c.campaign}`,
  appStore: appStoreUrl(store, c),
  googlePlay: playStoreUrl(store, c),
}));

if (!values.pt) console.error('Note: no Apple provider token; App Store links carry no campaign (pass --pt).\n');

if (values.csv) {
  const quote = (v: string) => `"${v.replace(/"/g, '""')}"`;
  console.log(['channel', 'token', 'smart', 'app_store', 'google_play'].join(','));
  rows.forEach((r) => console.log([r.channel, r.token, r.smart, r.appStore, r.googlePlay].map(quote).join(',')));
} else {
  rows.forEach((r) => console.log(`${r.channel} (${r.token})\n  smart:       ${r.smart}\n  App Store:   ${r.appStore}\n  Google Play: ${r.googlePlay}\n`));
}
