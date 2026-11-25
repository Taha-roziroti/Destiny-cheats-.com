import { affiliateLinks } from './affiliate-links.mjs';

/** Internal /go/ paths map to mandatory merchant destinations. */
export const CHECKOUT_URLS = {
  destiny: affiliateLinks.destiny,
  fragpunk: affiliateLinks.destiny,
  bodycam: affiliateLinks.destiny,
  'call-of-duty': affiliateLinks.destiny,
  'cloud-dma': affiliateLinks.cloudDMA,
  'hwid-spoofer': affiliateLinks.hwidSpoofer,
};

export const CHECKOUT_PATH_REDIRECTS = new Map([
  ['/go/destiny', CHECKOUT_URLS.destiny],
  ['/go/destiny/', CHECKOUT_URLS.destiny],
  ['/go/destiny-2', CHECKOUT_URLS.destiny],
  ['/go/destiny-2/', CHECKOUT_URLS.destiny],
  ['/go/fragpunk', CHECKOUT_URLS.destiny],
  ['/go/fragpunk/', CHECKOUT_URLS.destiny],
  ['/go/bodycam', CHECKOUT_URLS.destiny],
  ['/go/bodycam/', CHECKOUT_URLS.destiny],
  ['/go/call-of-duty', CHECKOUT_URLS.destiny],
  ['/go/call-of-duty/', CHECKOUT_URLS.destiny],
  ['/go/store', CHECKOUT_URLS.destiny],
  ['/go/store/', CHECKOUT_URLS.destiny],
  ['/go/cloud-dma', CHECKOUT_URLS['cloud-dma']],
  ['/go/cloud-dma/', CHECKOUT_URLS['cloud-dma']],
  ['/go/hwid-spoofer', CHECKOUT_URLS['hwid-spoofer']],
  ['/go/hwid-spoofer/', CHECKOUT_URLS['hwid-spoofer']],
]);

export const LEGACY_PRODUCT_REDIRECTS = new Map([
  ['/products/call-of-duty-cheats/', '/'],
  ['/products/call-of-duty-cheats', '/'],
  ['/products/call-of-duty-cheats/modules/', '/'],
  ['/products/call-of-duty-cheats/modules', '/'],
  ['/products/call-of-duty-cheats/cloud-dma/', '/cloud-dma-for-destiny-2/'],
  ['/products/call-of-duty-cheats/cloud-dma', '/cloud-dma-for-destiny-2/'],
  ['/products/call-of-duty-cheats/utilities/', '/destiny-2-cheats-price/'],
  ['/products/call-of-duty-cheats/utilities', '/destiny-2-cheats-price/'],
  ['/products/call-of-duty-cheats/hwid-spoofer/', '/cloud-dma-for-destiny-2/'],
  ['/products/call-of-duty-cheats/hwid-spoofer', '/cloud-dma-for-destiny-2/'],
  ['/products/call-of-duty-cheats/appeals/', '/support/'],
  ['/products/call-of-duty-cheats/appeals', '/support/'],
  ['/blogs/', '/'],
  ['/forum/', '/'],
  ['/reviews/', '/destiny-2-cheats-review/'],
  ['/best-bodycam-cheats/', '/'],
  ['/bodycam-aimbot/', '/'],
  ['/bodycam-esp/', '/'],
  ['/bodycam-cheats-price/', '/destiny-2-cheats-price/'],
  ['/fragpunk-cheats-price/', '/destiny-2-cheats-price/'],
  ['/fragpunk-cheats-price', '/destiny-2-cheats-price/'],
  ['/destiny-cheats-price/', '/destiny-2-cheats-price/'],
  ['/destiny-cheats-price', '/destiny-2-cheats-price/'],
  ['/cloud-dma/', '/cloud-dma-for-destiny-2/'],
  ['/cloud-dma', '/cloud-dma-for-destiny-2/'],
  ['/cloud-dma-requirements/', '/destiny-2-cheat-system-requirements/'],
  ['/cloud-dma-requirements', '/destiny-2-cheat-system-requirements/'],
  ['/bodycam-cloud-dma/', '/cloud-dma-for-destiny-2/'],
]);

export function resolveCheckoutPathRedirect(pathname) {
  const direct = CHECKOUT_PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/')) {
    return CHECKOUT_PATH_REDIRECTS.get(`${pathname}/`) ?? null;
  }

  return null;
}

export function resolveLegacyProductRedirect(pathname) {
  const direct = LEGACY_PRODUCT_REDIRECTS.get(pathname);
  if (direct) return direct;
  if (pathname !== '/' && !pathname.endsWith('/')) {
    return LEGACY_PRODUCT_REDIRECTS.get(`${pathname}/`) ?? null;
  }
  return null;
}
