import type { IconName } from '../components/icons/types';
import { isAffiliateHref } from '../config/affiliate';
import { normalizeInternalPath, productPath, ROUTES } from '../utils/path';

export type FaqTopic = 'all' | 'plans' | 'esp' | 'scripts' | 'safety' | 'products' | 'blog' | 'setup';

export interface SiteFaqItem {
  id: string;
  topic: FaqTopic;
  icon: IconName;
  q: string;
  a: string;
  aHtml?: string;
  scopes?: string[];
}

function a(text: string): string {
  return text;
}

function link(text: string, href: string): string {
  const normalized = normalizeInternalPath(href);
  const rel = isAffiliateHref(normalized) ? ' rel="nofollow noopener"' : '';
  return `<a href="${normalized}"${rel}>${text}</a>`;
}

function externalCommunityLink(text: string, href: string, ariaLabel: string): string {
  const safe = href.replace(/"/g, '&quot;');
  const label = ariaLabel.replace(/"/g, '&quot;');
  const external = safe.startsWith('http');
  const rel = external ? ' rel="noopener noreferrer"' : '';
  return `<a href="${safe}"${rel} aria-label="${label}">${text}</a>`;
}

const dfModulesPage = link('Product Alpha modules page', productPath('modules'));
const productsHub = link('Product catalog hub', ROUTES.products);
const hwid = link('Identity reset utility page', productPath('hwid-spoofer'));
const appeals = link('Appeals workspace', productPath('appeals'));
const cloudDma = link('Cloud hardware info page', productPath('cloud-dma'));
const faqPage = link('Full FAQ index', ROUTES.faq);
const forumHub = link('Community forum index', ROUTES.forum);
const discordCommunity = externalCommunityLink('forum', ROUTES.forum, 'Browse the forum');

export const siteFaqs: SiteFaqItem[] = [
  {
    id: 'status',
    topic: 'setup',
    icon: 'faqStatus',
    q: 'Where do I check if the portal installer is online?',
    a: a('Use the status banner on example.com and your operator portal. Re-check after every client update.'),
  },
  {
    id: 'after-buy',
    topic: 'setup',
    icon: 'faqAfterBuy',
    q: 'What happens after I buy?',
    a: a('The store emails a license key and portal login. Download only from that portal—never from random links or DMs.'),
  },
  {
    id: 'ban-risk',
    topic: 'safety',
    icon: 'faqBanRisk',
    q: 'Can I lose account access?',
    a: a('Yes. Platform integrity tools and client rules can flag software. You accept that risk when you run third-party tools.'),
  },
  {
    id: 'platforms',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'Which platforms are supported?',
    a: a('Desktop client on Windows 10 or 11 64-bit. macOS and Linux are not supported here.'),
  },
  {
    id: 'license-move',
    topic: 'setup',
    icon: 'faqLicenseMove',
    q: 'Can I move my license to a new PC?',
    a: a('Use the identity reset in the portal or open a support ticket with your key. Limits depend on your license type.'),
  },
  {
    id: 'products-page',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'Where are products and utilities listed?',
    a: `${productsHub} lists the ${dfModulesPage}, ${hwid}, ${appeals}, and ${cloudDma}. Checkout buttons open secure checkout.`,
  },
  {
    id: 'what-is-esp',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'What are player overlays?',
    a: `Overlays draw players, weapons, and economy intel on your screen. Start with thin presets on ${dfModulesPage} before you enable assist layers.`,
    scopes: ['modules'],
  },
  {
    id: 'esp-vs-aim',
    topic: 'esp',
    icon: 'faqEspVsScripts',
    q: 'What is the difference between overlays and assists?',
    a: `Overlays are information only. Smoothing and timing are assists you enable in the module stack—read scope on ${dfModulesPage} first.`,
  },
  {
    id: 'which-tier-esp',
    topic: 'plans',
    icon: 'faqWhichTierEsp',
    q: 'Can I run overlays without assists?',
    a: a('Yes—use intel-first presets on the modules page: thin boxes, item filters, and awareness hints before you enable smoothing or timing.'),
    scopes: ['modules'],
  },
  {
    id: 'which-tier-aim',
    topic: 'scripts',
    icon: 'faqWhichTierScripts',
    q: 'Where do smoothing and timing show up?',
    a: `The module stack includes assists described on ${dfModulesPage}—enable them only after private tests.`,
    scopes: ['modules'],
  },
  {
    id: 'rank-lite-vs-pro',
    topic: 'plans',
    icon: 'faqRankTiers',
    q: 'How do modules differ from utilities?',
    a: `${dfModulesPage} covers portal modules; ${hwid} and ${appeals} are side tools; ${cloudDma} explains optional hardware add-ons.`,
  },
  {
    id: 'stock-status',
    topic: 'plans',
    icon: 'faqEliteSlots',
    q: 'Are keys in stock?',
    a: a('Keys show in stock while the portal banner is green. If a patch pauses delivery, wait for the status update.'),
    scopes: ['modules'],
  },
  {
    id: 'stream-proof',
    topic: 'esp',
    icon: 'faqStreamProof',
    q: 'Will OBS show my overlay?',
    a: `Capture-friendly toggles try to hide overlay layers from capture APIs—still record a local test before you broadcast. Ask in ${forumHub} for OBS layouts.`,
  },
  {
    id: 'status-not-promise',
    topic: 'safety',
    icon: 'faqEspSafer',
    q: 'Does “online” on the banner mean I am safe forever?',
    a: a('No. Online means the build passed current checks—the publisher can ship changes any week. Stop when the banner shows testing or offline.'),
  },
  {
    id: 'esp-quieter',
    topic: 'safety',
    icon: 'faqEspSafer',
    q: 'Are overlays quieter than assists in demos?',
    a: a('Usually, but both still violate rules when used in protected queues. Replays can still look suspicious if you spam glow.'),
  },
  {
    id: 'hwid-when',
    topic: 'products',
    icon: 'faqHwidWhen',
    q: 'When do I need the identity reset utility?',
    a: `Use ${hwid} when new accounts fail on one PC but work elsewhere—hardware-level blocks. Pure account marks may need ${appeals} paperwork instead.`,
    scopes: ['hwid-spoofer'],
  },
  {
    id: 'appeals-what',
    topic: 'products',
    icon: 'faqUgcWhat',
    q: 'What is the appeals workspace?',
    a: `${appeals} is an appeal workspace—templates, uploads, timelines—not a promised outcome.`,
    scopes: ['appeals'],
  },
  {
    id: 'cloud-dma-what',
    topic: 'products',
    icon: 'faqSkinChanger',
    q: 'What is cloud hardware?',
    a: `${cloudDma} explains the external memory read path—second PC, firmware, and cabling vary by listing.`,
    scopes: ['cloud-dma'],
  },
  {
    id: 'external-loader',
    topic: 'products',
    icon: 'faqExternalLoader',
    q: 'Is the loader external?',
    a: a('Yes—runs alongside the client with overlays instead of pasting files into the game folder. Risk still exists—read the status banner.'),
  },
  {
    id: 'mode-split',
    topic: 'plans',
    icon: 'faqVacUpdate',
    q: 'Do different workspaces use the same preset?',
    a: `Usually not—open maps want wider caps while interior modes want shorter distance. Browse ${forumHub} for workspace-specific configs.`,
  },
  {
    id: 'price-subscription',
    topic: 'plans',
    icon: 'faqAfterBuy',
    q: 'Where do I see subscription vs lifetime price?',
    a: a('On checkout after you pick a tier. This site describes modules; renewal length and pause rules finalize on payment.'),
  },
  {
    id: 'vac-update',
    topic: 'safety',
    icon: 'faqVacUpdate',
    q: 'What should I do after a patch?',
    a: a('Verify client files, restart the launcher, wait for the banner to show online, then import a conservative preset from the portal.'),
  },
  {
    id: 'discord-help',
    topic: 'setup',
    icon: 'faqDiscordHelp',
    q: 'How do I get install help?',
    a: `For community setup readouts, use ${discordCommunity}. For billing and keys, open a support ticket with your order address and Windows build—avoid posting keys in public threads.`,
  },
  {
    id: 'faq-more',
    topic: 'all',
    icon: 'faqMore',
    q: 'Where is the full FAQ?',
    a: `Use the ${faqPage} for every topic, or browse ${forumHub} for lived setup threads.`,
  },
];

export function getLandingFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) =>
    ['status', 'after-buy', 'ban-risk', 'platforms', 'license-move', 'products-page'].includes(f.id),
  );
}

