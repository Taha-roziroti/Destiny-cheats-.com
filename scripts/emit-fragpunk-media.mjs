import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const assetsDir = path.join(
  process.env.USERPROFILE || '',
  '.cursor',
  'projects',
  'd-fragpunk-cheats-com',
  'assets',
);
const outDir = path.join('public', 'images', 'fragpunk');
fs.mkdirSync(outDir, { recursive: true });

const widths = [320, 400, 512, 640, 960, 1200];

const sources = [
  {
    file: 'zadeyo-fragpunk-1-visuals-0ab47c0f-a021-410d-9b02-da75dce6e6da.webp',
    name: 'menu-visuals',
  },
  {
    file: 'zadeyo-fragpunk-2-world-1e36b0de-8307-4ec0-b1db-f4f663e7c3e8.webp',
    name: 'menu-world',
  },
  {
    file: 'zadeyo-fragpunk-3-aimbot-05b119ec-e8fa-4e0c-ad46-6f2893d2160d.webp',
    name: 'menu-aimbot',
  },
  {
    file: 'zadeyo-fragpunk-4-misc-3460460f-5c0d-4f71-b6d3-e2b3e4afc961.webp',
    name: 'menu-misc',
  },
];

for (const { file, name } of sources) {
  const src = path.join(assetsDir, file);
  if (!fs.existsSync(src)) {
    throw new Error(`Missing source image: ${src}`);
  }

  const master = path.join(outDir, `${name}.webp`);
  const meta = await sharp(src).metadata();
  const masterWidth = Math.min(meta.width ?? 1600, 1600);
  await sharp(src)
    .resize({ width: masterWidth, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(master);

  for (const width of widths) {
    await sharp(src)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(path.join(outDir, `${name}-${width}.webp`));
  }

  console.log(`emitted ${name}`);
}

// OG / brand preview from visuals menu
await sharp(path.join(outDir, 'menu-visuals-1200.webp'))
  .resize(1200, 630, { fit: 'cover', position: 'centre' })
  .png()
  .toFile('public/og-image-v2.png');

console.log('done', fs.readdirSync(outDir).length, 'files');
