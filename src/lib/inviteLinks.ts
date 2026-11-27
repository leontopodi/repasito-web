import { appStoreUrl, playStoreUrl, type Campaign, type StoreConfig } from './storeLinks';

/** The code is a credential for an invitation, never a campaign label. */
export const INVITE_CAMPAIGN: Campaign = { campaign: 'invite', source: 'website', medium: 'referral' };

export function inviteCode(raw: string | null): string | undefined {
  const compact = raw?.replace(/[\s-]/g, '').toUpperCase();
  return compact && /^RP[23456789ABCDEFGHJKMNPQRSTUVWXYZ]{5}$/.test(compact)
    ? `RP-${compact.slice(2)}`
    : undefined;
}

/** Carry only the public invite/media fields, with bounded, validated values. */
export function inviteParams(params: URLSearchParams): URLSearchParams {
  const result = new URLSearchParams();
  const code = inviteCode(params.get('c'));
  if (code) result.set('c', code);
  const source = params.get('src');
  const id = params.get('id') ?? '';
  if ((source === 'yt' && /^[A-Za-z0-9_-]{11}$/.test(id)) || (source === 'am' && /^[1-9]\d{0,19}$/.test(id))) {
    result.set('src', source);
    result.set('id', id);
    const start = params.get('s') ?? '';
    const end = params.get('e') ?? '';
    if (/^\d{1,15}$/.test(start) && /^\d{1,15}$/.test(end) && Number(end) > Number(start)) {
      result.set('s', String(Number(start)));
      result.set('e', String(Number(end)));
    }
  }
  return result;
}

export function inviteStoreLinks(config: StoreConfig, params: URLSearchParams, hl?: string) {
  const play = new URL(playStoreUrl(config, INVITE_CAMPAIGN, hl));
  const referrer = new URLSearchParams(play.searchParams.get('referrer')!);
  inviteParams(params).forEach((value, key) => referrer.set(key, value));
  play.searchParams.set('referrer', referrer.toString());
  return { apple: appStoreUrl(config, INVITE_CAMPAIGN), play: play.toString() };
}
