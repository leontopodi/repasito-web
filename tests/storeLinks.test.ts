import { describe, expect, it } from 'vitest';
import { appStoreUrl, playStoreUrl, resolveCampaign, sanitizeToken, MAX_TOKEN_LENGTH } from '../src/lib/storeLinks';

const config = { appStoreId: '6787456464', playPackage: 'com.leontopodi.danceup.android' };
const withToken = { ...config, appleProviderToken: '123456' };
const campaign = { campaign: 'ig_bio', source: 'instagram', medium: 'social' };

describe('sanitizeToken', () => {
  it('normalizes free-form input', () => {
    expect(sanitizeToken('  IG Bio!! ')).toBe('ig_bio');
    expect(sanitizeToken('cr__Ana--')).toBe('cr_ana');
  });

  it('returns undefined for empty input', () => {
    expect(sanitizeToken('')).toBeUndefined();
    expect(sanitizeToken('!!!')).toBeUndefined();
    expect(sanitizeToken(null)).toBeUndefined();
  });

  it('caps length at Apple’s limit', () => {
    expect(sanitizeToken('a'.repeat(60))).toHaveLength(MAX_TOKEN_LENGTH);
  });
});

describe('appStoreUrl', () => {
  it('adds pt and ct when a provider token is configured', () => {
    const url = new URL(appStoreUrl(withToken, campaign));
    expect(url.pathname).toBe('/app/apple-store/id6787456464');
    expect(url.searchParams.get('pt')).toBe('123456');
    expect(url.searchParams.get('ct')).toBe('ig_bio');
    expect(url.searchParams.get('mt')).toBe('8');
  });

  it('omits campaign parameters without a provider token', () => {
    const url = new URL(appStoreUrl(config, campaign));
    expect(url.searchParams.has('pt')).toBe(false);
    expect(url.searchParams.has('ct')).toBe(false);
  });
});

describe('playStoreUrl', () => {
  it('encodes UTM fields in the referrer parameter', () => {
    const url = new URL(playStoreUrl(config, campaign, 'es'));
    expect(url.searchParams.get('id')).toBe(config.playPackage);
    expect(url.searchParams.get('hl')).toBe('es');
    const referrer = new URLSearchParams(url.searchParams.get('referrer')!);
    expect(Object.fromEntries(referrer)).toEqual({ utm_source: 'instagram', utm_medium: 'social', utm_campaign: 'ig_bio' });
    expect(url.search).toContain('referrer=utm_source%3Dinstagram%26');
  });

  it('has no referrer without a campaign', () => {
    expect(new URL(playStoreUrl(config)).searchParams.has('referrer')).toBe(false);
  });
});

describe('resolveCampaign', () => {
  it('uses the placement for direct visitors', () => {
    expect(resolveCampaign('hero')).toEqual({ campaign: 'web_hero', source: 'website', medium: 'web' });
  });

  it('keeps the incoming channel from ?c=', () => {
    expect(resolveCampaign('hero', new URLSearchParams('c=ig_bio'))).toEqual({ campaign: 'ig_bio', source: 'ig', medium: 'referral' });
  });

  it('uses the declared source and medium for registered tokens', () => {
    expect(resolveCampaign('hero', new URLSearchParams('c=ig_bio'), [campaign])).toEqual(campaign);
  });

  it('accepts standard UTM parameters', () => {
    const params = new URLSearchParams('utm_source=newsletter&utm_medium=email&utm_campaign=Launch Week');
    expect(resolveCampaign('cta', params)).toEqual({ campaign: 'launch_week', source: 'newsletter', medium: 'email' });
  });
});
