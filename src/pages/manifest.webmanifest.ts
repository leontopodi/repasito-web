import type { APIRoute } from 'astro';
import { SITE, STORE } from '../config/site';
import { withBase } from '../lib/paths';

export const GET: APIRoute = () =>
  new Response(
    JSON.stringify({
      name: 'RePasito',
      short_name: 'RePasito',
      start_url: withBase('/'),
      display: 'browser',
      background_color: '#060708',
      theme_color: '#060708',
      icons: [
        { src: withBase('/icons/icon-192.png'), sizes: '192x192', type: 'image/png' },
        { src: withBase('/icons/icon-512.png'), sizes: '512x512', type: 'image/png' },
      ],
      related_applications: [
        { platform: 'itunes', url: `https://apps.apple.com/app/id${STORE.appStoreId}` },
        ...(SITE.playEnabled ? [{ platform: 'play', id: STORE.playPackage }] : []),
      ],
    }),
    { headers: { 'Content-Type': 'application/manifest+json' } },
  );
