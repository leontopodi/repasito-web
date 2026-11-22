import type { APIRoute } from 'astro';
import { absoluteUrl } from '../lib/paths';

export const GET: APIRoute = ({ site }) =>
  new Response(`User-agent: *\nAllow: /\nDisallow: ${new URL(absoluteUrl('/get/', site)).pathname}\n\nSitemap: ${absoluteUrl('/sitemap-index.xml', site)}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
