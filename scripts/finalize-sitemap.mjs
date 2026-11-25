import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { resolveDistRoot } from './dist-root.mjs';
import { resolveSiteOrigin } from './site-origin.mjs';

const root = process.cwd();
const dist = resolveDistRoot(root);

const siteOrigin = resolveSiteOrigin();
const source = path.join(dist, 'sitemap-0.xml');

if (!fs.existsSync(source)) {
  const rel = path.relative(root, source) || 'sitemap-0.xml';
  console.error(`finalize-sitemap: ${rel} not found — run astro build first.`);
  process.exit(1);
}

/** Map built URL path → primary Astro source for git lastmod. */
function sourceFileForPath(pathname) {
  const map = {
    '/': 'src/pages/index.astro',
    '/about/': 'src/pages/about.astro',
    '/faq/': 'src/pages/faq.astro',
    '/privacy/': 'src/pages/privacy.astro',
    '/terms/': 'src/pages/terms.astro',
    '/support/': 'src/pages/support.astro',
    '/destiny-2-cheats-price/': 'src/pages/destiny-2-cheats-price.astro',
    '/cloud-dma-for-destiny-2/': 'src/pages/cloud-dma-for-destiny-2.astro',
    '/destiny-2-cheat-system-requirements/': 'src/pages/destiny-2-cheat-system-requirements.astro',
    '/destiny-2-cheat-setup/': 'src/pages/destiny-2-cheat-setup.astro',
    '/destiny-2-cheats-review/': 'src/pages/destiny-2-cheats-review.astro',
    '/destiny-2-cheat-ban-policy/': 'src/pages/destiny-2-cheat-ban-policy.astro',
  };
  if (map[pathname]) return map[pathname];
  if (pathname === '/products/call-of-duty-cheats/') return 'src/pages/products/call-of-duty-cheats/index.astro';
  if (pathname === '/products/call-of-duty-cheats/utilities/') return 'src/pages/products/call-of-duty-cheats/utilities.astro';
  return null;
}

function gitLastMod(relFile) {
  if (!relFile) return null;
  const full = path.join(root, relFile);
  if (!fs.existsSync(full)) return null;
  try {
    const out = execSync(`git log -1 --format=%cs -- "${relFile.replace(/\\/g, '/')}"`, {
      cwd: root,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
    if (out) return out;
  } catch {
    /* fall through to mtime */
  }
  return new Date(fs.statSync(full).mtimeMs).toISOString().slice(0, 10);
}

function stripChangefreqPriority(xml) {
  return xml
    .replace(/\s*<changefreq>[^<]*<\/changefreq>/gi, '')
    .replace(/\s*<priority>[^<]*<\/priority>/gi, '');
}

function applyLastmods(xml) {
  return xml.replace(/<url>\s*<loc>([^<]+)<\/loc>\s*(?:<lastmod>[^<]*<\/lastmod>\s*)?/gi, (_block, loc) => {
    const pathname = new URL(loc.trim()).pathname;
    const src = sourceFileForPath(pathname.endsWith('/') ? pathname : `${pathname}/`);
    const date = gitLastMod(src) ?? '2025-11-01';
    return `<url>\n    <loc>${loc}</loc>\n    <lastmod>${date}</lastmod>\n`;
  });
}

let raw = fs.readFileSync(source, 'utf8');
const urlCount = (raw.match(/<url>/g) ?? []).length;

if (urlCount === 0) {
  console.error('finalize-sitemap: sitemap-0.xml contains no URLs.');
  process.exit(1);
}

raw = stripChangefreqPriority(raw);
raw = applyLastmods(raw);

function formatUrlset(xml) {
  return xml
    .replace(/^<\?xml[^?]*\?>/, '<?xml version="1.0" encoding="UTF-8"?>\n')
    .replace(/<urlset([^>]*)>/, '<urlset$1>\n')
    .replace(/<\/urlset>/, '\n</urlset>\n')
    .replace(/<url>/g, '  <url>\n')
    .replace(/<\/url>/g, '\n  </url>\n')
    .replace(/<loc>/g, '    <loc>')
    .replace(/<\/loc>/g, '</loc>\n')
    .replace(/<lastmod>/g, '    <lastmod>')
    .replace(/<\/lastmod>/g, '</lastmod>\n');
}

const formatted = formatUrlset(raw);
fs.writeFileSync(path.join(dist, 'sitemap.xml'), formatted, 'utf8');

const lastmods = [...formatted.matchAll(/<lastmod>(\d{4}-\d{2}-\d{2})<\/lastmod>/g)].map((m) => m[1]);
const indexLastmod = lastmods.sort().at(-1) ?? '2025-11-01';

const indexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${siteOrigin}/sitemap.xml</loc>
    <lastmod>${indexLastmod}</lastmod>
  </sitemap>
</sitemapindex>
`;
fs.writeFileSync(path.join(dist, 'sitemap-index.xml'), indexXml, 'utf8');
fs.writeFileSync(path.join(dist, 'sitemap-0.xml'), formatted, 'utf8');

const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${siteOrigin}/sitemap.xml
`;
fs.writeFileSync(path.join(dist, 'robots.txt'), robotsTxt, 'utf8');

const outRel = path.relative(root, path.join(dist, 'sitemap.xml')) || 'dist/sitemap.xml';
console.log(`Sitemap finalized: ${urlCount} URLs → ${outRel}`);
console.log(`robots.txt sitemap line → ${siteOrigin}/sitemap.xml`);
