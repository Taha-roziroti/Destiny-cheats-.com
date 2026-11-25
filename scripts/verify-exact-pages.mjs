import fs from 'fs';

const pages = [
  {
    file: 'index.html',
    url: '/',
    title: 'Destiny 2 Cheats for PC | Aimbot, ESP &amp; Wallhack',
    h1: 'Destiny 2 Cheats for PC',
    affiliateMin: 1,
  },
  {
    file: 'destiny-2-cheats-price/index.html',
    url: '/destiny-2-cheats-price/',
    title: 'Destiny 2 Cheats Price | Monthly vs. Lifetime',
    h1: 'Destiny 2 Cheats Price: Monthly and Lifetime Plans',
    affiliateMin: 1,
  },
  {
    file: 'cloud-dma-for-destiny-2/index.html',
    url: '/cloud-dma-for-destiny-2/',
    title: 'Cloud DMA for Destiny 2 | Price &amp; Requirements',
    h1: 'Cloud DMA for Destiny 2: Product Details',
    affiliateMin: 1,
  },
  {
    file: 'destiny-2-cheat-system-requirements/index.html',
    url: '/destiny-2-cheat-system-requirements/',
    title: 'Destiny 2 Cheat System Requirements for PC',
    h1: 'Destiny 2 Cheat System Requirements for PC',
    affiliateMin: 0,
  },
  {
    file: 'destiny-2-cheat-setup/index.html',
    url: '/destiny-2-cheat-setup/',
    title: 'Destiny 2 Cheats Setup Guide for PC',
    h1: 'Destiny 2 Cheats Setup Guide',
    affiliateMin: 1,
  },
  {
    file: 'destiny-2-cheats-review/index.html',
    url: '/destiny-2-cheats-review/',
    title: 'Destiny 2 Cheats Review | Features &amp; Pricing',
    h1: 'Destiny 2 Cheats Review: Features, Pricing and Limitations',
    affiliateMin: 0,
  },
  {
    file: 'destiny-2-cheat-ban-policy/index.html',
    url: '/destiny-2-cheat-ban-policy/',
    title: 'Can Destiny 2 Cheats Get You Banned? | Policy',
    h1: 'Can Destiny 2 Cheats Get You Banned?',
    affiliateMin: 0,
  },
];

const fails = [];

for (const page of pages) {
  const htmlPath = `dist/${page.file}`;
  if (!fs.existsSync(htmlPath)) {
    fails.push(`missing ${htmlPath}`);
    continue;
  }
  const html = fs.readFileSync(htmlPath, 'utf8');
  const titleOk =
    html.includes(`<title>${page.title}</title>`) ||
    html.includes(`<title>${page.title.replace(/&amp;/g, '&')}</title>`);
  if (!titleOk) fails.push(`${page.url} title mismatch`);
  if (!html.includes(page.h1)) fails.push(`${page.url} missing H1 text`);
  const goCount = (html.match(/\/go\//g) || []).length;
  if (goCount < page.affiliateMin) fails.push(`${page.url} affiliate hops ${goCount} < ${page.affiliateMin}`);
  if (html.includes('bodycam-cheat.com')) fails.push(`${page.url} legacy bodycam domain`);
  if (html.includes('AggregateRating')) fails.push(`${page.url} fabricated AggregateRating`);
}

const requiredLinks = {
  'index.html': ['/destiny-2-cheats-price/', '/cloud-dma-for-destiny-2/', '/destiny-2-cheat-system-requirements/'],
  'destiny-2-cheats-price/index.html': ['/', '/cloud-dma-for-destiny-2/', '/destiny-2-cheat-system-requirements/'],
  'cloud-dma-for-destiny-2/index.html': ['/', '/destiny-2-cheats-price/', '/destiny-2-cheat-system-requirements/'],
  'destiny-2-cheat-system-requirements/index.html': [
    '/cloud-dma-for-destiny-2/',
    '/destiny-2-cheat-setup/',
    '/destiny-2-cheats-price/',
  ],
  'destiny-2-cheat-setup/index.html': ['/', '/destiny-2-cheat-system-requirements/', '/cloud-dma-for-destiny-2/'],
  'destiny-2-cheats-review/index.html': ['/', '/destiny-2-cheats-price/', '/destiny-2-cheat-system-requirements/'],
  'destiny-2-cheat-ban-policy/index.html': ['/', '/destiny-2-cheats-review/', '/destiny-2-cheat-system-requirements/'],
};

for (const [file, links] of Object.entries(requiredLinks)) {
  if (!fs.existsSync(`dist/${file}`)) continue;
  const html = fs.readFileSync(`dist/${file}`, 'utf8');
  for (const href of links) {
    if (!html.includes(`href="${href}"`)) fails.push(`${file} missing internal link ${href}`);
  }
}

if (fails.length) {
  console.error('verify-exact-pages failed:\n' + fails.map((f) => ` - ${f}`).join('\n'));
  process.exit(1);
}

console.log('verify-exact-pages: OK');
