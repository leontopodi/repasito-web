import { SITE } from '../config/site';
import type { Dict } from '../i18n';

/** The questions to show: Android-only answers are left out while Google Play is disabled. */
export function faqItems(dict: Dict): Dict['faq']['items'] {
  return dict.faq.items.filter((item) => SITE.playEnabled || !item.android);
}
