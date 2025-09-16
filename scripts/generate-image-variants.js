/**
 * scripts/generate-image-variants.js
 * Generate responsive AVIF/WebP variants for portfolio images.
 *
 * Input: public/images/projects/*.(jpg|jpeg|png)
 * Output: public/images/projects/<name>-<w>.avif and .webp for widths [480,768,1200,1600]
 */
const path = require('path');
const fs = require('fs');
const fg = require('fast-glob');
const sharp = require('sharp');

const ROOT = path.resolve(process.cwd());
const INPUT_GLOB = 'public/images/projects/*.{jpg,jpeg,png}';
const WIDTHS = [480, 768, 1200, 1600];

async function ensureDir(p) {
  await fs.promises.mkdir(path.dirname(p), { recursive: true });
}

async function generateForFile(file) {
  const ext = path.extname(file); // .jpg
  const base = file.slice(0, -ext.length); // without extension
  const buf = await fs.promises.readFile(file);
  const img = sharp(buf);
  const meta = await img.metadata();

  for (const w of WIDTHS) {
    // Generate files for every requested width. If the source is smaller,
    // sharp(withoutEnlargement: true) will keep original size but still write
    // the variant so the srcset references never 404.
    const avifOut = `${base}-${w}.avif`;
    const webpOut = `${base}-${w}.webp`;
    if (!fs.existsSync(avifOut)) {
      await ensureDir(avifOut);
      await sharp(buf)
        .resize({ width: w, withoutEnlargement: true })
        .avif({ quality: 60 })
        .toFile(avifOut);
      console.log('✓', avifOut);
    }
    if (!fs.existsSync(webpOut)) {
      await ensureDir(webpOut);
      await sharp(buf)
        .resize({ width: w, withoutEnlargement: true })
        .webp({ quality: 70 })
        .toFile(webpOut);
      console.log('✓', webpOut);
    }
  }
}

async function main() {
  const files = await fg([INPUT_GLOB], { cwd: ROOT, absolute: true });
  if (!files.length) {
    console.log('No source images found at', INPUT_GLOB);
    return;
  }
  for (const f of files) {
    try {
      await generateForFile(f);
    } catch (e) {
      console.error('Error processing', f, e);
    }
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
