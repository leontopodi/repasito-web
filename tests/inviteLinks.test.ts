import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { inviteCode, inviteParams, inviteStoreLinks } from '../src/lib/inviteLinks';
import { REFERRALS } from '../src/i18n/referrals';
import { LOCALES } from '../src/i18n/locales';

const store = { appStoreId: '6787456464', appleProviderToken: '128847862', playPackage: 'com.leontopodi.danceup.android' };

describe('invite links', () => {
  it.each(['RP-7K2M9', 'rp7k2m9', ' rp - 7k2m9 '])('normalizes valid code %s', (raw) => {
    expect(inviteCode(raw)).toBe('RP-7K2M9');
  });
  it.each([null, '', 'ig_bio', 'RP-7K2M0', 'RP-7K2MI', 'RP-7K2ML', 'RP-7K2MO', 'RP-7K2M', 'RP-7K2M99', '<img src=x onerror=alert(1)>'])('rejects invalid code %s', (raw) => {
    expect(inviteCode(raw)).toBeUndefined();
  });
  it('round-trips the invite and section alongside the fixed campaign in the encoded Play referrer', () => {
    const params = new URLSearchParams('c=RP-7K2M9&src=yt&id=dQw4w9WgXcQ&s=42000&e=64000&utm_campaign=private&extra=secret');
    const links = inviteStoreLinks(store, params, 'es-419');
    const apple = new URL(links.apple);
    expect(apple.searchParams.get('ct')).toBe('invite');
    expect(apple.searchParams.get('pt')).toBe('128847862');
    expect(links.apple).not.toContain('7K2M9');
    const play = new URL(links.play);
    expect(play.searchParams.get('id')).toBe(store.playPackage);
    expect(play.searchParams.get('hl')).toBe('es-419');
    const referrer = new URLSearchParams(play.searchParams.get('referrer')!);
    expect(Object.fromEntries(referrer)).toEqual({ utm_source: 'website', utm_medium: 'referral', utm_campaign: 'invite', c: 'RP-7K2M9', src: 'yt', id: 'dQw4w9WgXcQ', s: '42000', e: '64000' });
    expect(links.play).toContain('referrer=utm_source%3Dwebsite');
  });
  it('preserves an Apple Music whole item without inventing a section', () => {
    expect(inviteParams(new URLSearchParams('c=RP-7K2M9&src=am&id=1440857781')).toString()).toBe('c=RP-7K2M9&src=am&id=1440857781');
  });
  it.each(['s=-1&e=1000', 's=2000&e=1000', 's=1000', 's=1.5&e=1000', 's=0&e=9999999999999999'])('drops invalid or incomplete section %s', (section) => {
    expect(inviteParams(new URLSearchParams(`src=yt&id=dQw4w9WgXcQ&${section}`)).toString()).toBe('src=yt&id=dQw4w9WgXcQ');
  });
  it('drops malformed codes and media fields without injecting them into tracking', () => {
    const links = inviteStoreLinks(store, new URLSearchParams('c=<script>&src=local&id=private-file&s=0&e=10'));
    const referrer = new URLSearchParams(new URL(links.play).searchParams.get('referrer')!);
    expect([...referrer.keys()]).toEqual(['utm_source', 'utm_medium', 'utm_campaign']);
  });
});

describe('invite content and associations', () => {
  it.each(LOCALES.map((locale) => locale.slug))('%s has complete invite and eight-rule terms copy', (locale) => {
    expect(Object.values(REFERRALS[locale]).every((value) => typeof value !== 'string' || value.trim().length > 0)).toBe(true);
    expect(REFERRALS[locale].rules).toHaveLength(8);
    expect(REFERRALS[locale].rules.every((row) => row.every((value) => value.length > 0))).toBe(true);
  });
  it('associates only the production iOS app and invite paths', () => {
    const aasa = JSON.parse(readFileSync(new URL('../src/config/apple-app-site-association.json', import.meta.url), 'utf8'));
    expect(aasa.applinks.details).toEqual([{ appID: '78WGPPRZL4.com.leontopodi.danceup', paths: ['/i/', '/i/*'] }]);
  });
  it('uses the Play app-signing certificate, with no debug or upload certificate', () => {
    const links = JSON.parse(readFileSync(new URL('../public/.well-known/assetlinks.json', import.meta.url), 'utf8'));
    expect(links).toHaveLength(1);
    expect(links[0].target).toEqual({ namespace: 'android_app', package_name: store.playPackage, sha256_cert_fingerprints: ['16:A5:C0:50:BF:ED:D8:B5:D5:27:73:7E:4E:E2:B0:C7:58:89:75:83:D6:11:45:8A:BD:96:94:AD:6A:28:77:B7'] });
    expect(links[0].relation_extensions['delegate_permission/common.handle_all_urls'].dynamic_app_link_components).toEqual([{ '/': '/i/*' }, { '/': '*', exclude: true }]);
  });
});