export function getAllFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) => f.topic !== 'all');
}

export const SITE_FAQ_SECTION_COPY = {
  eyebrow: 'Help center',
  title: 'FAQ on portal, risk, and checkout',
  subtitle:
    'Everything about modules, identity tools, appeals, cloud hardware, safety, and on-site articles. Filter topics below.',
} as const;

export const SITE_FAQ_FILTER_TOPICS: FaqTopic[] = ['all', 'plans', 'esp', 'scripts', 'safety', 'products', 'setup'];

export const CONTEXTUAL_FAQ_SECTION_COPY = {
  eyebrow: 'FAQ',
  title: 'Questions about this page',
  subtitle: 'Answers tied to what you are reading—visit the FAQ page for everything.',
} as const;

export function faqFilterTopicsForItems(items: SiteFaqItem[]): FaqTopic[] {
  const present = new Set(items.map((item) => item.topic));
  const topics: FaqTopic[] = ['all'];
  for (const topic of SITE_FAQ_FILTER_TOPICS) {
    if (topic !== 'all' && present.has(topic)) topics.push(topic);
  }
  return topics;
}

export function getProductFaqs(slug: string, kind: 'tier' | 'utility'): SiteFaqItem[] {
  const general = siteFaqs.filter(
    (f) => !f.scopes && ['setup', 'safety', 'plans', 'esp', 'scripts'].includes(f.topic),
  );
  const scoped = siteFaqs.filter((f) => f.scopes?.includes(slug));
  const tierCompare = siteFaqs.filter((f) =>
    ['rank-lite-vs-pro', 'stock-status', 'status-not-promise', 'vac-update'].includes(f.id),
  );
  const combined = kind === 'tier' ? [...scoped, ...tierCompare, ...general.slice(0, 8)] : [...scoped, ...general.slice(0, 6)];
  const seen = new Set<string>();
  return combined.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

const blogTopicFaqs: Record<string, SiteFaqItem[]> = {
  Setup: [
    {
      id: 'blog-setup-loader',
      topic: 'blog',
      icon: 'faqBlogSetupLoader',
      q: 'Where do I download the loader?',
      a: a('Only from the operator portal linked in your receipt—not from forum DMs.'),
    },
  ],
  Features: [
    {
      id: 'blog-feat-esp',
      topic: 'esp',
      icon: 'faqBlogSlugEsp',
      q: 'Will these overlay settings work on every map?',
      a: a('Layouts are a starting point—tweak thickness per map and resolution after you test privately.'),
    },
  ],
  Safety: [
    {
      id: 'blog-safety-risk',
      topic: 'safety',
      icon: 'faqBlogSecVac',
      q: 'Does the platform allow these modules?',
      a: a('No. The article explains integrity risks; assume ranked play stays off-limits when overlays are enabled.'),
    },
  ],
  Troubleshooting: [
    {
      id: 'blog-vac-article',
      topic: 'setup',
      icon: 'faqBlogGuideStatus',
      q: 'I got an integrity message after setup—why?',
      a: a('Articles reduce mistakes; they do not remove platform risk. Stop until support answers your ticket.'),
    },
  ],
};

const defaultBlogFaqs: SiteFaqItem[] = [
  {
    id: 'blog-default-1',
    topic: 'blog',
    icon: 'faqBlogDefault1',
    q: 'Are these articles official manuals?',
    a: `They explain workflows and link to ${productsHub}. The modules page lists scope for checkout decisions.`,
  },
  {
    id: 'blog-default-2',
    topic: 'blog',
    icon: 'faqBlogDefault2',
    q: 'Who do I contact if I am stuck?',
    a: `Open a support ticket with your order email and client build number, or read ${faqPage} and ${forumHub} while you wait.`,
  },
];

export function getBlogFaqs(tag: string, slug: string): SiteFaqItem[] {
  const topicFaqs = blogTopicFaqs[tag] ?? [];
  const slugHints: SiteFaqItem[] = [];
  if (slug.includes('esp') || slug.includes('wallhack')) {
    slugHints.push({
      id: 'blog-slug-esp',
      topic: 'esp',
      icon: 'faqBlogSlugEsp',
      q: 'Which product page matches these overlay tips?',
      a: `Start with intel-only presets on ${dfModulesPage}, then enable assist layers only after private tests.`,
    });
  }
  if (slug.includes('aimbot') || slug.includes('trigger')) {
    slugHints.push({
      id: 'blog-slug-aim',
      topic: 'scripts',
      icon: 'faqBlogSlugScripts',
      q: 'Where is assist documented?',
      a: `${dfModulesPage} lists combat assists in the module stack—enable smoothing and timing conservatively.`,
    });
  }
  if (slug.includes('hwid') || slug.includes('vac')) {
    slugHints.push({
      id: 'blog-slug-hwid',
      topic: 'products',
      icon: 'faqBlogSlugHwid',
      q: 'Does this replace identity or appeals tools?',
      a: `Articles complement ${hwid} and ${appeals}—read those product pages for scope.`,
    });
  }
  return [...slugHints, ...topicFaqs, ...defaultBlogFaqs].slice(0, 8);
}

export const compareRows = [
  { feature: 'Player overlays & outlines', icon: 'comparePlayerEsp' as const, included: true },
  { feature: 'Loot & container markers', icon: 'compareWardLocator' as const, included: true },
  { feature: 'Awareness reinforcement', icon: 'compareRuneTimer' as const, included: true },
  { feature: 'Smoke silhouette highlight', icon: 'compareZoomHack' as const, included: true },
  { feature: 'Capture / stream-safe toggles', icon: 'compareStreamproof' as const, included: true },
  { feature: 'Smoothing & FOV caps', icon: 'compareAutoCombo' as const, included: true },
  { feature: 'Timing modes', icon: 'compareOrbwalker' as const, included: true },
  { feature: 'Recoil compensation', icon: 'compareActivator' as const, included: true },
  { feature: 'Economy filters', icon: 'compareAbilityRadius' as const, included: true },
  { feature: 'Misc movement & FOV assists', icon: 'compareSmokeAlert' as const, included: true },
  { feature: 'Portal auto updater', icon: 'comparePriorityPatch' as const, included: true },
  { feature: 'Cloud hardware add-on (store)', icon: 'compareSkinChanger' as const, included: true },
  { feature: 'Cloud config backup', icon: 'compareCloudBackup' as const, included: true },
];