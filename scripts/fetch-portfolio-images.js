/**
 * scripts/fetch-portfolio-images.js
 * Downloads stock images to public/images/projects so the app can serve them locally.
 *
 * Note: Requires network access when you run it manually:
 *   node scripts/fetch-portfolio-images.js
 */
const fs = require('fs');
const path = require('path');
const https = require('https');

const OUT_DIR = path.resolve(process.cwd(), 'public', 'images', 'projects');

const targets = [
  {
    url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80',
    out: 'stonepro-ecommerce-hero.jpg',
    alt: 'ecommerce storefront ui',
  },
  {
    // Research Insights hero — clean IT workstation (fits software design/dev brand)
    url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80',
    out: 'research-insights-hero.jpg',
    alt: 'clean workstation with large monitor and keyboard',
  },
  {
    // Field Ops Mobile hero — specific image (mobile/tablet in the field)
    url: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=1600&q=80',
    out: 'field-ops-mobile-hero.jpg',
    alt: 'field technician using mobile tablet outdoors',
  },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https
      .get(url, (res) => {
        if (res.statusCode !== 200) {
          file.close();
          fs.unlink(dest, () => {});
          return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        }
        res.pipe(file);
        file.on('finish', () => file.close(() => resolve(dest)));
      })
      .on('error', (err) => {
        file.close();
        fs.unlink(dest, () => {});
        reject(err);
      });
  });
}

async function main() {
  await fs.promises.mkdir(OUT_DIR, { recursive: true });
  for (const t of targets) {
    const outPath = path.join(OUT_DIR, t.out);
    try {
      await download(t.url, outPath);
      console.log('✓ downloaded', outPath);
    } catch (e) {
      console.warn('⚠ failed', t.url, '=>', outPath, e.message);
    }
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
