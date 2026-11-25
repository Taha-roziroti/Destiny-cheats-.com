import fs from 'fs';

const pages = [
  {
    file: 'index.html',
    url: '/',
    title: 'Destiny 2 Cheats for PC | Aimbot & ESP',
    h1: 'Destiny 2 Cheats for PC',
    affiliateMin: 1,
  },
  {
    file: 'destiny-cheats-price/index.html',
    url: '/destiny-cheats-price/',
    title: 'Destiny 2 Cheats Price | Monthly vs Lifetime',
    h1: 'Destiny 2 Cheats Price: Monthly vs Lifetime',
    affiliateMin: 1,
  },
  {
    file: 'cloud-dma/index.html',
    url: '/cloud-dma/',
    title: 'Cloud DMA for Destiny 2 | $50 Lifetime',
    h1: 'Cloud DMA for Destiny 2',
    affiliateMin: 1,
  },
  {
    file: 'cloud-dma-requirements/index.html',
    url: '/cloud-dma-requirements/',
    title: 'Cloud DMA Requirements for Windows 10/11',
    h1: 'Cloud DMA Requirements for Windows 10/11',
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
  if (!html.includes(`<title>${page.title}</title>`) && !html.includes(`<title>${page.title.replace(/&/g, '&amp;')}</title>`)) {
    const escaped = page.title.replace(/&/g, '&amp;');
    if (!html.includes(`<title>${escaped}</title>`)) {
      fails.push(`${page.url} title mismatch`);
    }
  }
  if (!html.includes(page.h1)) fails.push(`${page.url} missing H1 text`);
  const goCount = (html.match(/\/go\//g) || []).length;
  if (goCount < page.affiliateMin) fails.push(`${page.url} affiliate hops ${goCount} < ${page.affiliateMin}`);
  if (html.includes('bodycam-cheat.com')) fails.push(`${page.url} legacy bodycam domain`);
  if (html.includes('AggregateRating')) fails.push(`${page.url} fabricated AggregateRating`);
}

const requiredLinks = {
  'index.html': ['/destiny-cheats-price/', '/cloud-dma/', '/cloud-dma-requirements/'],
  'destiny-cheats-price/index.html': ['/cloud-dma/', '/cloud-dma-requirements/'],
  'cloud-dma/index.html': ['/', '/destiny-cheats-price/', '/cloud-dma-requirements/'],
  'cloud-dma-requirements/index.html': ['/', '/destiny-cheats-price/', '/cloud-dma/'],
};

for (const [file, links] of Object.entries(requiredLinks)) {
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
