// Rasterizes assets/social-preview.svg -> assets/social-preview.png (1280x640)
// for the GitHub repo "social preview" image. Run: npm run gen:og
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const svg = join(root, 'assets', 'social-preview.svg');
const png = join(root, 'assets', 'social-preview.png');

await sharp(svg, { density: 144 }).resize(1280, 640).png().toFile(png);
console.log('wrote', png);
