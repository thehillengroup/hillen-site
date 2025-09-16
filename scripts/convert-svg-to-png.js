/**
 * scripts/convert-svg-to-png.js
 * Convert an SVG to a PNG at a target width (default 1600px).
 * Usage:
 *   node scripts/convert-svg-to-png.js input.svg output.png [width]
 */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function main() {
  const [,, inPath, outPath, widthArg] = process.argv;
  if (!inPath || !outPath) {
    console.error('Usage: node scripts/convert-svg-to-png.js input.svg output.png [width]');
    process.exit(1);
  }
  const width = Number(widthArg) || 1600;

  const inputAbs = path.resolve(process.cwd(), inPath);
  const outputAbs = path.resolve(process.cwd(), outPath);

  if (!fs.existsSync(inputAbs)) {
    console.error('Input does not exist:', inputAbs);
    process.exit(1);
  }

  await fs.promises.mkdir(path.dirname(outputAbs), { recursive: true });

  try {
    const svg = await fs.promises.readFile(inputAbs);
    await sharp(svg)
      .resize({ width, withoutEnlargement: true })
      .png({ compressionLevel: 9 })
      .toFile(outputAbs);
    console.log('Wrote', outputAbs);
  } catch (e) {
    console.error('Failed to convert', inputAbs, '=>', outputAbs, e);
    process.exit(1);
  }
}

main();

