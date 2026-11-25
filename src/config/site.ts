const envOrigin = (import.meta.env.PUBLIC_SITE_ORIGIN as string | undefined)?.trim();
if (envOrigin && envOrigin.includes('workers.dev')) {
  throw new Error(
    'PUBLIC_SITE_ORIGIN must not contain workers.dev. Use https://destiny-cheats.com for production origin.',
  );
}

export const SITE_DOMAIN = 'destiny-cheats.com';
export const SITE_URL = 'https://destiny-cheats.com';
/** Legacy product hub path kept for redirects only. */
export const PRODUCT_BASE = '/products/call-of-duty-cheats/';
export const TITLE_PREFIX = 'Destiny 2';
