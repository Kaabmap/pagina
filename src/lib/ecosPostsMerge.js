import { POSTS_SEED } from '../data/ecosPosts';

/** URL del archivo versionado en git (copiado a dist desde public/). */
export function getExtraPostsJsonUrl() {
  const base = (import.meta.env.BASE_URL || '/').replace(/\/?$/, '/');
  return `${base}data/ecos-extra-posts.json`;
}

export async function fetchExtraPosts() {
  const url = getExtraPostsJsonUrl();
  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) return [];
  const data = await res.json();
  if (!data || !Array.isArray(data.posts)) return [];
  return data.posts.map(normalizeRepoPost);
}

function normalizeRepoPost(p) {
  return {
    id: p.id || `repo-${p.slug}`,
    slug: String(p.slug || '').trim(),
    titulo: String(p.titulo || '').trim(),
    resumen: String(p.resumen || '').trim(),
    fecha: p.fecha || new Date().toISOString().slice(0, 10),
    autor: String(p.autor || '').trim(),
    categoria: String(p.categoria || '').trim(),
    imagen: String(p.imagen || '').trim(),
    blocks: Array.isArray(p.blocks) ? p.blocks : [],
  };
}

export function mergePosts(seedPosts, extraPosts) {
  const bySlug = new Map();
  for (const p of seedPosts) {
    bySlug.set(p.slug, { ...p, fromSeed: true, source: 'seed' });
  }
  for (const p of extraPosts) {
    if (!p.slug) continue;
    if (!bySlug.has(p.slug)) {
      bySlug.set(p.slug, { ...p, fromSeed: false, source: 'repo' });
    }
  }
  return [...bySlug.values()].sort(
    (a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
  );
}

export function isSeedSlug(slug) {
  return POSTS_SEED.some((p) => p.slug === slug);
}

export function wrapPostsFile(posts) {
  return JSON.stringify({ posts }, null, 2);
}

export function downloadJsonFile(filename, jsonString) {
  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

/** Añade post al array repo; devuelve { ok, posts?, error? } */
export function appendRepoPost(repoPosts, post) {
  let slug = post.slug?.trim() || slugify(post.titulo);
  if (!slug) slug = `post-${Date.now()}`;
  const base = {
    id: post.id || `repo-${Date.now()}`,
    slug,
    titulo: post.titulo.trim(),
    resumen: post.resumen.trim(),
    fecha: post.fecha || new Date().toISOString().slice(0, 10),
    autor: post.autor.trim(),
    categoria: post.categoria.trim(),
    imagen: post.imagen.trim(),
    blocks: Array.isArray(post.blocks) ? post.blocks : [],
  };
  if (POSTS_SEED.some((p) => p.slug === base.slug) || repoPosts.some((p) => p.slug === base.slug)) {
    return { ok: false, error: 'Ya existe una entrada con ese slug (o coincide con un artículo base en código).' };
  }
  return { ok: true, posts: [base, ...repoPosts] };
}

export function removeRepoPostBySlug(repoPosts, slug) {
  if (isSeedSlug(slug)) {
    return { ok: false, error: 'Los artículos base del sitio no se pueden borrar desde aquí.' };
  }
  const next = repoPosts.filter((p) => p.slug !== slug);
  if (next.length === repoPosts.length) {
    return { ok: false, error: 'No hay ninguna entrada editorial con ese slug en el archivo del repositorio.' };
  }
  return { ok: true, posts: next };
}

export function mergeImportRepoPosts(currentRepoPosts, incoming) {
  if (!Array.isArray(incoming)) throw new Error('El archivo debe ser un array de publicaciones.');
  const bySlug = new Map(currentRepoPosts.map((p) => [p.slug, normalizeRepoPost(p)]));
  for (const raw of incoming) {
    const p = normalizeRepoPost(raw);
    if (!p.slug || !p.titulo) continue;
    bySlug.set(p.slug, p);
  }
  return [...bySlug.values()];
}

function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export { slugify };
