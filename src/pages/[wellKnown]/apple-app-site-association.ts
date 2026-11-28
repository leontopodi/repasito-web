import type { APIRoute, GetStaticPaths } from 'astro';
import association from '../../config/apple-app-site-association.json';

export const getStaticPaths = (() => [{ params: { wellKnown: '.well-known' } }]) satisfies GetStaticPaths;

/** Prerender an extensionless static file; an endpoint also avoids HTML trailing-slash routing. */
export const GET: APIRoute = () => new Response(JSON.stringify(association), {
  headers: { 'Content-Type': 'application/json' },
});
