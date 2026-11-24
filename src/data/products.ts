import { t } from '../i18n';
import { checkoutForSlug, checkoutPath } from '../config/checkout';
import { PRODUCT_BASE } from '../config/site';
import { SEO_MEDIA } from '../config/media';
import type { IconName } from '../components/icons/types';

export interface ProductSlide {
  src: string;
  alt: string;
  caption: string;
  captionDesc: string;
}

export interface ProductOverview {
  title: string;
  paragraphs: string[];
}

export interface AcquisitionStep {
  num: string;
  title: string;
  desc: string;
}

export interface ProductAcquisition {
  title: string;
  steps: AcquisitionStep[];
}

export interface SystemRequirement {
  icon: IconName;
  text: string;
}

export interface ProductFeatureGroup {
  heading: string;
  items: string[];
}

export interface ProductPage {
  slug: string;
  kind: 'tier' | 'utility';
  badge: string;
  category?: string;
  tier?: string;
  name: string;
  title: string;
  subtitle: string;
  desc: string;
  seoDescription: string;
  features: string[];
  more: number;
  variant?: 'essential' | 'popular' | 'limited';
  buyUrl: string;
  images: ProductSlide[];
  overview: ProductOverview;
  acquisition: ProductAcquisition;
  goodToKnow: string;
  limitations: string;
  fullFeatures: string[];
  featureGroups?: ProductFeatureGroup[];
  systemRequirements: SystemRequirement[];
  about?: { type: 'h2' | 'p'; text: string }[];
  body: { type: 'h2' | 'p'; text: string }[];
  relatedForumSlugs: string[];
}

export const productHubArticles = [
  {
    slug: 'aimbot-hud-tuning',
    tag: 'Guides',
    title: 'Guide Title: caps and ADS curves',
    desc: 'Keep hip and ADS smoothing separate, start with a small cap, and verify replay behavior before ranked queues.',
    image: SEO_MEDIA.aimbotHud,
    imageAlt: 'Placeholder card showing tuning sliders on sample overlay',
  },
  {
    slug: 'esp-tactical-layout',
    tag: 'Overlays',
    title: 'Tactical overlays: distance caps',
    desc: 'Mute squad silhouettes first, shorten draw distance, and keep economy intel on a filter.',
    image: SEO_MEDIA.espTactical,
    imageAlt: 'Placeholder card showing overlay boxes on sample map',
  },
  {
    slug: 'wallhack-breach-reads',
    tag: 'Layouts',
    title: 'Interior layouts for pushes',
    desc: 'Box-and-distance presets beat thick glow stacks on stairwell fights.',
    image: SEO_MEDIA.wallhackLayout,
    imageAlt: 'Placeholder card showing layout lines through structure',
  },
  {
    slug: 'extraction-loot-filters',
    tag: 'Economy',
    title: 'Economy markers: value filters',
    desc: 'Set minimum value on item markers and swap to combat-hide when timers start.',
    image: SEO_MEDIA.lootIntel,
    imageAlt: 'Placeholder card showing economy filters on sample map',
  },
] as const;

export const productRelatedForumSlugs = {
  modules: [
    'cod-forum-aimbot',
    'cod-esp-night',
    'cod-wallhack-box',
    'cod-loot-timing',
    'cod-lite-vs-full',
    'cod-patch-loader',
  ],
  'hwid-spoofer': ['cod-hwid-account', 'cod-loader-boot', 'cod-patch-loader'],
  appeals: ['cod-hwid-account', 'cod-patch-loader'],
  'cloud-dma': ['cod-dma-one-pc', 'cod-loader-boot'],
};

const productBase = PRODUCT_BASE;

const productPageSeoDescription: Record<string, string> = {
  modules:
    'Product Alpha modules on desktop: overlays, assists, filters, and timing tools. Scope and compatibility are listed on this page.',
  'hwid-spoofer':
    'Identity reset utility on Windows: disk and MAC rotation, restore checkpoints, and verification before relaunch.',
  appeals:
    'Appeals paperwork on desktop: organize notices, receipts, and timelines before support tickets.',
  'cloud-dma':
    'Cloud hardware notes: second machine, cabling, firmware expectations, and risk disclaimers before hardware checkout.',
};

const defaultAcquisitionSteps: AcquisitionStep[] = [
  {
    num: '01',
    title: 'Check live status',
    desc: 'Read the banner on example.com and the portal—pause if the build shows updating after a client patch.',
  },
  {
    num: '02',
    title: 'Pick modules on-site',
    desc: 'Read product and utility pages here—then match checkout to your workspace.',
  },
  {
    num: '03',
    title: 'Complete checkout',
    desc: 'Finish payment and keep the receipt email beside your license message for support.',
  },
  {
    num: '04',
    title: 'Install and test',
    desc: 'Download only from the portal, run a private verification, then sync presets.',
  },
];

