import type { APIRoute } from 'astro';
import { absoluteUrl } from '../lib/paths';

/**
 * Every crawler is welcome, including AI search, AI assistants and AI training crawlers:
 * the goal is for RePasito to be found and recommended. There are no per-crawler groups on
 * purpose: a crawler that finds a group with its own name ignores the `*` group.
 * Content-Signal states the same preference in Cloudflare's Content Signals format.
 */
export const GET: APIRoute = ({ site }) =>
  new Response(
    [
      'User-agent: *',
      'Content-Signal: search=yes, ai-input=yes, ai-train=yes',
      'Allow: /',
      '',
      `Sitemap: ${absoluteUrl('/sitemap-index.xml', site)}`,
      '',
    ].join('\n'),
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
