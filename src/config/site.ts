const envOrigin = (import.meta.env.PUBLIC_SITE_ORIGIN as string | undefined)?.trim();
if (envOrigin && envOrigin.includes('workers.dev')) {
  throw new Error(
    'PUBLIC_SITE_ORIGIN must not contain workers.dev. Use https://fragpunk-cheats.com for production origin.',
  );
}

export const SITE_DOMAIN = 'fragpunk-cheats.com';
export const SITE_URL = 'https://fragpunk-cheats.com';
/** Legacy product hub path kept for redirects only. */
export const PRODUCT_BASE = '/products/call-of-duty-cheats/';
export const TITLE_PREFIX = 'FragPunk';
