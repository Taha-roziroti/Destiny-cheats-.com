import { affiliateLinks } from './affiliate-links.mjs';

/** Internal /go/ paths map to mandatory merchant destinations. */
export const CHECKOUT_URLS = {
  fragpunk: affiliateLinks.fragpunk,
  bodycam: affiliateLinks.fragpunk,
  'call-of-duty': affiliateLinks.fragpunk,
  'cloud-dma': affiliateLinks.cloudDMA,
  'hwid-spoofer': affiliateLinks.hwidSpoofer,
};

export const CHECKOUT_PATH_REDIRECTS = new Map([
  ['/go/fragpunk', CHECKOUT_URLS.fragpunk],
  ['/go/fragpunk/', CHECKOUT_URLS.fragpunk],
  ['/go/bodycam', CHECKOUT_URLS.fragpunk],
  ['/go/bodycam/', CHECKOUT_URLS.fragpunk],
  ['/go/call-of-duty', CHECKOUT_URLS.fragpunk],
  ['/go/call-of-duty/', CHECKOUT_URLS.fragpunk],
  ['/go/store', CHECKOUT_URLS.fragpunk],
  ['/go/store/', CHECKOUT_URLS.fragpunk],
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
  ['/products/call-of-duty-cheats/cloud-dma/', '/cloud-dma/'],
  ['/products/call-of-duty-cheats/cloud-dma', '/cloud-dma/'],
  ['/products/call-of-duty-cheats/utilities/', '/fragpunk-cheats-price/'],
  ['/products/call-of-duty-cheats/utilities', '/fragpunk-cheats-price/'],
  ['/products/call-of-duty-cheats/hwid-spoofer/', '/cloud-dma/'],
  ['/products/call-of-duty-cheats/hwid-spoofer', '/cloud-dma/'],
  ['/products/call-of-duty-cheats/appeals/', '/support/'],
  ['/products/call-of-duty-cheats/appeals', '/support/'],
  ['/blogs/', '/'],
  ['/forum/', '/'],
  ['/reviews/', '/'],
  ['/best-bodycam-cheats/', '/'],
  ['/bodycam-aimbot/', '/'],
  ['/bodycam-esp/', '/'],
  ['/bodycam-cheats-price/', '/fragpunk-cheats-price/'],
  ['/bodycam-cloud-dma/', '/cloud-dma/'],
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
