import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const assets = path.join(
  process.env.USERPROFILE || '',
  '.cursor',
  'projects',
  'd-fragpunk-cheats-com',
  'assets',
);

const logoSrc = path.join(assets, 'images-98b23584-e70c-43c7-8752-a7fe8c135e94.jpg');
const heroSrc = path.join(assets, '26769031-f9c1593a-362f-4c85-946f-e8508a3feb78.jpg');
const publicDir = 'public';
const fragDir = path.join(publicDir, 'images', 'fragpunk');
fs.mkdirSync(fragDir, { recursive: true });

if (!fs.existsSync(logoSrc)) throw new Error(`Missing logo: ${logoSrc}`);
if (!fs.existsSync(heroSrc)) throw new Error(`Missing hero: ${heroSrc}`);

/** Make near-black pixels transparent for cleaner favicons. */
async function withTransparentBlack(input, threshold = 28) {
  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    if (r <= threshold && g <= threshold && b <= threshold) {
      data[i + 3] = 0;
    }
  }

  return sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  });
}

// --- Favicon from FRAGPUNK wordmark: crop the stylized G creature ---
const logoMeta = await sharp(logoSrc).metadata();
const lw = logoMeta.width ?? 800;
const lh = logoMeta.height ?? 200;
// Isolate the stylized G creature (best mark at favicon sizes).
const cropSize = Math.min(lh, Math.floor(lw * 0.2));
const cropLeft = Math.max(0, Math.min(lw - cropSize, Math.floor(lw * 0.4)));
const cropTop = Math.max(0, Math.floor((lh - cropSize) / 2));

const gCropBuffer = await sharp(logoSrc)
  .extract({
    left: cropLeft,
    top: cropTop,
    width: Math.min(cropSize, lw - cropLeft),
    height: Math.min(cropSize, lh - cropTop),
  })
  .png()
  .toBuffer();

const faviconMaster = await withTransparentBlack(gCropBuffer, 32);
const masterPng = path.join(publicDir, 'logo-master.png');
await faviconMaster.clone().resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile(masterPng);

await faviconMaster.clone().resize(360, 360, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile(path.join(publicDir, 'favicon-v2-360.png'));
await faviconMaster.clone().resize(180, 180, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile(path.join(publicDir, 'apple-touch-icon-v2.png'));
await faviconMaster.clone().resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile(path.join(publicDir, 'favicon-v2-32.png'));
await faviconMaster.clone().resize(48, 48, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile(path.join(publicDir, 'favicon-v2.ico'));
fs.copyFileSync(path.join(publicDir, 'favicon-v2.ico'), path.join(publicDir, 'favicon.ico'));

const b64 = fs.readFileSync(path.join(publicDir, 'favicon-v2-32.png')).toString('base64');
fs.writeFileSync(
  path.join(publicDir, 'favicon-v2.svg'),
  `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" role="img" aria-label="FragPunk"><image width="32" height="32" href="data:image/png;base64,${b64}" /></svg>\n`,
);

// Also keep a full wordmark asset for rare brand uses
await sharp(logoSrc)
  .resize({ width: 1200, withoutEnlargement: true })
  .webp({ quality: 85 })
  .toFile(path.join(fragDir, 'wordmark.webp'));

// --- Hero promotional art ---
const widths = [640, 960, 1200, 1600, 1920];
const heroMaster = path.join(fragDir, 'hero-art.webp');
await sharp(heroSrc).resize({ width: 1920, withoutEnlargement: true }).webp({ quality: 82 }).toFile(heroMaster);

for (const width of widths) {
  await sharp(heroSrc)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(path.join(fragDir, `hero-art-${width}.webp`));
}

// OG preview from hero art
await sharp(heroSrc)
  .resize(1200, 630, { fit: 'cover', position: 'centre' })
  .png()
  .toFile(path.join(publicDir, 'og-image-v2.png'));

console.log('favicon + hero assets ready');
console.log('G crop:', { cropLeft, cropTop, cropSize, lw, lh });
