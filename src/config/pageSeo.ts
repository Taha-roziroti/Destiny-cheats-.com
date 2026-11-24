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
    title: 'Bodycam Cheats for PC | Features & Pricing',
    description:
      'Explore Bodycam cheats for PC with ESP, aimbot, radar and weapon options. Compare plans and check current requirements before buying.',
  },
  '/best-bodycam-cheats/': {
    title: 'Best Bodycam Cheats: Features & Buying Guide',
    description:
      'Compare Bodycam cheat options by features, compatibility, pricing and support. Use this checklist before choosing a provider.',
  },
  '/bodycam-aimbot/': {
    title: 'Bodycam Aimbot for PC | Features & Options',
    description:
      'Review the listed Bodycam aimbot options, including target selection, FOV controls and silent aim, before choosing a plan.',
  },
  '/bodycam-esp/': {
    title: 'Bodycam ESP & Wallhack | Player Visual Options',
    description:
      'Explore Bodycam ESP options including boxes, skeletons, snaplines, names, health and distance. See how they fit the full package.',
  },
  '/bodycam-cheats-price/': {
    title: 'Bodycam Cheats Price | Monthly vs Lifetime',
    description:
      'Compare the listed plans: $35 for 30 days or $150 lifetime. Review included features and current checkout terms before buying.',
  },
  '/bodycam-cloud-dma/': {
    title: 'Bodycam Cloud DMA | Setup & Requirements',
    description:
      'Understand the Cloud DMA requirement, single-PC Hyper-V setup and separately priced components before choosing a Bodycam setup.',
  },
  '/support/': {
    title: 'Bodycam Cheats Support | bodycam-cheat.com',
    description:
      'Get help with Bodycam cheat checkout questions, Cloud DMA setup notes, and where to open a merchant support ticket.',
  },
  '/about/': {
    title: 'About Bodycam Cheat | bodycam-cheat.com',
    description:
      'bodycam-cheat.com explains Bodycam cheats for PC, listed features, pricing, and Cloud DMA requirements from the live product listing.',
  },
  '/terms/': {
    title: 'Terms of Use | bodycam-cheat.com',
    description:
      'Terms for using bodycam-cheat.com guides and checkout links. Refunds and licenses follow the merchant terms shown when you pay.',
  },
  '/privacy/': {
    title: 'Privacy Policy | bodycam-cheat.com',
    description:
      'How cookies and analytics may be used on bodycam-cheat.com, and how to ask a question about your data.',
  },
  '/faq/': {
    title: 'Bodycam Cheats FAQ | bodycam-cheat.com',
    description:
      'Answers about Bodycam cheat plans, ESP and aimbot modules, Cloud DMA requirements, and what to verify before checkout.',
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
