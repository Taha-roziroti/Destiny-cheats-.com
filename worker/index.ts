import { CANONICAL_ORIGIN, legacyBlogRedirect } from './blog-redirects';
import { resolveCheckoutPathRedirect } from '../src/config/checkout-redirects.mjs';

interface Env {
  ASSETS: Fetcher;
  GA_MEASUREMENT_ID?: string;
}

const PRODUCTION_HOST = 'destiny-cheats.com';

/** Prior clone hostnames only. */
const LEGACY_ALIAS_HOSTS = new Set([
  'www.destiny-cheats.com',
  'fragpunk-cheats.com',
  'www.fragpunk-cheats.com',
  'bodycam-cheat.com',
  'www.bodycam-cheat.com',
  'callofdutycheats.net',
  'www.callofdutycheats.net',
]);

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const host = url.hostname;

    if (host !== PRODUCTION_HOST && LEGACY_ALIAS_HOSTS.has(host)) {
      const target = `${CANONICAL_ORIGIN}${url.pathname}${url.search}`;
      return Response.redirect(target, 301);
    }

    const checkoutTarget = resolveCheckoutPathRedirect(url.pathname);
    if (checkoutTarget) {
      return new Response(null, {
        status: 302,
        headers: {
          Location: checkoutTarget,
          'Cache-Control': 'no-store',
          'Referrer-Policy': 'no-referrer',
        },
      });
    }

    const blogTarget = legacyBlogRedirect(url.pathname);
    if (blogTarget) return Response.redirect(blogTarget, 301);

    const assetResponse = await env.ASSETS.fetch(request);
    const headers = new Headers(assetResponse.headers);
    headers.set('X-Content-Type-Options', 'nosniff');
    if (!headers.has('X-Robots-Tag')) {
      headers.set(
        'X-Robots-Tag',
        'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
      );
    }
    let response = new Response(assetResponse.body, {
      status: assetResponse.status,
      statusText: assetResponse.statusText,
      headers,
    });

    const gaId = env.GA_MEASUREMENT_ID?.trim();
    const type = response.headers.get('content-type') ?? '';
    if (gaId && type.includes('text/html')) {
      const rewriter = new HTMLRewriter().on('meta[name="ga4-measurement-id"]', {
        element(element) {
          element.setAttribute('content', gaId);
        },
      });
      response = rewriter.transform(response);
    }

    return response;
  },
};
