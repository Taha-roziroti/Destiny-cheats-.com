import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const outDir = 'public/images/placeholders';
fs.mkdirSync(outDir, { recursive: true });

const widths = [320, 400, 512, 640, 960, 1200];

function svgFor(w, h, label) {
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1f2937"/>
      <stop offset="100%" stop-color="#374151"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g)"/>
  <rect x="24" y="24" width="${w - 48}" height="${h - 48}" rx="16" fill="none" stroke="#9ca3af" stroke-width="2" stroke-dasharray="10 8"/>
  <text x="${w / 2}" y="${h / 2}" text-anchor="middle" fill="#e5e7eb" font-family="Segoe UI, Arial, sans-serif" font-size="${Math.max(18, Math.round(w / 28))}" font-weight="600">Placeholder</text>
  <text x="${w / 2}" y="${h / 2 + Math.max(22, Math.round(w / 40))}" text-anchor="middle" fill="#9ca3af" font-family="Segoe UI, Arial, sans-serif" font-size="${Math.max(12, Math.round(w / 45))}">${label}</text>
</svg>`);
}

async function makeWebp(file, w, h, label) {
  await sharp(svgFor(w, h, label)).webp({ quality: 80 }).toFile(file);
}

const master = path.join(outDir, 'shot.webp');
await makeWebp(master, 1200, 675, '1200 x 675');

for (const w of widths) {
  const h = Math.round((w * 9) / 16);
  await makeWebp(path.join(outDir, `shot-${w}.webp`), w, h, `${w}w`);
}

await sharp(path.join(outDir, 'shot-1200.webp'))
  .resize(1200, 630, { fit: 'cover' })
  .png()
  .toFile('public/og-image-v2.png');
await sharp(path.join(outDir, 'shot-640.webp'))
  .resize(360, 360, { fit: 'cover' })
  .png()
  .toFile('public/favicon-v2-360.png');
await sharp(path.join(outDir, 'shot-640.webp'))
  .resize(32, 32, { fit: 'cover' })
  .png()
  .toFile('public/favicon-v2-32.png');
await sharp(path.join(outDir, 'shot-640.webp'))
  .resize(180, 180, { fit: 'cover' })
  .png()
  .toFile('public/apple-touch-icon-v2.png');
await sharp(path.join(outDir, 'shot-640.webp'))
  .resize(512, 512, { fit: 'cover' })
  .png()
  .toFile('public/logo-master.png');

fs.writeFileSync(
  'public/favicon-v2.svg',
  `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#374151"/><rect x="4" y="4" width="24" height="24" rx="4" fill="none" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="3 2"/></svg>\n`,
);

const bodycamDir = 'public/images/bodycam';
if (fs.existsSync(bodycamDir)) {
  for (const f of fs.readdirSync(bodycamDir)) {
    fs.unlinkSync(path.join(bodycamDir, f));
  }
  fs.rmdirSync(bodycamDir);
}

console.log('placeholders ready:', fs.readdirSync(outDir).join(', '));
