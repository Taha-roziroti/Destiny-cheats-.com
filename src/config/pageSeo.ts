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
    title: 'FragPunk Cheats for PC | Soft Aim & ESP',
    description:
      'Explore FragPunk cheats for PC with soft aim, player ESP, radar and recoil options. Compare plans and check setup requirements before buying.',
  },
  '/fragpunk-cheats-price/': {
    title: 'FragPunk Cheats Price | Monthly vs Lifetime',
    description:
      'Compare the $35 monthly and $150 lifetime FragPunk plans, plus Cloud DMA and its separately required services. Check the full setup cost.',
  },
  '/cloud-dma/': {
    title: 'Cloud DMA for FragPunk | $50 Lifetime',
    description:
      'See how Cloud DMA fits the FragPunk setup, what its $50 lifetime license covers, and which separate services are required before checkout.',
  },
  '/cloud-dma-requirements/': {
    title: 'Cloud DMA Requirements for Windows 10/11',
    description:
      'Check Windows, Hyper-V, CPU virtualization, RAM and network requirements before buying Cloud DMA. Review the separately required services.',
  },
  '/support/': {
    title: 'FragPunk Cheats Support | fragpunk-cheats.com',
    description:
      'Get help with FragPunk cheat checkout questions, Cloud DMA setup notes, and where to open a merchant support ticket.',
  },
  '/about/': {
    title: 'About FragPunk Cheats | fragpunk-cheats.com',
    description:
      'fragpunk-cheats.com explains FragPunk cheats for PC, listed features, pricing, and Cloud DMA requirements from the live product listing.',
  },
  '/terms/': {
    title: 'Terms of Use for FragPunk Cheat Guides',
    description:
      'Terms for using fragpunk-cheats.com guides and checkout links. Refunds and licenses follow the merchant terms shown when you pay.',
  },
  '/privacy/': {
    title: 'Privacy Policy for FragPunk Cheat Site',
    description:
      'How cookies and analytics may be used on fragpunk-cheats.com, and how to ask a question about your data.',
  },
  '/faq/': {
    title: 'FragPunk Cheats FAQ | fragpunk-cheats.com',
    description:
      'Answers about FragPunk cheat plans, soft aim and ESP modules, Cloud DMA requirements, and what to verify before checkout.',
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
