// One-shot: render favicon.svg into PNGs and pack favicon.ico.
// Run with: node scripts/build-favicons.mjs
import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const svg = readFileSync(resolve(root, 'public/favicon.svg'));

async function pngBuffer(size) {
  return sharp(svg, { density: 384 })
    .resize(size, size)
    .png({ compressionLevel: 9 })
    .toBuffer();
}

const sizes = [16, 32, 48];
const pngs = await Promise.all(sizes.map(pngBuffer));

// Pack ICO (ICONDIR + N ICONDIRENTRY + concatenated PNG payloads).
const HEADER = Buffer.alloc(6);
HEADER.writeUInt16LE(0, 0);
HEADER.writeUInt16LE(1, 2);
HEADER.writeUInt16LE(sizes.length, 4);

const entries = [];
const offsets = [];
let cursor = 6 + 16 * sizes.length;
for (let i = 0; i < sizes.length; i++) {
  offsets.push(cursor);
  cursor += pngs[i].length;
}

for (let i = 0; i < sizes.length; i++) {
  const e = Buffer.alloc(16);
  const w = sizes[i] === 256 ? 0 : sizes[i];
  const h = sizes[i] === 256 ? 0 : sizes[i];
  e.writeUInt8(w, 0);
  e.writeUInt8(h, 1);
  e.writeUInt8(0, 2); // colors
  e.writeUInt8(0, 3); // reserved
  e.writeUInt16LE(1, 4); // planes
  e.writeUInt16LE(32, 6); // bpp
  e.writeUInt32LE(pngs[i].length, 8);
  e.writeUInt32LE(offsets[i], 12);
  entries.push(e);
}

const ico = Buffer.concat([HEADER, ...entries, ...pngs]);
writeFileSync(resolve(root, 'public/favicon.ico'), ico);
console.log(`Wrote favicon.ico (${ico.length} bytes, sizes: ${sizes.join(',')}).`);

const apple = await sharp(svg, { density: 1080 })
  .resize(180, 180)
  .png({ compressionLevel: 9 })
  .toBuffer();
writeFileSync(resolve(root, 'public/apple-touch-icon.png'), apple);
console.log(`Wrote apple-touch-icon.png (${apple.length} bytes, 180x180).`);
