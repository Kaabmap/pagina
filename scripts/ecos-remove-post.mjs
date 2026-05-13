/**
 * Uso: node scripts/ecos-remove-post.mjs <slug>
 * Quita el post del JSON versionado (p. ej. desde GitHub Actions).
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const file = path.join(root, 'public', 'data', 'ecos-extra-posts.json');

const slug = process.argv[2]?.trim();
if (!slug) {
  console.error('Indica un slug: node scripts/ecos-remove-post.mjs mi-slug');
  process.exit(1);
}

const raw = fs.readFileSync(file, 'utf8');
const j = JSON.parse(raw);
if (!Array.isArray(j.posts)) {
  console.error('Formato inválido: se esperaba { posts: [] }');
  process.exit(1);
}
const before = j.posts.length;
j.posts = j.posts.filter((p) => p.slug !== slug);
const after = j.posts.length;
if (before === after) {
  console.warn(`No se encontró ningún post con slug "${slug}".`);
}
fs.writeFileSync(file, `${JSON.stringify(j, null, 2)}\n`);
console.log(`Listo. Posts: ${before} → ${after}`);
