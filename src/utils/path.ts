import { PRODUCT_BASE } from '../config/site';

const storePath = `${PRODUCT_BASE}modules/`;

/** Normalize internal paths to match trailingSlash: 'always' and canonical URLs. */
export function withTrailingSlash(path: string): string {
  if (!path || path.startsWith('http') || path.startsWith('#') || path.startsWith('mailto:')) {
    return path;
  }
  const [pathname, hash = ''] = path.split('#');
  const normalized = pathname === '/' || pathname.endsWith('/') ? pathname : `${pathname}/`;
  return hash ? `${normalized}#${hash}` : normalized;
}

export const LEGACY_PATH_MAP: Record<string, string> = {
  '/cheats': PRODUCT_BASE,
  '/cheats/': PRODUCT_BASE,
  '/cheats/lite': storePath,
  '/cheats/lite/': storePath,
  '/cheats/pro': storePath,
  '/cheats/pro/': storePath,
  '/cheats/elite': storePath,
  '/cheats/elite/': storePath,
  '/products/other-cheats': PRODUCT_BASE,
  '/products/other-cheats/': PRODUCT_BASE,
  '/products/dota-2-cheats': PRODUCT_BASE,
  '/products/dota-2-cheats/': PRODUCT_BASE,
  '/products/dota-2-cheats/utilities': `${PRODUCT_BASE}utilities/`,
  '/products/dota-2-cheats/utilities/': `${PRODUCT_BASE}utilities/`,
  '/contact': '/support/',
  '/contact/': '/support/',
  '/fragpunk-cheats-price': '/destiny-2-cheats-price/',
  '/fragpunk-cheats-price/': '/destiny-2-cheats-price/',
  '/destiny-cheats-price': '/destiny-2-cheats-price/',
  '/destiny-cheats-price/': '/destiny-2-cheats-price/',
  '/cloud-dma': '/cloud-dma-for-destiny-2/',
  '/cloud-dma/': '/cloud-dma-for-destiny-2/',
  '/cloud-dma-requirements': '/destiny-2-cheat-system-requirements/',
  '/cloud-dma-requirements/': '/destiny-2-cheat-system-requirements/',
};

export function normalizeInternalPath(href: string): string {
  if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('/go/')) {
    return href;
  }

  const hashIndex = href.indexOf('#');
  const rawPath = hashIndex >= 0 ? href.slice(0, hashIndex) : href;
  const hash = hashIndex >= 0 ? href.slice(hashIndex) : '';

  let pathname = rawPath.startsWith('/') ? rawPath : `/${rawPath}`;
  pathname = LEGACY_PATH_MAP[pathname] ?? pathname;

  return withTrailingSlash(pathname) + hash;
}

export const ROUTES = {
  home: '/',
  buyingGuide: '/',
  aimbot: '/',
  esp: '/',
  pricing: '/destiny-2-cheats-price/',
  cloudDma: '/cloud-dma-for-destiny-2/',
  cloudDmaRequirements: '/destiny-2-cheat-system-requirements/',
  setup: '/destiny-2-cheat-setup/',
  review: '/destiny-2-cheats-review/',
  banPolicy: '/destiny-2-cheat-ban-policy/',
  blog: '/',
  blogs: '/',
  reviews: '/destiny-2-cheats-review/',
  forum: '/',
  products: '/',
  productsStorefront: '/',
  productsUtilities: '/destiny-2-cheats-price/',
  faq: '/faq/',
  terms: '/terms/',
  about: '/about/',
  support: '/support/',
  privacy: '/privacy/',
} as const;

export function cheatPath(slug: string): string {
  return productPath(slug);
}

export function productPath(slug: string): string {
  return `${PRODUCT_BASE}${slug}/`;
}
