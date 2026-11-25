/** Production origin for sitemap, RSS, canonicals, and post-build checks. */
export const SITE_DOMAIN = 'destiny-cheats.com';
export const SITE_ORIGIN = `https://${SITE_DOMAIN}`;

/** Brand / host spellings that must never appear in dist/ or as SITE_DOMAIN. */
export const WRONG_DOMAIN_VARIANTS = [
  'fragpunk-cheats.com',
  'www.fragpunk-cheats.com',
  'bodycam-cheat.com',
  'www.bodycam-cheat.com',
  'callofdutycheats.net',
  'www.callofdutycheats.net',
  'cod-cheats.com',
  'www.cod-cheats.com',
  'cs2-cheats.com',
  'delta-force-cheats.org',
  'example.com',
];

/**
 * Default origin is always https://destiny-cheats.com.
 * PUBLIC_SITE_ORIGIN containing workers.dev is a misconfig — fail closed.
 */
export function resolveSiteOrigin(env = process.env) {
  const raw = env.PUBLIC_SITE_ORIGIN?.trim();
  if (raw && raw.includes('workers.dev')) {
    throw new Error(
      'PUBLIC_SITE_ORIGIN must not contain workers.dev. Use https://destiny-cheats.com for production origin.',
    );
  }
  return SITE_ORIGIN;
}

export function assertSiteOrigin(env = process.env) {
  resolveSiteOrigin(env);
}
