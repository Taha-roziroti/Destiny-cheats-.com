/**
 * Bodycam product imagery — local responsive WebP under /images/bodycam/.
 * Logical paths end with .webp so ResponsiveImage emits {base}-{width}.webp variants.
 */
const base = '/images/bodycam';

export const SEO_MEDIA = {
  /** Forest tactical ops — homepage / overview hero */
  heroOperations: `${base}/hero-forest-ops.webp`,
  heroPoster: `${base}/hero-forest-ops-960.webp`,
  /** Skeleton + FOV circle in plywood kill-house */
  espTactical: `${base}/esp-skeleton-fov.webp`,
  /** Forest FOV circle with red ESP boxes */
  aimbotHud: `${base}/aimbot-forest-fov.webp`,
  /** Red snaplines + radar in hallway */
  wallhackLayout: `${base}/esp-snaplines-radar.webp`,
  /** Cyan names / skeleton ESP in courtyard */
  lootIntel: `${base}/esp-names-courtyard.webp`,
  /** Clean flashlight hallway atmosphere */
  nightRaid: `${base}/hallway-flashlight.webp`,
  /** Purple menu overlay with ESP preview */
  chamsPreview: `${base}/menu-overlay-esp.webp`,
  /** Second menu UI (tactical advantage) */
  chamsAlt: `${base}/menu-tactical-esp.webp`,
  /** Scope view with ESP markers — Cloud DMA / setup visual */
  dmaSetup: `${base}/scope-esp-forest.webp`,
  mwTitle6: `${base}/esp-names-courtyard.webp`,
  mwTitle3: `${base}/esp-snaplines-radar.webp`,
  mwTitle2: `${base}/aimbot-forest-fov.webp`,
  mwTitle1: `${base}/menu-overlay-esp.webp`,
} as const;

export const BODYCAM_PRODUCT_IMAGES = {
  espBoxWarehouse: {
    src: SEO_MEDIA.heroOperations,
    alt: 'Bodycam gameplay showing tactical operators in a dense forest firefight',
  },
  hallwayFlashlight: {
    src: SEO_MEDIA.nightRaid,
    alt: 'Bodycam cheats gameplay showing first-person flashlight hallway without overlay clutter',
  },
  espSkeletonFov: {
    src: SEO_MEDIA.espTactical,
    alt: 'Bodycam ESP screenshot showing skeleton boxes and aimbot FOV circle in a plywood kill-house',
  },
  espSnaplinesRadar: {
    src: SEO_MEDIA.wallhackLayout,
    alt: 'Bodycam ESP screenshot showing red snaplines, distance markers, and radar during hallway gameplay',
  },
  aimbotForest: {
    src: SEO_MEDIA.aimbotHud,
    alt: 'Bodycam aimbot gameplay screenshot showing FOV circle and ESP boxes through a foggy forest',
  },
  espNamesCourtyard: {
    src: SEO_MEDIA.lootIntel,
    alt: 'Bodycam ESP screenshot showing player names, skeletons, and distance tags in a courtyard',
  },
  menuOverlay: {
    src: SEO_MEDIA.chamsPreview,
    alt: 'Bodycam cheat comparison showing the in-game ESP menu overlay with feature toggles',
  },
  menuTactical: {
    src: SEO_MEDIA.chamsAlt,
    alt: 'Bodycam cheat comparison showing the tactical advantage menu with ESP and misc options',
  },
  scopeEsp: {
    src: SEO_MEDIA.dmaSetup,
    alt: 'Bodycam Cloud DMA single-PC Hyper-V setup illustration',
  },
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
  SEO_MEDIA.lootIntel,
  SEO_MEDIA.nightRaid,
  SEO_MEDIA.chamsPreview,
  SEO_MEDIA.dmaSetup,
  SEO_MEDIA.chamsAlt,
] as const;

export function blogFeatureImage(index: number): string {
  return BLOG_FEATURE_IMAGES[index % BLOG_FEATURE_IMAGES.length]!;
}
