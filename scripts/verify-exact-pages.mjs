import fs from 'fs';
import path from 'path';

const pages = [
  {
    file: 'index.html',
    url: '/',
    title: 'Bodycam Cheats for PC | Features & Pricing',
    h1: 'Bodycam Cheats for PC',
    affiliateMin: 3,
  },
  {
    file: 'best-bodycam-cheats/index.html',
    url: '/best-bodycam-cheats/',
    title: 'Best Bodycam Cheats: Features & Buying Guide',
    h1: 'Best Bodycam Cheats: What to Check Before You Buy',
    affiliateMin: 1,
  },
  {
    file: 'bodycam-aimbot/index.html',
    url: '/bodycam-aimbot/',
    title: 'Bodycam Aimbot for PC | Features & Options',
    h1: 'Bodycam Aimbot for PC',
    affiliateMin: 1,
  },
  {
    file: 'bodycam-esp/index.html',
    url: '/bodycam-esp/',
    title: 'Bodycam ESP & Wallhack | Player Visual Options',
    h1: 'Bodycam ESP and Wallhack Features',
    affiliateMin: 1,
  },
  {
    file: 'bodycam-cheats-price/index.html',
    url: '/bodycam-cheats-price/',
    title: 'Bodycam Cheats Price | Monthly vs Lifetime',
    h1: 'Bodycam Cheats Price: Monthly vs Lifetime',
    affiliateMin: 1,
  },
  {
    file: 'bodycam-cloud-dma/index.html',
    url: '/bodycam-cloud-dma/',
    title: 'Bodycam Cloud DMA | Setup & Requirements',
    h1: 'Bodycam Cloud DMA: What It Is and What You Need',
    affiliateMin: 1,
  },
];

const fails = [];

for (const p of pages) {
  const html = fs.readFileSync(path.join('dist', p.file), 'utf8');
  const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) =>
    m[1].replace(/<[^>]+>/g, '').trim(),
  );
  if (h1s.length !== 1) fails.push(`${p.url} H1 count=${h1s.length}`);
  else if (h1s[0] !== p.h1) fails.push(`${p.url} H1 mismatch: ${h1s[0]}`);

  const title = html.match(/<title>(.*?)<\/title>/)?.[1]?.replace(/&amp;/g, '&');
  if (title !== p.title) fails.push(`${p.url} title: ${title}`);

  const affHref =
    p.url === '/bodycam-cloud-dma/' ? 'href="/go/cloud-dma/"' : 'href="/go/bodycam/"';
  const aff = (html.match(new RegExp(affHref.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || [])
    .length;
  if (aff < p.affiliateMin) fails.push(`${p.url} affiliate checkout links=${aff}`);

  // Em-dash check scoped to the exact article body only (shared chrome may change later).
  const article = html.match(/<article class="exact-copy[\s\S]*?<\/article>/)?.[0] ?? '';
  if (article.includes('—')) fails.push(`${p.url} article contains em dash`);
  if (html.includes('Image alt-text suggestions')) fails.push(`${p.url} leaked alt suggestions`);
}

const home = fs.readFileSync('dist/index.html', 'utf8');
if (!home.includes('$35')) fails.push('home missing $35');
if (!home.includes('$150')) fails.push('home missing $150');
for (const href of [
  '/bodycam-aimbot/',
  '/bodycam-esp/',
  '/bodycam-cheats-price/',
  '/bodycam-cloud-dma/',
  '/best-bodycam-cheats/',
]) {
  if (!home.includes(`href="${href}"`)) fails.push(`home missing link ${href}`);
}

const dma = fs.readFileSync('dist/bodycam-cloud-dma/index.html', 'utf8');
if (!dma.includes('$50')) fails.push('dma missing $50');
if (!dma.includes('GREENWARD') || !dma.includes('Static Server') || !dma.includes('AWS')) {
  fails.push('dma missing separate purchases');
}
if (!dma.includes('[NEEDS INFO]')) fails.push('dma missing NEEDS INFO');

const price = fs.readFileSync('dist/bodycam-cheats-price/index.html', 'utf8');
if (!price.includes('[NEEDS INFO]')) fails.push('price missing NEEDS INFO');

const aim = fs.readFileSync('dist/bodycam-aimbot/index.html', 'utf8');
if (!aim.includes('[NEEDS INFO]')) fails.push('aimbot missing NEEDS INFO');

const esp = fs.readFileSync('dist/bodycam-esp/index.html', 'utf8');
if (!esp.includes('[NEEDS INFO]')) fails.push('esp missing NEEDS INFO');

const guide = fs.readFileSync('dist/best-bodycam-cheats/index.html', 'utf8');
if (!guide.includes('[NEEDS INFO]')) fails.push('guide missing NEEDS INFO');

for (const f of [
  'content/pages/index.md',
  'content/pages/best-bodycam-cheats.md',
  'content/pages/bodycam-aimbot.md',
  'content/pages/bodycam-esp.md',
  'content/pages/bodycam-cheats-price.md',
  'content/pages/bodycam-cloud-dma.md',
]) {
  if (!fs.existsSync(f)) fails.push(`missing ${f}`);
}

if (fails.length) {
  console.error('FAILS:\n' + fails.join('\n'));
  process.exit(1);
}
console.log('ALL CHECKS PASSED');
