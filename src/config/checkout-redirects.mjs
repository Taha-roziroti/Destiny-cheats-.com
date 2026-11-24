import { affiliateLinks } from './affiliate-links.mjs';

/** Internal /go/ paths map to mandatory merchant destinations. */
export const CHECKOUT_URLS = {
  bodycam: affiliateLinks.bodycam,
  'call-of-duty': affiliateLinks.bodycam,
  'cloud-dma': affiliateLinks.cloudDMA,
  'hwid-spoofer': affiliateLinks.hwidSpoofer,
};

export const CHECKOUT_PATH_REDIRECTS = new Map([
  ['/go/bodycam', CHECKOUT_URLS.bodycam],
  ['/go/bodycam/', CHECKOUT_URLS.bodycam],
  ['/go/call-of-duty', CHECKOUT_URLS.bodycam],
  ['/go/call-of-duty/', CHECKOUT_URLS.bodycam],
  ['/go/store', CHECKOUT_URLS.bodycam],
  ['/go/store/', CHECKOUT_URLS.bodycam],
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
  ['/products/call-of-duty-cheats/cloud-dma/', '/bodycam-cloud-dma/'],
  ['/products/call-of-duty-cheats/cloud-dma', '/bodycam-cloud-dma/'],
  ['/products/call-of-duty-cheats/utilities/', '/bodycam-cheats-price/'],
  ['/products/call-of-duty-cheats/utilities', '/bodycam-cheats-price/'],
  ['/products/call-of-duty-cheats/hwid-spoofer/', '/bodycam-cloud-dma/'],
  ['/products/call-of-duty-cheats/hwid-spoofer', '/bodycam-cloud-dma/'],
  ['/products/call-of-duty-cheats/appeals/', '/support/'],
  ['/products/call-of-duty-cheats/appeals', '/support/'],
  ['/blogs/', '/best-bodycam-cheats/'],
  ['/forum/', '/best-bodycam-cheats/'],
  ['/reviews/', '/'],
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
