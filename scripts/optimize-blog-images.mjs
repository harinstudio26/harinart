import { createRequire } from 'node:module';
import { mkdir, stat } from 'node:fs/promises';
import path from 'node:path';
const require = createRequire(import.meta.url);
const sharp = createRequire(require.resolve('next/package.json'))('sharp');
const root = process.argv[2];
if (!root) throw new Error('Pass the generated image directory.');
const files = {
  'craft-cover': 'exec-c14f5971-747a-44f4-b864-9e01a2528e59.png',
  'craft-knot-hands': 'exec-a9149d45-6d1e-4181-9193-12220eedc7e5.png',
  'craft-accessory-materials': 'exec-513882fe-7160-4bff-9140-4a077bb3d8a5.png',
  'tarot-cover': 'exec-e15dc17c-1968-4066-b82e-81a40e64047b.png',
  'tarot-observation': 'exec-6f6ff73c-0c50-4f0a-8822-3bb84ae153ea.png',
  'tarot-journal': 'exec-b63b5482-af92-403c-8e1f-cbb7314c2491.png',
  'class-cover': 'exec-3f587161-01f6-4cf2-8729-d253f327860b.png',
  'class-one-day': 'exec-25b9ec3a-fad1-4edb-bd6b-551ba238ca71.png',
  'class-regular': 'exec-c5f0564a-caa3-4c82-9dba-d5acf080b7cd.png',
};
await mkdir('public/images/blog/guides', { recursive: true });
for (const [name, file] of Object.entries(files)) {
  const output = `public/images/blog/guides/${name}.webp`;
  await sharp(path.join(root, file)).resize({ width: 1440, withoutEnlargement: true }).webp({ quality: 82, effort: 6 }).toFile(output);
  const meta = await sharp(output).metadata();
  console.log(`${output}: ${meta.width}x${meta.height}, ${Math.round((await stat(output)).size / 1024)} KB`);
}
