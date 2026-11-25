import fs from 'fs';

const pages = [
  'dist/index.html',
  'dist/fragpunk-cheats-price/index.html',
  'dist/cloud-dma/index.html',
  'dist/cloud-dma-requirements/index.html',
];

const contentAnchors = [];

for (const p of pages) {
  const h = fs.readFileSync(p, 'utf8');
  const title = (h.match(/<title>([^<]+)<\/title>/) || [])[1];
  const h1 = (h.match(/id="exact-hero-title"[^>]*>([\s\S]*?)<\/h1>/) || [])[1]
    ?.replace(/\s+/g, ' ')
    .trim();
  console.log(`${p} | ${title} | ${h1}`);
  if (h.includes('AggregateRating')) console.log('  BAD AggregateRating');
  if (h.includes('bodycam-cheat')) console.log('  BAD bodycam domain');
  if (!h.includes('alt=')) console.log('  missing alts?');

  // Content links only: inside exact-copy / prose
  const bodies = [...h.matchAll(/class="[^"]*exact-copy[^"]*"[^>]*>([\s\S]*?)<\/(?:div|section)>/g)];
  for (const body of bodies) {
    for (const m of body[1].matchAll(/<a[^>]+href="(\/[^"]+)"[^>]*>([\s\S]*?)<\/a>/g)) {
      const text = m[2].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
      if (!text) continue;
      contentAnchors.push({ page: p, href: m[1], text });
    }
  }
}

console.log('\nContent-body anchors:');
for (const a of contentAnchors) {
  console.log(`  [${a.text}] -> ${a.href} (${a.page})`);
}

const byText = new Map();
for (const a of contentAnchors) {
  const key = a.text.toLowerCase();
  byText.set(key, (byText.get(key) || 0) + 1);
}
const dups = [...byText.entries()].filter(([, n]) => n > 1);
console.log('\nDuplicate content anchors:', dups.length ? dups : 'none');

console.log('\nSitemap URLs:');
const sm = fs.readFileSync('dist/sitemap.xml', 'utf8');
for (const m of sm.matchAll(/<loc>([^<]+)<\/loc>/g)) console.log(' ', m[1]);
