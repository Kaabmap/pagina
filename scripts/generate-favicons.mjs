import sharp from 'sharp';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const svgPath = join(root, 'public', 'favicon.svg');

const sizes = [16, 32, 48, 192, 512];

for (const size of sizes) {
  const out = join(root, 'public', `favicon-${size}.png`);
  await sharp(svgPath).resize(size, size).png().toFile(out);
  console.log('Wrote', out);
}
