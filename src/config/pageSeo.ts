/**
 * Central titles/descriptions for high-traffic routes.
 * Each SEO page has exactly one primary keyword focus.
 */
export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'Destiny 2 Cheats for PC | Aimbot & ESP',
    description:
      'Explore Destiny 2 cheats for PC with aimbot, player ESP, radar, and misc options. Compare plans and review Cloud DMA setup before buying.',
  },
  '/destiny-cheats-price/': {
    title: 'Destiny 2 Cheats Price | Monthly vs Lifetime',
    description:
      'Compare Destiny 2 cheat pricing: $35 monthly or $150 lifetime, plus Cloud DMA and separately required services before checkout.',
  },
  '/fragpunk-cheats-price/': {
    title: 'Destiny 2 Cheats Price | Monthly vs Lifetime',
    description:
      'Compare Destiny 2 cheat pricing: $35 monthly or $150 lifetime, plus Cloud DMA and separately required services before checkout.',
  },
  '/cloud-dma/': {
    title: 'Cloud DMA for Destiny 2 | $50 Lifetime',
    description:
      'See how Cloud DMA supports Destiny 2 cheats, what the $50 lifetime license covers, and which separate services are required.',
  },
  '/cloud-dma-requirements/': {
    title: 'Cloud DMA Requirements for Windows 10/11',
    description:
      'Check Windows, Hyper-V, CPU virtualization, RAM, and network requirements before buying Cloud DMA for Destiny 2.',
  },
  '/support/': {
    title: 'Destiny 2 Cheats Support | destiny-cheats.com',
    description:
      'Get help with Destiny 2 cheat checkout questions, Cloud DMA setup notes, and where to open a merchant support ticket.',
  },
  '/about/': {
    title: 'About Destiny 2 Cheats | destiny-cheats.com',
    description:
      'destiny-cheats.com explains Destiny 2 cheats for PC, listed features, pricing, and Cloud DMA requirements from the live listing.',
  },
  '/terms/': {
    title: 'Terms of Use for Destiny 2 Cheat Guides',
    description:
      'Terms for using destiny-cheats.com guides and checkout links. Refunds and licenses follow the merchant terms shown at payment.',
  },
  '/privacy/': {
    title: 'Privacy Policy for Destiny 2 Cheat Site',
    description:
      'How cookies and analytics may be used on destiny-cheats.com, and how to ask a question about your data.',
  },
  '/faq/': {
    title: 'Destiny 2 Cheats FAQ | destiny-cheats.com',
    description:
      'Answers about Destiny 2 cheat plans, aimbot and ESP modules, Cloud DMA requirements, and what to verify before checkout.',
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}
