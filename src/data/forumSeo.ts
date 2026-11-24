/** Hand-authored forum thread `<title>` and meta description (50–60 / 120–155 chars). */
export interface ForumThreadSeo {
  title: string;
  description: string;
  /** When set, this thread is noindex and points readers at the ranking guide. */
  guideHref?: string;
}

export const FORUM_THREAD_SEO: Record<string, ForumThreadSeo> = {
  'cod-forum-aimbot': {
    title: 'Assist FOV for competitive modes | Example Site',
    description: 'Thread on assist FOV caps and ADS smoothing. The settings write-up lives in the tuning guide.',
    guideHref: '/blogs/cod-aimbot-fov/',
  },
  'cod-loader-boot': {
    title: 'Portal first boot & Defender paths | Example Site',
    description: 'First-boot thread: which Windows Defender exclusions worked on Win11—order of operations before ranked play.',
  },
  'cod-esp-night': {
    title: 'Night session overlay clutter | Example Site',
    description: 'Thread on teammate outlines and item tags during dark maps. Distance caps are in the overlay settings guide.',
    guideHref: '/blogs/cod-esp-settings/',
  },
  'cod-wallhack-box': {
    title: 'Outline vs box layouts | Example Site',
    description: 'Interior thread on outline layouts versus box-only reads. The comparison is in the layout guide.',
    guideHref: '/blogs/cod-wallhack/',
  },
  'cod-patch-loader': {
    title: 'Loader verify spin after an update | Example Site',
    description: 'Thread for a loader that sits on verify after a client update. Wait-and-retest steps are in the patch day guide.',
    guideHref: '/blogs/cod-patch-day/',
  },
  'cod-loot-timing': {
    title: 'Economy markers with player overlays | Example Site',
    description: 'Solo queue economy marker debate: container filters and HUD noise on long sessions.',
  },
  'cod-stream-leak': {
    title: 'Stream mode overlays in OBS recordings | Example Site',
    description: 'OBS capture thread when capture-friendly overlays still appear in MP4 exports—scene checks before streaming.',
  },
  'cod-dma-one-pc': {
    title: 'Cloud hardware without a second PC | Example Site',
    description: 'Hardware thread: second PC, cabling, and what a single gaming PC cannot do on its own.',
  },
  'cod-hwid-account': {
    title: 'Identity reset before a new account | Example Site',
    description: 'Thread on restore points and a cold boot before a new login. The utility page covers the steps.',
    guideHref: '/products/call-of-duty-cheats/hwid-spoofer/',
  },
  'cod-trigger-pistol': {
    title: 'Timing delay: pistol vs rifle profile | Example Site',
    description: 'Separate pistol timing profiles for CQB—settings that look natural in replay before enabling assists.',
  },
  'cod-lite-vs-full': {
    title: 'Intel-only overlays vs full assist stack | Example Site',
    description: 'Weekend squad thread on overlays only versus full assist stacks—match modules to role before checkout.',
  },
  'cod-chams-night': {
    title: 'Highlight brightness on dark maps | Example Site',
    description: 'Highlight opacity and team color tips for moonlit maps—balance visibility with eye comfort.',
  },
  'cod-ricochet-overview': {
    title: 'Platform integrity awareness | Example Site',
    description: 'Informational thread on platform integrity expectations—not bypass advice. Read risks and FAQ links before play.',
  },
  'cod-mouse-sens': {
    title: 'Mouse sensitivity baseline before assists | Example Site',
    description: 'Lock cm/360 and ADS splits before tuning assist FOV—baseline habits so overlay curves match muscle memory.',
  },
  'cod-ranked-esp': {
    title: 'Competitive overlay density | Example Site',
    description: 'Competitive mode overlay density tips: distance caps, teammate mute, and thinner boxes.',
  },
  'cod-config-swap': {
    title: 'Config profiles between playlists | Example Site',
    description: 'Swap loader configs between playlist modes—forum steps for wider overlays in BR and tighter HUD in MP.',
  },
  'cod-checkout': {
    title: 'Where plans are listed | Example Site',
    description: 'Thread on monthly and lifetime plans. The step list for paying and saving the receipt is in the checkout guide.',
    guideHref: '/blogs/buy-cod-cheats/',
  },
  'cod-win11-loader': {
    title: 'Windows 11 first-boot checklist | Example Site',
    description: 'Windows 11 Defender exclusions, reboot order, and the first portal launch on desktop.',
  },
};

export function getForumThreadSeo(
  slug: string,
  fallbackTitle: string,
  fallbackExcerpt: string,
): ForumThreadSeo {
  const hit = FORUM_THREAD_SEO[slug];
  if (hit) return hit;
  const title = `${fallbackTitle} | Example Site`;
  const description = fallbackExcerpt;
  return { title, description };
}