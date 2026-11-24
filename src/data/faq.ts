import type { IconName } from '../components/icons/types';
import { isAffiliateHref } from '../config/affiliate';
import { normalizeInternalPath, ROUTES } from '../utils/path';

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

const homePage = link('home overview', ROUTES.home);
const buyingGuide = link('buying checklist', ROUTES.buyingGuide);
const aimbotPage = link('aim settings', ROUTES.aimbot);
const espPage = link('visual options', ROUTES.esp);
const pricingPage = link('plan comparison', ROUTES.pricing);
const cloudDmaPage = link('DMA setup notes', ROUTES.cloudDma);
const faqPage = link('FAQ index', ROUTES.faq);
const supportPage = link('support contact', ROUTES.support);

export const siteFaqs: SiteFaqItem[] = [
  {
    id: 'status',
    topic: 'setup',
    icon: 'faqStatus',
    q: 'Where do I check current availability?',
    a: a('Check the live merchant listing linked from Buy now on this site. Availability and stock can change after client updates.'),
  },
  {
    id: 'after-buy',
    topic: 'setup',
    icon: 'faqAfterBuy',
    q: 'What happens after I buy?',
    a: a('The merchant emails access details for the plan you paid for. Follow only the download and setup steps from that receipt or portal.'),
  },
  {
    id: 'ban-risk',
    topic: 'safety',
    icon: 'faqBanRisk',
    q: 'Can I lose account access?',
    a: a('Yes. Game integrity systems can flag third-party software. You accept that risk when you run Bodycam cheats.'),
  },
  {
    id: 'platforms',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'Which platforms are supported?',
    a: a('Windows 10 or 11 64-bit for the main Bodycam package. Confirm HVCI, RAM, and other listed requirements on the overview before you buy.'),
  },
  {
    id: 'license-move',
    topic: 'setup',
    icon: 'faqLicenseMove',
    q: 'Can I move my license to a new PC?',
    a: a('Ask the merchant with your order email. Transfer rules depend on the plan you purchased.'),
  },
  {
    id: 'products-page',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'Where are Bodycam features and prices listed?',
    a: `${homePage} covers the package. Use ${aimbotPage}, ${espPage}, ${pricingPage}, and ${cloudDmaPage} for deeper notes. Checkout opens from Buy now.`,
  },
  {
    id: 'what-is-esp',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'What does Bodycam ESP include?',
    a: `Listed options include boxes, skeletons, snaplines, names, health, and distance. See ${espPage} for the visual stack.`,
    scopes: ['modules'],
  },
  {
    id: 'esp-vs-aim',
    topic: 'esp',
    icon: 'faqEspVsScripts',
    q: 'What is the difference between ESP and aimbot?',
    a: `ESP is visual information. Aimbot covers targeting, FOV, and related aim options on ${aimbotPage}.`,
  },
  {
    id: 'which-tier-esp',
    topic: 'plans',
    icon: 'faqWhichTierEsp',
    q: 'Can I use ESP without aimbot?',
    a: a('Feature toggles depend on the live package. Review the listing and enable only what you need after private testing.'),
    scopes: ['modules'],
  },
  {
    id: 'which-tier-aim',
    topic: 'scripts',
    icon: 'faqWhichTierScripts',
    q: 'Where are aimbot controls documented?',
    a: `${aimbotPage} summarizes listed aim settings such as target selection, FOV, and silent aim options.`,
    scopes: ['modules'],
  },
  {
    id: 'rank-lite-vs-pro',
    topic: 'plans',
    icon: 'faqRankTiers',
    q: 'How do monthly and lifetime plans differ?',
    a: `Published comparison is $35 for 30 days or $150 lifetime with the same listed feature set. Details live on ${pricingPage}.`,
  },
  {
    id: 'stock-status',
    topic: 'plans',
    icon: 'faqEliteSlots',
    q: 'Are keys in stock?',
    a: a('Stock follows the live merchant page. If checkout is paused after a patch, wait for the listing to reopen.'),
    scopes: ['modules'],
  },
  {
    id: 'stream-proof',
    topic: 'esp',
    icon: 'faqStreamProof',
    q: 'Will OBS show my overlay?',
    a: a('Stream-friendly toggles may hide overlays from capture APIs. Always record a local test before you broadcast.'),
  },
  {
    id: 'status-not-promise',
    topic: 'safety',
    icon: 'faqEspSafer',
    q: 'Does an online listing mean I am safe forever?',
    a: a('No. An available build only reflects the current listing. Client updates can change risk at any time.'),
  },
  {
    id: 'esp-quieter',
    topic: 'safety',
    icon: 'faqEspSafer',
    q: 'Is ESP safer than aimbot?',
    a: a('Visual tools are often less conspicuous than aggressive aim assists, but both can violate game rules and still risk flags.'),
  },
  {
    id: 'hwid-when',
    topic: 'products',
    icon: 'faqHwidWhen',
    q: 'When do I need an HWID spoofer?',
    a: `Only if the merchant listing says hardware identity tools are required for your case. It is sold separately from the main Bodycam package; see checkout chooser options or ${supportPage}.`,
    scopes: ['hwid-spoofer'],
  },
  {
    id: 'appeals-what',
    topic: 'products',
    icon: 'faqUgcWhat',
    q: 'Where do I get help after purchase?',
    a: `Use ${supportPage} with your order email. Merchant tickets handle keys, access, and refunds per checkout terms.`,
    scopes: ['appeals'],
  },
  {
    id: 'cloud-dma-what',
    topic: 'products',
    icon: 'faqSkinChanger',
    q: 'What is Bodycam Cloud DMA?',
    a: `${cloudDmaPage} covers the separately priced Cloud DMA option, including single-PC Hyper-V setup notes from the listing.`,
    scopes: ['cloud-dma'],
  },
  {
    id: 'external-loader',
    topic: 'products',
    icon: 'faqExternalLoader',
    q: 'Is setup external to the game folder?',
    a: a('Follow the merchant setup guide for your plan. Do not install files from unofficial mirrors or DMs.'),
  },
  {
    id: 'mode-split',
    topic: 'plans',
    icon: 'faqVacUpdate',
    q: 'Do I need different presets per map?',
    a: `Often yes. Start from the defaults on ${buyingGuide}, then tune ESP and aim options privately per map type.`,
  },
  {
    id: 'price-subscription',
    topic: 'plans',
    icon: 'faqAfterBuy',
    q: 'Where do I see subscription vs lifetime price?',
    a: `Listed plans are on ${pricingPage}. Final total and any renewals confirm on merchant checkout.`,
  },
  {
    id: 'vac-update',
    topic: 'safety',
    icon: 'faqVacUpdate',
    q: 'What should I do after a game patch?',
    a: a('Wait for the merchant listing to show the build is updated, then re-check Windows requirements before you launch again.'),
  },
  {
    id: 'discord-help',
    topic: 'setup',
    icon: 'faqDiscordHelp',
    q: 'How do I get install help?',
    a: `Use ${supportPage} with your order email and Windows version. Avoid posting license keys in public chats.`,
  },
  {
    id: 'faq-more',
    topic: 'all',
    icon: 'faqMore',
    q: 'Where is the full FAQ?',
    a: `Use the ${faqPage} for every topic, or start from ${buyingGuide} for pre-purchase checks.`,
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
  title: 'FAQ on Bodycam plans, features, and checkout',
  subtitle:
    'Answers about ESP, aimbot, pricing, Cloud DMA, Windows requirements, and risk before you buy.',
} as const;

export const SITE_FAQ_FILTER_TOPICS: FaqTopic[] = ['all', 'plans', 'esp', 'scripts', 'safety', 'products', 'setup'];

export const CONTEXTUAL_FAQ_SECTION_COPY = {
  eyebrow: 'FAQ',
  title: 'Questions about this page',
  subtitle: 'Answers tied to what you are reading. Visit the FAQ page for everything.',
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
      q: 'Where do I download the client?',
      a: a('Only from the merchant portal linked in your receipt, not from forum DMs.'),
    },
  ],
  Features: [
    {
      id: 'blog-feat-esp',
      topic: 'esp',
      icon: 'faqBlogSlugEsp',
      q: 'Will these ESP settings work on every map?',
      a: a('Treat them as a starting point. Tweak thickness and distance after private tests.'),
    },
  ],
  Safety: [
    {
      id: 'blog-safety-risk',
      topic: 'safety',
      icon: 'faqBlogSecVac',
      q: 'Does the game allow these tools?',
      a: a('No. Guides explain integrity risk; assume live play stays risky when cheats are enabled.'),
    },
  ],
  Troubleshooting: [
    {
      id: 'blog-vac-article',
      topic: 'setup',
      icon: 'faqBlogGuideStatus',
      q: 'I hit an integrity or loader error after setup. Why?',
      a: a('Guides reduce mistakes; they do not remove platform risk. Stop until merchant support answers your ticket.'),
    },
  ],
};

