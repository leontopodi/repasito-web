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

export const STORE: StoreConfig = {
  appStoreId: '6787456464',
  appleProviderToken: optional(import.meta.env.PUBLIC_APPLE_PROVIDER_TOKEN),
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
  /** GA4 measurement ID (G-XXXXXXX). Analytics are not loaded when unset. */
  gaMeasurementId: optional(import.meta.env.PUBLIC_GA_MEASUREMENT_ID),
  social: [
    { name: 'Instagram', url: 'https://www.instagram.com/repasito/' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@repasito' },
  ],
} as const;
