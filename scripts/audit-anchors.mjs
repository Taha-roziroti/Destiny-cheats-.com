import fs from 'fs';

const pages = [
  'dist/index.html',
  'dist/destiny-cheats-price/index.html',
  'dist/cloud-dma/index.html',
  'dist/cloud-dma-requirements/index.html',
];

const contentAnchors = [];

for (const p of pages) {
  if (!fs.existsSync(p)) {
    console.error(`missing ${p}`);
    process.exit(1);
  }
  const h = fs.readFileSync(p, 'utf8');
  const title = (h.match(/<title>([^<]+)<\/title>/) || [])[1];
  const h1 = (h.match(/id="exact-hero-title"[^>]*>([\s\S]*?)<\/h1>/) || [])[1]
    ?.replace(/\s+/g, ' ')
    .trim();
  console.log(`${p} | ${title} | ${h1}`);
  if (h.includes('AggregateRating')) console.log('  BAD AggregateRating');
  if (h.includes('bodycam-cheat')) console.log('  BAD bodycam domain');
  if (!h.includes('alt=')) console.log('  missing alts?');

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
  if (!byText.has(key)) byText.set(key, []);
  byText.get(key).push(a);
}

const dups = [...byText.entries()].filter(([, list]) => list.length > 1);
if (dups.length) {
  console.error('\nDuplicate content anchors:');
  for (const [text, list] of dups) {
    console.error(`  "${text}" x${list.length}`);
    for (const a of list) console.error(`    ${a.page} -> ${a.href}`);
  }
  process.exit(1);
}

console.log('\naudit-anchors: OK (unique content anchors)');