const defaultBlogFaqs: SiteFaqItem[] = [
  {
    id: 'blog-default-1',
    topic: 'blog',
    icon: 'faqBlogDefault1',
    q: 'Are these articles official manuals?',
    a: `They explain workflows and link back to ${homePage}. Confirm scope on the live listing before checkout.`,
  },
  {
    id: 'blog-default-2',
    topic: 'blog',
    icon: 'faqBlogDefault2',
    q: 'Who do I contact if I am stuck?',
    a: `Open a merchant ticket with your order email, or read ${faqPage} and ${supportPage} while you wait.`,
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
      q: 'Which page matches these ESP tips?',
      a: `Start with ${espPage}, then enable only the overlays you need after private tests.`,
    });
  }
  if (slug.includes('aimbot') || slug.includes('trigger')) {
    slugHints.push({
      id: 'blog-slug-aim',
      topic: 'scripts',
      icon: 'faqBlogSlugScripts',
      q: 'Where is aimbot documented?',
      a: `${aimbotPage} lists aim options from the package. Enable them conservatively.`,
    });
  }
  if (slug.includes('hwid') || slug.includes('vac') || slug.includes('dma')) {
    slugHints.push({
      id: 'blog-slug-hwid',
      topic: 'products',
      icon: 'faqBlogSlugHwid',
      q: 'Does this replace Cloud DMA or support?',
      a: `Read ${cloudDmaPage} for hardware notes and ${supportPage} for order help.`,
    });
  }
  return [...slugHints, ...topicFaqs, ...defaultBlogFaqs].slice(0, 8);
}

export const compareRows = [
  { feature: 'Player ESP boxes & skeletons', icon: 'comparePlayerEsp' as const, included: true },
  { feature: 'Names, health & distance', icon: 'compareWardLocator' as const, included: true },
  { feature: 'Snaplines & radar', icon: 'compareRuneTimer' as const, included: true },
  { feature: 'Aimbot FOV & target options', icon: 'compareAutoCombo' as const, included: true },
  { feature: 'Silent aim options', icon: 'compareOrbwalker' as const, included: true },
  { feature: 'Weapon / misc assists', icon: 'compareActivator' as const, included: true },
  { feature: 'Capture / stream-safe toggles', icon: 'compareStreamproof' as const, included: true },
  { feature: 'Cloud DMA add-on (separate)', icon: 'compareSkinChanger' as const, included: true },
  { feature: 'Merchant auto updater', icon: 'comparePriorityPatch' as const, included: true },
];
