/**
 * Optimize stellaria-capsule.png with sharp.
 * Run: node scripts/optimize.mjs
 * Requires: npm install --save-dev sharp
 */
import sharp from 'sharp';
import { statSync, renameSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const src = join(__dirname, '../src/assets/stellaria-capsule.png');
const tmp = src + '.opt';

const before = statSync(src).size;

await sharp(src)
  .png({ quality: 75, compressionLevel: 9, adaptiveFiltering: true })
  .toFile(tmp);

const after = statSync(tmp).size;
renameSync(tmp, src);

const saved = Math.round((1 - after / before) * 100);
console.log(
  `stellaria-capsule.png: ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB (−${saved}%)`,
);
