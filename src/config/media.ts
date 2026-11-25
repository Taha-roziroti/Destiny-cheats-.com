/**
 * Destiny 2 product imagery — hero key art + menu/gameplay shots under /images/destiny/.
 * Logical paths end with .webp so ResponsiveImage emits {base}-{width}.webp variants.
 */
const base = '/images/destiny';

export const SEO_MEDIA = {
  /** Full-bleed Destiny 2 key art for heroes / OG */
  heroArt: `${base}/hero-art.webp`,
  heroPoster: `${base}/hero-art-1200.webp`,
  /** Gameplay ESP stills */
  heroOperations: `${base}/gameplay-esp-cover.webp`,
  espTactical: `${base}/menu-visuals.webp`,
  aimbotHud: `${base}/menu-aimbot.webp`,
  wallhackLayout: `${base}/menu-world.webp`,
  lootIntel: `${base}/menu-visuals.webp`,
  nightRaid: `${base}/gameplay-esp-lane.webp`,
  chamsPreview: `${base}/gameplay-aimbot.webp`,
  chamsAlt: `${base}/gameplay-scope.webp`,
  dmaSetup: `${base}/menu-misc.webp`,
  mwTitle6: `${base}/menu-visuals.webp`,
  mwTitle3: `${base}/menu-world.webp`,
  mwTitle2: `${base}/menu-aimbot.webp`,
  mwTitle1: `${base}/menu-misc.webp`,
  gameplayEsp: `${base}/gameplay-esp-fight.webp`,
  gameplayScope: `${base}/gameplay-scope.webp`,
} as const;

export const DESTINY_PRODUCT_IMAGES = {
  heroArt: {
    src: SEO_MEDIA.heroArt,
    alt: 'Destiny 2 key art with Guardians charging forward beneath the Traveler',
  },
  menuVisuals: {
    src: SEO_MEDIA.espTactical,
    alt: 'Destiny cheat Visuals menu showing Player ESP, box style, and skeleton toggles',
  },
  menuWorld: {
    src: SEO_MEDIA.wallhackLayout,
    alt: 'Destiny cheat World menu with loot ESP, radar range, and distance controls',
  },
  menuAimbot: {
    src: SEO_MEDIA.aimbotHud,
    alt: 'Destiny cheat Aimbot menu with smoothness, FOV, bone, and recoil controls',
  },
  menuMisc: {
    src: SEO_MEDIA.dmaSetup,
    alt: 'Destiny cheat Misc menu with stream-proof options and Cloud DMA connected status',
  },
  gameplayAimbot: {
    src: SEO_MEDIA.chamsPreview,
    alt: 'Destiny 2 scoped aim with ESP box and skeleton overlay on a target',
  },
  gameplayScope: {
    src: SEO_MEDIA.gameplayScope,
    alt: 'Destiny 2 scoped engagement with a targeting overlay in combat',
  },
  gameplayEsp: {
    src: SEO_MEDIA.gameplayEsp,
    alt: 'Destiny 2 combat view with skeleton ESP tracking an enemy through cover',
  },
} as const;

/** @deprecated Prefer DESTINY_PRODUCT_IMAGES */
export const FRAGPUNK_PRODUCT_IMAGES = DESTINY_PRODUCT_IMAGES;

/** @deprecated Prefer DESTINY_PRODUCT_IMAGES */
export const BODYCAM_PRODUCT_IMAGES = {
  espBoxWarehouse: DESTINY_PRODUCT_IMAGES.menuVisuals,
  hallwayFlashlight: DESTINY_PRODUCT_IMAGES.menuWorld,
  espSkeletonFov: DESTINY_PRODUCT_IMAGES.menuVisuals,
  espSnaplinesRadar: DESTINY_PRODUCT_IMAGES.menuWorld,
  aimbotForest: DESTINY_PRODUCT_IMAGES.menuAimbot,
  espNamesCourtyard: DESTINY_PRODUCT_IMAGES.menuVisuals,
  menuOverlay: DESTINY_PRODUCT_IMAGES.menuVisuals,
  menuTactical: DESTINY_PRODUCT_IMAGES.menuAimbot,
  scopeEsp: DESTINY_PRODUCT_IMAGES.menuMisc,
} as const;

export const HERO_VIDEO = {
  src: '',
  poster: SEO_MEDIA.heroPoster,
} as const;

export const SEO_MEDIA_LEGACY = {
  opsWide: SEO_MEDIA.heroOperations,
  raidLane: SEO_MEDIA.nightRaid,
} as const;

export const DEFAULT_OG_IMAGE_ABSOLUTE = SEO_MEDIA.heroPoster;

export const BLOG_FEATURE_IMAGES = [
  SEO_MEDIA.espTactical,
  SEO_MEDIA.aimbotHud,
  SEO_MEDIA.wallhackLayout,
  SEO_MEDIA.dmaSetup,
  SEO_MEDIA.heroOperations,
] as const;

export function blogFeatureImage(index: number): string {
  return BLOG_FEATURE_IMAGES[index % BLOG_FEATURE_IMAGES.length]!;
}
