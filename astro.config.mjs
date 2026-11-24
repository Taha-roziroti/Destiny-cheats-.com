import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { sitemapSerialize } from './src/config/sitemap.ts';
import { resolveSiteOrigin } from './scripts/site-origin.mjs';

/** Production origin only — previews use Workers host but must not affect sitemap/SEO output. */
const site = resolveSiteOrigin();

export default defineConfig({
  site,
  trailingSlash: 'always',
  redirects: {
    '/blogs': '/best-bodycam-cheats/',
    '/forum': '/best-bodycam-cheats/',
    '/reviews': '/',
    '/products/call-of-duty-cheats': '/',
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/404') &&
        !page.includes('/go/') &&
        !page.includes('/cheats/') &&
        !page.includes('/contact/') &&
        !page.includes('/products/') &&
        !page.includes('/blogs/') &&
        !page.includes('/forum/') &&
        !page.includes('/reviews/'),
      serialize: sitemapSerialize,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'esbuild',
      target: 'es2022',
      modulePreload: { polyfill: false },
    },
  },
  build: {
    inlineStylesheets: 'never',
  },
});
