/** Prefixes a site-internal path with the configured base path. */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}`;
}

/** Absolute URL for a site-internal path (canonical, hreflang, Open Graph). */
export function absoluteUrl(path: string, site: URL | undefined): string {
  if (!site) throw new Error('`site` must be configured to build absolute URLs');
  return new URL(withBase(path), site).toString();
}
