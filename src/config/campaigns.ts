import type { Campaign } from '../lib/storeLinks';

/**
 * Registry of off-site channels that link to the app. `npm run links` turns each entry into
 * a smart `/get/` link plus direct App Store and Google Play links.
 *
 * Token convention: `<channel>_<placement>`, lowercase, max 40 characters.
 * Add a creator as `cr_<name>` (one token per creator across all their channels).
 */
export interface ChannelCampaign extends Campaign {
  readonly description: string;
}

export const CAMPAIGNS: readonly ChannelCampaign[] = [
  { campaign: 'ig_bio', source: 'instagram', medium: 'social', description: 'Instagram profile link' },
  { campaign: 'ig_story', source: 'instagram', medium: 'social', description: 'Instagram story link sticker' },
  { campaign: 'ig_dm', source: 'instagram', medium: 'social', description: 'Instagram creator outreach DMs' },
  { campaign: 'tt_bio', source: 'tiktok', medium: 'social', description: 'TikTok profile link' },
  { campaign: 'yt_desc', source: 'youtube', medium: 'social', description: 'YouTube video descriptions' },
  { campaign: 'qr_print', source: 'qr', medium: 'offline', description: 'QR code on flyers and posters' },
  { campaign: 'email_sig', source: 'email', medium: 'email', description: 'Email signature' },
];
