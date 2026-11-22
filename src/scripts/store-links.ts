import { STORE } from '../config/site';
import { CAMPAIGNS } from '../config/campaigns';
import { appStoreUrl, playStoreUrl, resolveCampaign } from '../lib/storeLinks';
import { track } from './analytics';

/**
 * Re-targets store badges for visitors who arrived through a tracked link
 * (`?c=<token>` or `utm_campaign`), so the install is credited to that channel.
 * Reads only the current URL; nothing is stored in the browser.
 */
export function initStoreLinks(): void {
  const params = new URLSearchParams(window.location.search);

  document.querySelectorAll<HTMLAnchorElement>('a[data-store]').forEach((link) => {
    const placement = link.dataset.placement ?? 'site';
    const campaign = resolveCampaign(placement, params, CAMPAIGNS);

    link.href =
      link.dataset.store === 'google_play' ? playStoreUrl(STORE, campaign, link.dataset.hl) : appStoreUrl(STORE, campaign);

    link.addEventListener('click', () => {
      track('store_click', {
        store: link.dataset.store,
        placement,
        campaign: campaign.campaign,
        locale: link.dataset.locale,
      });
    });
  });
}
