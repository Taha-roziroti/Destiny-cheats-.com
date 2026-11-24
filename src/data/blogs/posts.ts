import type { CommercialBlogPost } from './types';
import { articlesBySlug } from './content';
import { SEO_MEDIA } from '../../config/media';

export const BLOG_INDEX_TITLE = 'Guides | Example Site';
export const BLOG_INDEX_DESCRIPTION =
  'Placeholder guides for Product Alpha: setup, overlays, tuning, updates, and checkout. Each article covers one topic.';

type BlogMeta = Pick<
  CommercialBlogPost,
  | 'slug'
  | 'title'
  | 'category'
  | 'published'
  | 'modified'
  | 'readTime'
  | 'excerpt'
  | 'seoTitle'
  | 'seoDescription'
  | 'image'
  | 'imageAlt'
  | 'heroWidth'
  | 'heroHeight'
  | 'relatedSlugs'
>;

const placeholderHero = SEO_MEDIA.heroOperations;

const meta: BlogMeta[] = [
  {
    slug: 'buy-cod-cheats',
    title: 'How to buy Product Alpha',
    category: 'Guides',
    published: '2026-11-03',
    modified: '2026-11-03',
    readTime: '6 min read',
    excerpt: 'What to verify on the product page before you pay: modules, plan length, portal status, and Windows setup.',
    seoTitle: 'How to Buy Product Alpha | Example Site',
    seoDescription: 'What to check before checkout: module list, plan length, portal status, and receipt email.',
    image: placeholderHero,
    imageAlt: 'Placeholder hero image for checkout guide',
    heroWidth: 1200,
    heroHeight: 630,
    relatedSlugs: ['cod-choose-plan', 'cod-setup', 'cod-esp-settings'],
  },
  {
    slug: 'cod-aimbot-fov',
    title: 'Assist FOV & smoothing settings guide',
    category: 'Guides',
    published: '2026-10-28',
    modified: '2026-10-28',
    readTime: '9 min read',
    excerpt: 'Tune FOV rings and smoothing curves so tracking looks controlled—not robotic—in replays.',
    seoTitle: 'Assist FOV Settings | Example Site',
    seoDescription: 'FOV, ADS smoothing, and target priority. Test the curve in a private session before you queue.',
    image: placeholderHero,
    imageAlt: 'Placeholder card for tuning guide',
    heroWidth: 1200,
    heroHeight: 630,
    relatedSlugs: ['buy-cod-cheats', 'cod-no-recoil', 'cod-wallhack'],
  },
  {
    slug: 'cod-free-vs-paid',
    title: 'Free vs paid: risks & what you get',
    category: 'Guides',
    published: '2026-10-20',
    modified: '2026-10-20',
    readTime: '6 min read',
    excerpt: 'Free downloads often skip portal hygiene and status checks. Paid plans bundle support paths and clear module scope.',
    seoTitle: 'Free vs Paid Product Access | Example Site',
    seoDescription: 'What changes between a free download and a paid plan: updates, support, and key duration.',
    image: placeholderHero,
    imageAlt: 'Placeholder comparison hero',
    heroWidth: 1200,
    heroHeight: 630,
    relatedSlugs: ['buy-cod-cheats', 'cod-patch-day', 'cod-choose-plan'],
  },
  {
    slug: 'cod-wallhack',
    title: 'Layout overlays vs player boxes',
    category: 'Features',
    published: '2026-10-12',
    modified: '2026-10-12',
    readTime: '8 min read',
    excerpt: 'Boxes answer “where”; outline layouts answer “how” on interior stairs. Most buyers need one primary vision layer.',
    seoTitle: 'Layout Overlays vs Boxes | Example Site',
    seoDescription: 'When outline layouts help a breach, and when player boxes are enough.',
    image: placeholderHero,
    imageAlt: 'Placeholder layout guide hero',
    heroWidth: 1200,
    heroHeight: 630,
    relatedSlugs: ['cod-esp-settings', 'cod-aimbot-fov', 'buy-cod-cheats'],
  },
  {
    slug: 'cod-esp-settings',
    title: 'Overlay settings: clean, readable defaults',
    category: 'Features',
    published: '2026-10-04',
    modified: '2026-10-04',
    readTime: '6 min read',
    excerpt: 'Distance caps, health bars, and teammate mute keep dark maps readable without blocking the reticle.',
    seoTitle: 'Player Overlay Settings | Example Site',
    seoDescription: 'Box thickness, distance tags, squad mute, and item filters so the HUD stays readable.',
    image: placeholderHero,
    imageAlt: 'Placeholder overlay guide hero',
    heroWidth: 1200,
    heroHeight: 630,
    relatedSlugs: ['cod-wallhack', 'cod-stream-obs', 'buy-cod-cheats'],
  },
  {
    slug: 'cod-no-recoil',
    title: 'Recoil tuning guide (per-weapon)',
    category: 'Guides',
    published: '2026-09-25',
    modified: '2026-09-25',
    readTime: '9 min read',
    excerpt: 'Per-weapon recoil strength should match rifles and CQB tools separately.',
    seoTitle: 'Recoil Tuning Guide | Example Site',
    seoDescription: 'Recoil profiles for rifles, SMGs, and DMRs. Strength that works on rifles may overshoot tap-fire guns.',
    image: placeholderHero,
    imageAlt: 'Placeholder recoil guide hero',
    heroWidth: 1200,
    heroHeight: 630,
    relatedSlugs: ['cod-aimbot-fov', 'buy-cod-cheats', 'cod-patch-log'],
  },
  {
    slug: 'cod-setup',
    title: 'First-night setup checklist',
    category: 'Setup',
    published: '2026-09-15',
    modified: '2026-09-15',
    readTime: '6 min read',
    excerpt: 'Read the delivery email, patch Windows, add Defender exclusions once, and verify portal status.',
    seoTitle: 'Product Setup on PC | Example Site',
    seoDescription: 'First-night setup on Windows: delivery email, Defender exclusions, and a private match before ranked play.',
    image: placeholderHero,
    imageAlt: 'Placeholder setup guide hero',
    heroWidth: 1200,
    heroHeight: 630,
    relatedSlugs: ['buy-cod-cheats', 'cod-patch-day', 'cod-stream-obs'],
  },
  {
    slug: 'cod-patch-day',
    title: 'Client update day: wait before you launch',
    category: 'Updates',
    published: '2026-09-05',
    modified: '2026-09-05',
    readTime: '5 min read',
    excerpt: 'Client updates rewrite memory layouts. Pause overlays, read the portal banner, and retest privately.',
    seoTitle: 'Update Day Checklist | Example Site',
    seoDescription: 'After a client update, pause the overlay, read loader status, and retest before you queue again.',
    image: placeholderHero,
    imageAlt: 'Placeholder update guide hero',
    heroWidth: 1200,
    heroHeight: 630,
    relatedSlugs: ['cod-patch-log', 'cod-free-vs-paid', 'buy-cod-cheats'],
  },
  {
    slug: 'cod-stream-obs',
    title: 'Stream-safe setup: OBS capture checklist',
    category: 'Setup',
    published: '2026-08-22',
    modified: '2026-08-22',
    readTime: '8 min read',
    excerpt: 'Test game capture with capture-friendly toggles before going live.',
    seoTitle: 'OBS Setup for Overlays | Example Site',
    seoDescription: 'OBS capture for overlays: which HUD pieces show up on a VOD, and what to turn off before a public stream.',
    image: placeholderHero,
    imageAlt: 'Placeholder stream guide hero',
    heroWidth: 1200,
    heroHeight: 630,
    relatedSlugs: ['cod-esp-settings', 'buy-cod-cheats', 'cod-wallhack'],
  },
  {
    slug: 'cod-patch-log',
    title: 'Season patch log habits',
    category: 'Updates',
    published: '2026-08-10',
    modified: '2026-08-10',
    readTime: '8 min read',
    excerpt: 'Keep a repeatable log after each season drop: version, modules enabled, errors, and retest notes.',
    seoTitle: 'Season Patch Log | Example Site',
    seoDescription: 'A short log after each season update: client version, modules left on, errors, and what you retested.',
    image: placeholderHero,
    imageAlt: 'Placeholder patch log hero',
    heroWidth: 1200,
    heroHeight: 630,
    relatedSlugs: ['cod-patch-day', 'cod-no-recoil', 'buy-cod-cheats'],
  },
  {
    slug: 'cod-choose-plan',
    title: 'Monthly or lifetime: which plan fits you?',
    category: 'Guides',
    published: '2026-07-30',
    modified: '2026-07-30',
    readTime: '7 min read',
    excerpt: 'Match plan length to playtime: casual testers fit monthly billing; daily users should compare lifetime against renewals.',
    seoTitle: 'Monthly or Lifetime Plans | Example Site',
    seoDescription: 'Monthly fits short tests. Lifetime fits daily play if the renewal math works for your hours.',
    image: placeholderHero,
    imageAlt: 'Placeholder plan picker hero',
    heroWidth: 1200,
    heroHeight: 630,
    relatedSlugs: ['buy-cod-cheats', 'cod-free-vs-paid', 'cod-setup'],
  },
];

function priceBody<T>(value: T): T {
  return value;
}

export function getCommercialBlogPosts(): CommercialBlogPost[] {
  return meta.map((m) => {
    const body = articlesBySlug[m.slug];
    if (!body) throw new Error(`Missing blog body for ${m.slug}`);
    const image = placeholderHero;
    return priceBody({
      ...m,
      ...body,
      relatedSlugs: m.relatedSlugs.filter((slug) => slug !== m.slug),
      image,
      ogImage: placeholderHero,
      imageAlt: m.imageAlt,
      heroWidth: 1200,
      heroHeight: 630,
    });
  });
}

export function getCommercialBlogPost(slug: string): CommercialBlogPost | undefined {
  return getCommercialBlogPosts().find((p) => p.slug === slug);
}

export const COMMERCIAL_BLOG_COUNT = meta.length;