function acquisitionFor(productName: string): ProductAcquisition {
  return { title: `How to get ${productName}`, steps: defaultAcquisitionSteps };
}

const sharedGoodToKnow =
  'Clients receive frequent updates. Confirm loader compatibility on the status panel before you launch.';
const sharedLimitations =
  'Third-party software may violate platform terms and can lead to restrictions. You accept all risk. Availability can change without notice.';

const dfSystemRequirements: SystemRequirement[] = [
  { icon: 'shieldCheck', text: 'HVCI on' },
  { icon: 'shieldCheck', text: 'Core isolation on' },
  { icon: 'shieldCheck', text: 'TPM on' },
  { icon: 'shieldCheck', text: 'Secure Boot on' },
];

const storefrontFeatureGroups: ProductFeatureGroup[] = [
  {
    heading: 'Assist options',
    items: [
      'FOV, speed, filter, smooth, stickiness',
      'Target selection: closest, head, neck, chest',
      'Two keybinds with controller binds',
      'Visibility check, draw target line, draw FOV',
    ],
  },
  {
    heading: 'Player visual options',
    items: [
      'Skeleton, box, name, weapon, health bar',
      'Show status, level tags, head circle, distance',
      'Team number, view direction, snaplines',
    ],
  },
  {
    heading: 'Player visual options 2',
    items: [
      'Bag labels, hero name',
      'Level tags, max distance',
      'Custom colors, size, transparency, brightness',
    ],
  },
  {
    heading: 'Loot visual options',
    items: ['Item name, price, corpses, containers', 'Rarity filter, minimum price filter'],
  },
  {
    heading: 'Highlight options',
    items: [
      'Applies to player, AI, weapon, hands, self',
      'Enable, style: static color or RGB',
      'Static color picker',
    ],
  },
  {
    heading: 'Misc options',
    items: [
      'Camera FOV changer, scale offsets',
      'Enable crosshair, third-person hotkey',
      'Combat mode hide entities',
      'Config save system with hotkeys',
    ],
  },
];

const spooferFeatureGroups: ProductFeatureGroup[] = [
  {
    heading: 'Identity reset',
    items: [
      'Disk serial rotation profiles',
      'MAC address rotation',
      'Restore-point walkthrough',
      'Conflict scan before change',
      'Post-change verifier',
    ],
  },
];

const cloudDmaFeatureGroups: ProductFeatureGroup[] = [
  {
    heading: 'Cloud hardware',
    items: [
      'External memory read from second PC',
      'Listing alignment and cabling checklist',
      'BIOS / IOMMU setup notes',
      'Firmware expectations and risk disclaimer',
    ],
  },
];

const galleryRaw = {
  esp: {
    src: SEO_MEDIA.espTactical,
    alt: 'Placeholder tactical overlay card',
    caption: 'Tactical overlays',
    captionDesc: 'Boxes, distances, and teammate filters.',
  },
  aim: {
    src: SEO_MEDIA.aimbotHud,
    alt: 'Placeholder tuning HUD card',
    caption: 'Assist HUD',
    captionDesc: 'FOV-limited pull with separate ADS curves.',
  },
  wall: {
    src: SEO_MEDIA.wallhackLayout,
    alt: 'Placeholder layout card',
    caption: 'Layout preview',
    captionDesc: 'Skeleton or box-only profiles for CQB.',
  },
  loot: {
    src: SEO_MEDIA.lootIntel,
    alt: 'Placeholder economy intel card',
    caption: 'Economy intel',
    captionDesc: 'Container filters for longer sessions.',
  },
  night: {
    src: SEO_MEDIA.nightRaid,
    alt: 'Placeholder night scene card',
    caption: 'Night sessions',
    captionDesc: 'Lower glow opacity for dark maps.',
  },
  chams: {
    src: SEO_MEDIA.chamsPreview,
    alt: 'Placeholder highlight card',
    caption: 'Highlight preview',
    captionDesc: 'Contrast-friendly glow for interior lanes.',
  },
};

type GalleryKey = keyof typeof galleryRaw;

function slide(...keys: GalleryKey[]): ProductSlide[] {
  return keys.map((k) => {
    const item = galleryRaw[k];
    return { src: item.src, alt: item.alt, caption: item.caption, captionDesc: item.captionDesc };
  });
}

