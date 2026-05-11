// One-shot: build public/og-default.png (1200x630) from an inline SVG.
// Run with: node scripts/build-og-default.mjs
import sharp from 'sharp';
import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');

const W = 1200;
const H = 630;
const CREAM = '#F5F1E8';
const INK = '#1A1A1A';
const INK_MUTED = '#5A4F45';
const ROSA = '#E91E63';
const COBALT = '#1E5FBC';
const OCHRE = '#D4A017';

// Subtle grid: thin lines every 60px.
const gridLines = [];
for (let x = 0; x <= W; x += 60) {
  gridLines.push(`<line x1="${x}" y1="0" x2="${x}" y2="${H}" />`);
}
for (let y = 0; y <= H; y += 60) {
  gridLines.push(`<line x1="0" y1="${y}" x2="${W}" y2="${y}" />`);
}

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${CREAM}"/>

  <!-- grid texture -->
  <g stroke="${INK}" stroke-opacity="0.04" stroke-width="1">
    ${gridLines.join('\n    ')}
  </g>

  <!-- top coord strip -->
  <g font-family="JetBrains Mono, Menlo, monospace" font-size="14" fill="${INK_MUTED}" letter-spacing="2">
    <text x="80" y="58">32.5149° N  ·  117.0382° W  ·  TIJUANA, MX</text>
    <text x="${W - 80}" y="58" text-anchor="end">emilioalcolea.com</text>
  </g>

  <!-- left rosa bar -->
  <rect x="80" y="120" width="8" height="240" fill="${ROSA}"/>

  <!-- name -->
  <text x="120" y="220" font-family="Cormorant Garamond, Georgia, serif" font-size="92" font-weight="600" fill="${INK}">
    Emilio <tspan font-style="italic" fill="${ROSA}">Alcolea</tspan>
  </text>

  <!-- title line -->
  <text x="120" y="290" font-family="Karla, Helvetica, sans-serif" font-size="34" font-weight="500" fill="${INK}">
    Marketing operator. Tersefy founder.
  </text>

  <!-- subtitle / tag -->
  <text x="120" y="346" font-family="Karla, Helvetica, sans-serif" font-size="22" font-weight="400" fill="${INK_MUTED}">
    12+ years across healthcare, tech, government, cross-border MX-US markets.
  </text>

  <!-- bottom chips -->
  <g font-family="Bebas Neue, Impact, sans-serif" font-size="20" letter-spacing="3" fill="${CREAM}">
    <g>
      <rect x="80" y="500" width="170" height="44" fill="${INK}"/>
      <text x="165" y="529" text-anchor="middle">TERSEFY</text>
    </g>
    <g>
      <rect x="266" y="500" width="170" height="44" fill="${COBALT}"/>
      <text x="351" y="529" text-anchor="middle">AI VISIBILITY</text>
    </g>
    <g>
      <rect x="452" y="500" width="170" height="44" fill="${OCHRE}"/>
      <text x="537" y="529" text-anchor="middle">GEO · AEO · SEO</text>
    </g>
  </g>

  <!-- bottom-right mark: E + rosa dot, scaled up -->
  <g transform="translate(${W - 220}, 460)">
    <circle cx="124" cy="20" r="14" fill="${ROSA}"/>
    <text x="64" y="100" font-family="Cormorant Garamond, Georgia, serif" font-size="108" font-weight="600" fill="${INK}" text-anchor="middle">E</text>
  </g>
</svg>`;

const out = await sharp(Buffer.from(svg), { density: 144 })
  .resize(W, H)
  .png({ compressionLevel: 9 })
  .toBuffer();

writeFileSync(resolve(root, 'public/og-default.png'), out);
console.log(`Wrote public/og-default.png (${out.length} bytes, ${W}x${H}).`);
