/**
 * Builds tracked App Store and Google Play links.
 *
 * App Store: campaign links (`pt` provider token + `ct` campaign token) are reported in
 * App Store Connect → Analytics → Acquisition → Campaigns. Without a provider token the
 * link still works, and Safari referrals still appear under "Web Referrer".
 *
 * Google Play: the `referrer` parameter carries UTM fields, reported in Play Console
 * (acquisition reports) and in Firebase/GA4 as the `first_open` campaign.
 *
 * This module is shared by build-time rendering and the browser, so it must stay
 * dependency-free.
 */

export interface StoreConfig {
  readonly appStoreId: string;
  /** Apple provider token from App Store Connect's campaign link generator. */
  readonly appleProviderToken?: string;
  readonly playPackage: string;
}

export interface Campaign {
  /** Campaign token, e.g. `web_hero` or `ig_bio`. Sent to Apple as `ct`. */
  readonly campaign: string;
  /** Traffic source, e.g. `website`, `instagram`. */
  readonly source: string;
  /** Traffic medium, e.g. `web`, `social`, `qr`. */
  readonly medium: string;
}

/** Apple caps campaign tokens at 40 characters. */
export const MAX_TOKEN_LENGTH = 40;

const TOKEN_PATTERN = /[^a-z0-9_-]+/g;

/** Normalizes free-form input to a safe campaign token, or returns undefined if empty. */
export function sanitizeToken(raw: string | null | undefined): string | undefined {
  if (!raw) return undefined;
  const token = raw
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '_')
    .replace(TOKEN_PATTERN, '')
    .replace(/_{2,}/g, '_')
    .replace(/^[_-]+|[_-]+$/g, '')
    .slice(0, MAX_TOKEN_LENGTH);
  return token || undefined;
}

export function appStoreUrl(config: StoreConfig, campaign?: Campaign): string {
  const url = new URL(`https://apps.apple.com/app/apple-store/id${config.appStoreId}`);
  const providerToken = config.appleProviderToken?.trim();
  const ct = sanitizeToken(campaign?.campaign);
  if (providerToken && ct) {
    url.searchParams.set('pt', providerToken);
    url.searchParams.set('ct', ct);
  }
  url.searchParams.set('mt', '8');
  return url.toString();
}

export function playStoreUrl(config: StoreConfig, campaign?: Campaign, hl?: string): string {
  const url = new URL('https://play.google.com/store/apps/details');
  url.searchParams.set('id', config.playPackage);
  if (hl) url.searchParams.set('hl', hl);
  const ct = sanitizeToken(campaign?.campaign);
  if (campaign && ct) {
    const referrer = new URLSearchParams({
      utm_source: sanitizeToken(campaign.source) ?? 'website',
      utm_medium: sanitizeToken(campaign.medium) ?? 'web',
      utm_campaign: ct,
    });
    // URLSearchParams encodes the nested query once more, as Play expects.
    url.searchParams.set('referrer', referrer.toString());
  }
  return url.toString();
}

/**
 * Resolves the campaign for a store link on the site.
 *
 * A visitor who arrived through a tracked link (`?c=ig_bio` or `utm_campaign`) keeps that
 * attribution so installs are credited to the original channel; otherwise the link's own
 * placement is used (`web_<placement>`). Tokens found in `registry` keep their declared source and medium.
 */
export function resolveCampaign(
  placement: string,
  params?: URLSearchParams | null,
  registry: readonly Campaign[] = [],
): Campaign {
  const incoming = sanitizeToken(params?.get('c') ?? params?.get('utm_campaign'));
  if (incoming) {
    const known = registry.find((c) => c.campaign === incoming);
    if (known) return { campaign: known.campaign, source: known.source, medium: known.medium };
    return {
      campaign: incoming,
      source: sanitizeToken(params?.get('utm_source')) ?? incoming.split('_')[0] ?? 'website',
      medium: sanitizeToken(params?.get('utm_medium')) ?? 'referral',
    };
  }
  return { campaign: `web_${sanitizeToken(placement) ?? 'site'}`, source: 'website', medium: 'web' };
}