function slugFromHref(href: string): string {
  const segment = href.replace(productBase, '').replace(/^\//, '').replace(/\/$/, '');
  return segment || 'modules';
}

const storefrontAbout: ProductPage['about'] = [
  {
    type: 'p',
    text: 'This page lists Product Alpha: overlays, assists, timing, and economy helpers.',
  },
  {
    type: 'h2',
    text: 'How to pick modules',
  },
  {
    type: 'p',
    text: 'Start conservative: thin overlays and low smoothing before competitive queues.',
  },
];

const storefrontBody: ProductPage['body'] = [
  { type: 'h2', text: 'What this page is for' },
  {
    type: 'p',
    text: 'Use it to compare scope before you open checkout. Exact SKUs and renewal terms live on the store.',
  },
  {
    type: 'h2',
    text: 'Forum threads before you pay',
  },
  {
    type: 'p',
    text: 'Browse [tuning thread](/forum/cod-forum-aimbot/), [overlay clutter](/forum/cod-esp-night/), and [layout tips](/forum/cod-wallhack-box/).',
  },
  {
    type: 'h2',
    text: 'Hardware add-ons',
  },
  {
    type: 'p',
    text: 'See the [cloud hardware page](/products/call-of-duty-cheats/cloud-dma/) for cabling and second-PC expectations.',
  },
];

const utilityBodies: Record<string, ProductPage['body']> = {
  'hwid-spoofer': [
    { type: 'h2', text: 'When it fits' },
    {
      type: 'p',
      text: 'Use when fresh accounts fail on one rig but work elsewhere. See [identity thread](/forum/cod-hwid-account/).',
    },
  ],
  appeals: [
    { type: 'h2', text: 'What the paperwork kit covers' },
    { type: 'p', text: 'Organizes restriction notices and receipts. It does not guarantee reversals.' },
  ],
  'cloud-dma': [
    { type: 'h2', text: 'What cloud hardware means here' },
    {
      type: 'p',
      text: 'External memory read from a second machine—confirm cabling on the cloud hardware page. Read [hardware thread](/forum/cod-dma-one-pc/) first.',
    },
  ],
};

const productContent: Record<
  string,
  Pick<
    ProductPage,
    'overview' | 'images' | 'fullFeatures' | 'featureGroups' | 'goodToKnow' | 'limitations' | 'systemRequirements'
  >
> = {
  modules: {
    images: slide('esp', 'aim', 'wall', 'loot', 'chams', 'night'),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: dfSystemRequirements,
    featureGroups: storefrontFeatureGroups,
    fullFeatures: storefrontFeatureGroups.flatMap((g) => g.items),
    overview: {
      title: 'Product Alpha overview',
      paragraphs: [
        'Compare overlays, assists, layout tools, economy intel, and timing in one place.',
        'Presets ship in the portal—tune distance caps before you stack every visual layer.',
      ],
    },
  },
  'hwid-spoofer': {
    images: slide('esp', 'chams', 'loot'),
    goodToKnow: 'Create a restore point, uninstall other tools, and verify identifiers after a cold boot.',
    limitations: 'Identity reset does not fix reputation restrictions alone. Never stack two drivers blindly.',
    systemRequirements: [
      { icon: 'reqWindows', text: 'Windows 10 or 11 64-bit with admin rights.' },
      { icon: 'reqRestorePoint', text: 'Ability to create a system restore point first.' },
      { icon: 'reqWifi', text: 'Internet for identifier diff uploads.' },
    ],
    featureGroups: spooferFeatureGroups,
    fullFeatures: spooferFeatureGroups.flatMap((g) => g.items),
    overview: {
      title: 'Hardware reset workflow',
      paragraphs: ['Use when new accounts fail on a single PC.', 'Pair with conservative presets after success.'],
    },
  },
  appeals: {
    images: slide('loot', 'esp', 'chams'),
    goodToKnow: 'Collect emails, notices, and receipts before opening a case.',
    limitations: 'No guaranteed reversal. Some platform marks are permanent.',
    systemRequirements: [
      { icon: 'reqMailOrder', text: 'Receipt email from checkout.' },
      { icon: 'reqWifiPortal', text: 'Internet access for uploads and responses.' },
    ],
    fullFeatures: ['Notice templates', 'Evidence timelines', 'Status dashboard', 'Secure uploads'],
    overview: {
      title: 'Paperwork workspace',
      paragraphs: ['Track restrictions with structured paperwork instead of scattered tickets.'],
    },
  },
  'cloud-dma': {
    images: slide('esp', 'wall', 'chams'),
    goodToKnow: 'Confirm firmware, cabling, and a stable second PC before you pay.',
    limitations: 'Misconfigured hardware can brick boards or trigger platform restrictions. Informational only.',
    systemRequirements: [
      { icon: 'reqWindows', text: 'Primary PC: 64-bit Windows 10 or 11.' },
      { icon: 'reqCpu', text: 'Second machine or approved reader path per the store listing.' },
      { icon: 'reqWifi', text: 'Stable LAN when cloud profile pairing is required.' },
    ],
    featureGroups: cloudDmaFeatureGroups,
    fullFeatures: cloudDmaFeatureGroups.flatMap((g) => g.items),
    overview: {
      title: 'Cloud hardware overview',
      paragraphs: ['Understand cloud hardware add-ons before checkout—exact boards are listed on the store.'],
    },
  },
};

function buildStorefrontPage(): ProductPage {
  const slug = 'modules';
  const content = productContent[slug]!;
  return {
    slug,
    kind: 'tier',
    badge: 'In stock',
    tier: 'Product Alpha',
    name: 'Product Alpha',
    title: 'Product Alpha: overlays, assists & economy intel',
    subtitle: 'Overlays, assists, economy intel, and timing—checkout on the store after you read scope.',
    desc: content.overview.paragraphs[0]!,
    seoDescription: productPageSeoDescription[slug]!,
    features: ['Overlays & economy intel', 'Assists + timing', 'Capture-friendly HUD', 'Cloud hardware info'],
    more: 7,
    variant: 'popular',
    buyUrl: checkoutForSlug(slug),
    images: content.images,
    overview: content.overview,
    acquisition: acquisitionFor('Product Alpha'),
    goodToKnow: content.goodToKnow,
    limitations: content.limitations,
    fullFeatures: content.fullFeatures,
    featureGroups: content.featureGroups,
    systemRequirements: content.systemRequirements,
    about: storefrontAbout,
    body: storefrontBody,
    relatedForumSlugs: productRelatedForumSlugs[slug] ?? [],
  };
}

function buildUtilityPages(): ProductPage[] {
  return t.products.items
    .filter((p) => p.href !== productBase)
    .map((product) => {
      const slug = slugFromHref(product.href);
      const content = productContent[slug]!;
      return {
        slug,
        kind: 'utility',
        badge: product.badge,
        category: product.category,
        name: product.title,
        title: product.title,
        subtitle: product.subtitle,
        desc: product.desc,
        seoDescription: productPageSeoDescription[slug] ?? product.desc,
        features: product.features,
        more: product.more,
        buyUrl: checkoutForSlug(slug),
        images: content.images,
        overview: content.overview,
        acquisition: acquisitionFor(product.title),
        goodToKnow: content.goodToKnow,
        limitations: content.limitations,
        fullFeatures: content.fullFeatures,
        featureGroups: content.featureGroups,
        systemRequirements: content.systemRequirements,
        body: utilityBodies[slug] ?? [],
        about:
          slug === 'hwid-spoofer'
            ? [{ type: 'p' as const, text: 'Dedicated identity utility—separate from combat tiers.' }]
            : slug === 'cloud-dma'
              ? [{ type: 'p' as const, text: 'Cloud hardware is a separate path—read cabling and firmware notes first.' }]
              : slug === 'appeals'
                ? [{ type: 'p' as const, text: 'This page is the paperwork workspace.' }]
                : undefined,
        relatedForumSlugs: productRelatedForumSlugs[slug as keyof typeof productRelatedForumSlugs] ?? [],
      };
    });
}

export const productPages: ProductPage[] = [buildStorefrontPage(), ...buildUtilityPages()];
export const cheatPages = productPages.filter((p) => p.kind === 'tier');

export function getProductPage(slug: string) {
  return productPages.find((p) => p.slug === slug);
}

export function getCheatPage(slug: string) {
  return cheatPages.find((p) => p.slug === slug);
}

export function getAllProductSlugs() {
  return productPages.map((p) => p.slug);
}

export function getAllCheatSlugs() {
  return cheatPages.map((p) => p.slug);
}

export const heroSlides = slide('esp', 'aim', 'wall', 'loot', 'chams');

export const productHub = {
  path: productBase,
  title: t.products.title,
  subtitle: t.products.subtitle,
  description:
    'Product catalog for desktop: modules, utilities, and checkout links—plans are listed at checkout when you continue.',
  buyUrl: checkoutPath('call-of-duty'),
};