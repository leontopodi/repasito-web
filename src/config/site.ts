import type { StoreConfig } from '../lib/storeLinks';

/**
 * Site-wide configuration. Deployment-specific values come from environment variables
 * (see `.env.example`); everything else is fixed product data.
 */

function flag(value: string | undefined, fallback: boolean): boolean {
  if (value === undefined || value === '') return fallback;
  return value === 'true' || value === '1';
}

function optional(value: string | undefined): string | undefined {
  const trimmed = value?.trim();
  return trimmed ? trimmed : undefined;
}

/**
 * Public identifiers (they appear in every page and link); environment variables override them.
 * Apple provider token: App Store Connect → Analytics → Campaigns → Generate a Campaign Link.
 */
const APPLE_PROVIDER_TOKEN = '128847862';
const CLOUDFLARE_BEACON_TOKEN = 'a8f8e3836f184728aadce87a06205406';

export const STORE: StoreConfig = {
  appStoreId: '6787456464',
  appleProviderToken: optional(import.meta.env.PUBLIC_APPLE_PROVIDER_TOKEN) ?? APPLE_PROVIDER_TOKEN,
  playPackage: 'com.leontopodi.danceup.android',
};

export const SITE = {
  name: 'RePasito',
  storeName: 'RePasito: Dance Practice',
  supportEmail: 'leontopodi@proton.me',
  /** schema.org category matching the App Store primary category. */
  appCategory: 'HealthApplication',
  /** Show the Google Play badge and Android copy. */
  playEnabled: flag(import.meta.env.PUBLIC_PLAY_ENABLED, true),
  /** Cloudflare Web Analytics beacon token: cookieless page-view analytics. Not loaded when unset. */
  cloudflareBeaconToken: optional(import.meta.env.PUBLIC_CF_BEACON_TOKEN) ?? CLOUDFLARE_BEACON_TOKEN,
  /** GA4 measurement ID (G-XXXXXXX). Sets cookies; not loaded when unset. */
  gaMeasurementId: optional(import.meta.env.PUBLIC_GA_MEASUREMENT_ID),
  social: [
    { name: 'Instagram', url: 'https://www.instagram.com/repasito.app/' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@repasito.app' },
  ],
  founder: { name: 'Marcin Gorny', handle: '@marcincito', url: 'https://www.instagram.com/marcincito/' },
} as const;
