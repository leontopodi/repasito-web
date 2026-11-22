import type { APIRoute } from 'astro';
import { SITE, STORE } from '../config/site';
import { DEFAULT_LOCALE, LOCALES, localePath, t } from '../i18n';
import { faqItems } from '../lib/faq';
import { absoluteUrl } from '../lib/paths';
import { appStoreUrl, playStoreUrl, type Campaign } from '../lib/storeLinks';

/** Installs that start from this file are reported under their own campaign. */
const CAMPAIGN: Campaign = { campaign: 'llms_txt', source: 'llms_txt', medium: 'ai' };

/**
 * /llms.txt: a plain-language summary of the app for AI assistants and agents
 * (https://llmstxt.org). Generated from the same copy as the English page.
 */
export const GET: APIRoute = ({ site }) => {
  const d = t(DEFAULT_LOCALE);
  const faq = faqItems(d);
  const page = (slug: (typeof LOCALES)[number]['slug'], path = '') => absoluteUrl(localePath(slug, path), site);

  const lines = [
    `# ${SITE.storeName}`,
    '',
    `> RePasito is a mobile app for practising dance choreography from any song or video: loop a section, slow it down (0.25x to 2x), mirror the reference video, record every take and control it hands-free with body gestures. It runs on iPhone${SITE.playEnabled ? ' and Android' : ''}. The download is free; Pro is an optional subscription and is free for the first 3 practice days. Recordings stay on the device.`,
    '',
    'Key facts:',
    '',
    '- Music and video sources: YouTube search and YouTube links inside the app, Instagram Reel links, Apple Music (iPhone only), and your own music and video files.',
    '- Speed: 0.25x to 2x; Pro adjusts it in 0.05x steps.',
    '- Hands-free: start, stop and redo a take with a body pose (raised hand, T-pose, arms overhead, hands on head).',
    '- Privacy: recordings and imported videos are not uploaded.',
    `- App Store category: Health & Fitness. App Store ID: ${STORE.appStoreId}.`,
    `- Made by Marcin Gorny, a dancer and software engineer (${SITE.founder.url}).`,
    `- Support: ${SITE.supportEmail} (${absoluteUrl('/support/', site)})`,
    '',
    '## Download',
    '',
    `- [RePasito for iPhone on the App Store](${appStoreUrl(STORE, CAMPAIGN)})`,
    ...(SITE.playEnabled ? [`- [RePasito for Android on Google Play](${playStoreUrl(STORE, CAMPAIGN)})`] : []),
    '',
    '## Pages',
    '',
    `- [RePasito website (English)](${page(DEFAULT_LOCALE)}): what the app does, how a practice session goes, dance styles, FAQ`,
    `- [Support](${absoluteUrl('/support/', site)}): contact, restoring and managing Pro purchases`,
    `- [Privacy policy](${absoluteUrl('/privacy/', site)}): what the apps and the website collect`,
    '',
    '## Other languages',
    '',
    ...LOCALES.filter((l) => l.slug !== DEFAULT_LOCALE).map((l) => `- [${l.nativeName}](${page(l.slug)})`),
    '',
    '## How a practice session goes',
    '',
    ...d.steps.items.map((step, i) => `${i + 1}. ${step.title}. ${step.body}`),
    '',
    '## Questions and answers',
    '',
    ...faq.flatMap((item) => [`### ${item.q}`, '', item.a, '']),
    '## Dance styles',
    '',
    d.styles.body,
    '',
  ];

  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
