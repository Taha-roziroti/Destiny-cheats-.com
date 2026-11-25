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
    title: 'Destiny 2 Cheats for PC | Aimbot, ESP & Wallhack',
    description:
      'Explore Destiny 2 cheats for PC, including aimbot, ESP, wallhack and radar. Compare plans, review requirements and see what\'s included.',
  },
  '/destiny-2-cheats-price/': {
    title: 'Destiny 2 Cheats Price | Monthly vs. Lifetime',
    description:
      'Compare the listed $35 monthly and $150 lifetime plans, plus the separate Cloud DMA price and required extras. Check current checkout details.',
  },
  '/cloud-dma-for-destiny-2/': {
    title: 'Cloud DMA for Destiny 2 | Price & Requirements',
    description:
      'See how Cloud DMA fits the Destiny 2 setup, its listed $50 price, Hyper-V requirements and separately required services before checkout.',
  },
  '/destiny-2-cheat-system-requirements/': {
    title: 'Destiny 2 Cheat System Requirements for PC',
    description:
      'Check Windows 10/11, HVCI, Core Isolation, TPM and Secure Boot, plus the extra virtualization and Hyper-V requirements for Cloud DMA.',
  },
  '/destiny-2-cheat-setup/': {
    title: 'Destiny 2 Cheats Setup Guide for PC',
    description:
      'Review the documented setup flow, license activation, supported Windows settings and Cloud DMA dependencies before starting.',
  },
  '/destiny-2-cheats-review/': {
    title: 'Destiny 2 Cheats Review | Features & Pricing',
    description:
      'Review Destiny 2 cheat features, listed prices, PC requirements and dependencies. Compare the facts before visiting the merchant.',
  },
  '/destiny-2-cheat-ban-policy/': {
    title: 'Can Destiny 2 Cheats Get You Banned? | Policy',
    description:
      'Understand Bungie\'s published rules on cheats, third-party tools and account or device restrictions before making a decision.',
  },
  // Legacy aliases kept so old crawls still resolve SEO until redirects settle.
  '/destiny-cheats-price/': {
    title: 'Destiny 2 Cheats Price | Monthly vs. Lifetime',
    description:
      'Compare the listed $35 monthly and $150 lifetime plans, plus the separate Cloud DMA price and required extras. Check current checkout details.',
  },
  '/cloud-dma/': {
    title: 'Cloud DMA for Destiny 2 | Price & Requirements',
    description:
      'See how Cloud DMA fits the Destiny 2 setup, its listed $50 price, Hyper-V requirements and separately required services before checkout.',
  },
  '/cloud-dma-requirements/': {
    title: 'Destiny 2 Cheat System Requirements for PC',
    description:
      'Check Windows 10/11, HVCI, Core Isolation, TPM and Secure Boot, plus the extra virtualization and Hyper-V requirements for Cloud DMA.',
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
