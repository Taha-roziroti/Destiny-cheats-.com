/**
 * FragPunk product imagery — hero art + menu screenshots under /images/fragpunk/.
 * Logical paths end with .webp so ResponsiveImage emits {base}-{width}.webp variants.
 */
const base = '/images/fragpunk';

export const SEO_MEDIA = {
  /** Full-bleed promotional hero art */
  heroArt: `${base}/hero-art.webp`,
  heroPoster: `${base}/hero-art-1200.webp`,
  /** Visuals tab — player ESP / skeletons */
  heroOperations: `${base}/hero-art.webp`,
  espTactical: `${base}/menu-visuals.webp`,
  /** Aimbot tab — soft aim FOV / smooth / bone */
  aimbotHud: `${base}/menu-aimbot.webp`,
  /** World tab — world ESP / distance */
  wallhackLayout: `${base}/menu-world.webp`,
  lootIntel: `${base}/menu-visuals.webp`,
  nightRaid: `${base}/menu-world.webp`,
  chamsPreview: `${base}/menu-visuals.webp`,
  chamsAlt: `${base}/menu-aimbot.webp`,
  /** Misc tab — stream-proof + Cloud DMA status */
  dmaSetup: `${base}/menu-misc.webp`,
  mwTitle6: `${base}/menu-visuals.webp`,
  mwTitle3: `${base}/menu-world.webp`,
  mwTitle2: `${base}/menu-aimbot.webp`,
  mwTitle1: `${base}/menu-misc.webp`,
} as const;

export const FRAGPUNK_PRODUCT_IMAGES = {
  heroArt: {
    src: SEO_MEDIA.heroArt,
    alt: 'FragPunk promotional artwork with character shards and neon green branding',
  },
  menuVisuals: {
    src: SEO_MEDIA.espTactical,
    alt: 'FragPunk visual settings menu showing player ESP, skeletons and distance options',
  },
  menuWorld: {
    src: SEO_MEDIA.wallhackLayout,
    alt: 'FragPunk World ESP and distance settings in the cheat menu',
  },
  menuAimbot: {
    src: SEO_MEDIA.aimbotHud,
    alt: 'FragPunk aimbot configuration menu with FOV, smooth and bone settings',
  },
  menuMisc: {
    src: SEO_MEDIA.dmaSetup,
    alt: 'FragPunk misc menu showing stream-proof overlay and Cloud DMA connection status',
  },
} as const;

/** @deprecated Prefer FRAGPUNK_PRODUCT_IMAGES — kept for legacy component imports. */
export const BODYCAM_PRODUCT_IMAGES = {
  espBoxWarehouse: FRAGPUNK_PRODUCT_IMAGES.menuVisuals,
  hallwayFlashlight: FRAGPUNK_PRODUCT_IMAGES.menuWorld,
  espSkeletonFov: FRAGPUNK_PRODUCT_IMAGES.menuVisuals,
  espSnaplinesRadar: FRAGPUNK_PRODUCT_IMAGES.menuWorld,
  aimbotForest: FRAGPUNK_PRODUCT_IMAGES.menuAimbot,
  espNamesCourtyard: FRAGPUNK_PRODUCT_IMAGES.menuVisuals,
  menuOverlay: FRAGPUNK_PRODUCT_IMAGES.menuVisuals,
  menuTactical: FRAGPUNK_PRODUCT_IMAGES.menuAimbot,
  scopeEsp: FRAGPUNK_PRODUCT_IMAGES.menuMisc,
} as const;

/** Poster-only hero until a dedicated clip is supplied. */
export const HERO_VIDEO = {
  src: '',
  poster: SEO_MEDIA.heroPoster,
} as const;

export const SEO_MEDIA_LEGACY = {
  opsWide: SEO_MEDIA.heroOperations,
  raidLane: SEO_MEDIA.nightRaid,
} as const;

/** Default Open Graph preview when pages do not override. */
export const DEFAULT_OG_IMAGE_ABSOLUTE = SEO_MEDIA.heroPoster;

/** Rotating card images for any leftover list UIs. */
export const BLOG_FEATURE_IMAGES = [
  SEO_MEDIA.heroOperations,
  SEO_MEDIA.espTactical,
  SEO_MEDIA.aimbotHud,
  SEO_MEDIA.wallhackLayout,
  SEO_MEDIA.dmaSetup,
] as const;

export function blogFeatureImage(index: number): string {
  return BLOG_FEATURE_IMAGES[index % BLOG_FEATURE_IMAGES.length]!;
}
