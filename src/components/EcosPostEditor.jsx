import { useState } from 'react';
import { X, Plus, Trash2, FileDown, FileUp, PenLine, Trash } from 'lucide-react';
import { useEcosPosts } from '../context/EcosPostsContext';
import {
  appendRepoPost,
  downloadJsonFile,
  mergeImportRepoPosts,
  removeRepoPostBySlug,
  slugify,
  wrapPostsFile,
} from '../lib/ecosPostsMerge';

function emptyBlock(type) {
  if (type === 'h2') return { type: 'h2', text: '' };
  if (type === 'img') return { type: 'img', src: '', alt: '', caption: '' };
  return { type: 'p', text: '' };
}

function getEditorPin() {
  const fromEnv = import.meta.env.VITE_ECOS_EDITOR_PIN;
  if (fromEnv && String(fromEnv).trim()) return String(fromEnv).trim();
  if (import.meta.env.DEV) return 'dev';
  return null;
}

const EcosPostEditor = ({ open, onClose }) => {
  const { repoPosts, setRepoPosts } = useEcosPosts();
  const [step, setStep] = useState('pin');
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const [deleteSlug, setDeleteSlug] = useState('');

  const [titulo, setTitulo] = useState('');
  const [slugManual, setSlugManual] = useState('');
  const [resumen, setResumen] = useState('');
  const [autor, setAutor] = useState('KAAB MAP');
  const [categoria, setCategoria] = useState('General');
  const [fecha, setFecha] = useState(() => new Date().toISOString().slice(0, 10));
  const [imagen, setImagen] = useState('');
  const [blocks, setBlocks] = useState([emptyBlock('p')]);

  const resetForm = () => {
    setTitulo('');
    setSlugManual('');
    setResumen('');
    setAutor('KAAB MAP');
    setCategoria('General');
    setFecha(new Date().toISOString().slice(0, 10));
    setImagen('');
    setBlocks([emptyBlock('p')]);
    setDeleteSlug('');
  };

  const fullReset = () => {
    setStep('pin');
    setPin('');
    setError('');
    resetForm();
  };

  const handleClose = () => {
    fullReset();
    onClose();
  };

  const verifyPin = () => {
    const expected = getEditorPin();
    if (!expected) {
      setError('PIN no disponible.');
      return;
    }
    if (pin !== expected) {
      setError('PIN incorrecto.');
      return;
    }
    setError('');
    setStep('menu');
  };

  const persistAndOfferDownload = (nextPosts) => {
    setRepoPosts(nextPosts);
    downloadJsonFile('ecos-extra-posts.json', wrapPostsFile(nextPosts));
  };

  const updateBlock = (index, patch) => {
    setBlocks((prev) => prev.map((b, i) => (i === index ? { ...b, ...patch } : b)));
  };

  const removeBlock = (index) => {
    setBlocks((prev) => (prev.length <= 1 ? prev : prev.filter((_, i) => i !== index)));
  };

  const addBlock = (type) => {
    setBlocks((prev) => [...prev, emptyBlock(type)]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    const slug = slugManual.trim() || slugify(titulo);
    const cleaned = blocks
      .map((b) => {
        if (b.type === 'p') return { type: 'p', text: (b.text || '').trim() };
        if (b.type === 'h2') return { type: 'h2', text: (b.text || '').trim() };
        return {
          type: 'img',
          src: (b.src || '').trim(),
          alt: (b.alt || '').trim(),
          caption: (b.caption || '').trim(),
        };
      })
      .filter((b) => {
        if (b.type === 'img') return b.src;
        return b.text;
      });

    if (!titulo.trim() || !resumen.trim() || !imagen.trim()) {
      setError('Completa título, resumen e imagen de portada (URL).');
      return;
    }
    if (cleaned.length === 0) {
      setError('Añade al menos un bloque de texto o imagen al cuerpo.');
      return;
    }

    const result = appendRepoPost(repoPosts, {
      titulo,
      slug,
      resumen,
      autor,
      categoria,
      fecha,
      imagen,
      blocks: cleaned,
    });

    if (!result.ok) {
      setError(result.error);
      return;
    }
    persistAndOfferDownload(result.posts);
    resetForm();
    setStep('menu');
  };

  const handleDelete = () => {
    setError('');
    if (!deleteSlug) {
      setError('Elige un slug.');
      return;
    }
    if (!window.confirm(`¿Eliminar "${deleteSlug}"?`)) {
      return;
    }
    const result = removeRepoPostBySlug(repoPosts, deleteSlug);
    if (!result.ok) {
      setError(result.error);
      return;
    }
    persistAndOfferDownload(result.posts);
    setDeleteSlug('');
    setStep('menu');
  };

  const handleExport = () => {
    downloadJsonFile('ecos-extra-posts.json', wrapPostsFile(repoPosts));
  };

  const handleImport = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(reader.result);
        const incoming = Array.isArray(parsed) ? parsed : parsed.posts;
        if (!Array.isArray(incoming)) throw new Error('Se esperaba { posts: [] } o un array.');
        const merged = mergeImportRepoPosts(repoPosts, incoming);
        setRepoPosts(merged);
        downloadJsonFile('ecos-extra-posts.json', wrapPostsFile(merged));
        setError('');
      } catch (err) {
        setError(err.message || 'No se pudo leer el JSON.');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-darkLava/60 backdrop-blur-sm">
      <div className="bg-alabaster rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-chestnut/20">
        <div className="sticky top-0 flex items-center justify-between px-6 py-4 border-b border-chestnut/10 bg-alabaster z-10">
          <h2 className="font-serif text-xl text-chestnut font-bold">
            {step === 'pin' && 'Acceso de editor'}
            {step === 'menu' && 'Editor Ecos'}
            {step === 'form' && 'Nueva publicación'}
            {step === 'delete' && 'Eliminar publicación'}
          </h2>
          <button
            type="button"
            onClick={handleClose}
            className="p-2 rounded-lg hover:bg-chestnut/10 text-darkLava"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          {step === 'pin' && (
            <>
              <input
                type="password"
                value={pin}
                onChange={(ev) => setPin(ev.target.value)}
                className="w-full border border-chestnut/30 rounded-lg px-4 py-2 font-sans bg-white"
                placeholder="PIN"
                autoComplete="off"
              />
              {error && <p className="text-sm text-jellyBean font-sans">{error}</p>}
              <button
                type="button"
                onClick={verifyPin}
                className="w-full py-3 rounded-lg bg-chestnut text-white font-sans font-medium hover:bg-chestnut/90"
              >
                Continuar
              </button>
              <div className="pt-4 border-t border-chestnut/10 space-y-2">
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={handleExport}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-chestnut/30 font-sans text-sm hover:bg-white"
                  >
                    <FileDown className="w-4 h-4" />
                    Descargar JSON actual
                  </button>
                  <label className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-chestnut/30 font-sans text-sm hover:bg-white cursor-pointer">
                    <FileUp className="w-4 h-4" />
                    Fusionar desde archivo
                    <input type="file" accept="application/json,.json" className="hidden" onChange={handleImport} />
                  </label>
                </div>
              </div>
            </>
          )}

          {step === 'menu' && (
            <div className="space-y-3">
              <button
                type="button"
                onClick={() => {
                  setError('');
                  setStep('form');
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-chestnut text-white font-sans font-medium hover:bg-chestnut/90"
              >
                <PenLine className="w-4 h-4" />
                Nueva publicación
              </button>
              <button
                type="button"
                onClick={() => {
                  setError('');
                  setDeleteSlug(repoPosts[0]?.slug || '');
                  setStep('delete');
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg border-2 border-jellyBean text-jellyBean font-sans font-medium hover:bg-jellyBean/10"
              >
                <Trash className="w-4 h-4" />
                Eliminar publicación editorial
              </button>
              <div className="flex flex-wrap gap-2 pt-2 border-t border-chestnut/10">
                <button
                  type="button"
                  onClick={handleExport}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-chestnut/30 font-sans text-sm hover:bg-white"
                >
                  <FileDown className="w-4 h-4" />
                  Descargar JSON
                </button>
                <label className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-chestnut/30 font-sans text-sm hover:bg-white cursor-pointer">
                  <FileUp className="w-4 h-4" />
                  Fusionar JSON
                  <input type="file" accept="application/json,.json" className="hidden" onChange={handleImport} />
                </label>
              </div>
              <button
                type="button"
                onClick={() => fullReset()}
                className="w-full py-2 text-sm font-sans text-darkLava/60 hover:text-chestnut"
              >
                Cerrar sesión de editor
              </button>
            </div>
          )}

          {step === 'delete' && (
            <div className="space-y-4">
              {repoPosts.length === 0 ? (
                <>
                  <p className="font-sans text-darkLava/60 text-sm">No hay entradas editoriales para borrar.</p>
                  <button
                    type="button"
                    onClick={() => {
                      setError('');
                      setStep('menu');
                    }}
                    className="w-full py-2 text-sm font-sans text-chestnut border border-chestnut/30 rounded-lg hover:bg-white"
                  >
                    Volver
                  </button>
                </>
              ) : (
                <>
                  <label className="block text-xs font-sans font-medium text-darkLava mb-1">Slug a eliminar</label>
                  <select
                    value={deleteSlug}
                    onChange={(ev) => setDeleteSlug(ev.target.value)}
                    className="w-full border border-chestnut/30 rounded-lg px-3 py-2 font-sans bg-white"
                  >
                    {repoPosts.map((p) => (
                      <option key={p.slug} value={p.slug}>
                        {p.slug} — {p.titulo}
                      </option>
                    ))}
                  </select>
                  {error && <p className="text-sm text-jellyBean font-sans">{error}</p>}
                  <button
                    type="button"
                    onClick={handleDelete}
                    className="w-full py-3 rounded-lg bg-jellyBean text-white font-sans font-medium hover:opacity-90"
                  >
                    Eliminar y descargar
                  </button>
                </>
              )}
              <button
                type="button"
                onClick={() => {
                  setError('');
                  setStep('menu');
                }}
                className="w-full py-2 text-sm font-sans text-chestnut border border-chestnut/30 rounded-lg hover:bg-white"
              >
                Volver
              </button>
            </div>
          )}

          {step === 'form' && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <button
                type="button"
                onClick={() => {
                  setError('');
                  resetForm();
                  setStep('menu');
                }}
                className="text-sm font-sans text-chestnut hover:underline mb-2"
              >
                ← Volver al menú
              </button>
              <div>
                <label className="block text-xs font-sans font-medium text-darkLava mb-1">Título</label>
                <input
                  required
                  value={titulo}
                  onChange={(ev) => setTitulo(ev.target.value)}
                  className="w-full border border-chestnut/30 rounded-lg px-3 py-2 font-sans bg-white"
                />
              </div>
              <div>
                <label className="block text-xs font-sans font-medium text-darkLava mb-1">Slug (opcional)</label>
                <input
                  value={slugManual}
                  onChange={(ev) => setSlugManual(ev.target.value)}
                  className="w-full border border-chestnut/30 rounded-lg px-3 py-2 font-sans bg-white text-sm"
                  placeholder={titulo ? slugify(titulo) : 'mi-articulo'}
                />
              </div>
              <div>
                <label className="block text-xs font-sans font-medium text-darkLava mb-1">Resumen</label>
                <textarea
                  required
                  rows={3}
                  value={resumen}
                  onChange={(ev) => setResumen(ev.target.value)}
                  className="w-full border border-chestnut/30 rounded-lg px-3 py-2 font-sans bg-white"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-sans font-medium text-darkLava mb-1">Autor</label>
                  <input
                    value={autor}
                    onChange={(ev) => setAutor(ev.target.value)}
                    className="w-full border border-chestnut/30 rounded-lg px-3 py-2 font-sans bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-sans font-medium text-darkLava mb-1">Categoría</label>
                  <input
                    value={categoria}
                    onChange={(ev) => setCategoria(ev.target.value)}
                    className="w-full border border-chestnut/30 rounded-lg px-3 py-2 font-sans bg-white"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-sans font-medium text-darkLava mb-1">Fecha</label>
                <input
                  type="date"
                  value={fecha}
                  onChange={(ev) => setFecha(ev.target.value)}
                  className="w-full border border-chestnut/30 rounded-lg px-3 py-2 font-sans bg-white"
                />
              </div>
              <div>
                <label className="block text-xs font-sans font-medium text-darkLava mb-1">Imagen de portada (URL)</label>
                <input
                  required
                  value={imagen}
                  onChange={(ev) => setImagen(ev.target.value)}
                  className="w-full border border-chestnut/30 rounded-lg px-3 py-2 font-sans bg-white text-sm"
                  placeholder="https://..."
                />
              </div>

              <div className="border-t border-chestnut/15 pt-4">
                <p className="font-sans text-sm font-medium text-chestnut mb-2">Cuerpo del artículo</p>
                <div className="space-y-3">
                  {blocks.map((b, i) => (
                    <div key={i} className="p-3 rounded-lg bg-white border border-chestnut/20 space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-sans uppercase text-darkLava/50">
                          {b.type === 'p' ? 'Párrafo' : b.type === 'h2' ? 'Subtítulo' : 'Imagen'}
                        </span>
                        <button
                          type="button"
                          onClick={() => removeBlock(i)}
                          className="p-1 text-jellyBean hover:bg-jellyBean/10 rounded"
                          aria-label="Quitar bloque"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      {b.type === 'p' && (
                        <textarea
                          rows={4}
                          value={b.text}
                          onChange={(ev) => updateBlock(i, { text: ev.target.value })}
                          className="w-full border border-chestnut/20 rounded px-2 py-2 font-sans text-sm"
                        />
                      )}
                      {b.type === 'h2' && (
                        <input
                          value={b.text}
                          onChange={(ev) => updateBlock(i, { text: ev.target.value })}
                          className="w-full border border-chestnut/20 rounded px-2 py-2 font-serif text-lg text-chestnut"
                        />
                      )}
                      {b.type === 'img' && (
                        <div className="space-y-2">
                          <input
                            placeholder="URL de la imagen"
                            value={b.src}
                            onChange={(ev) => updateBlock(i, { src: ev.target.value })}
                            className="w-full border border-chestnut/20 rounded px-2 py-2 font-sans text-sm"
                          />
                          <input
                            placeholder="Texto alternativo"
                            value={b.alt}
                            onChange={(ev) => updateBlock(i, { alt: ev.target.value })}
                            className="w-full border border-chestnut/20 rounded px-2 py-2 font-sans text-sm"
                          />
                          <input
                            placeholder="Pie de foto (opcional)"
                            value={b.caption}
                            onChange={(ev) => updateBlock(i, { caption: ev.target.value })}
                            className="w-full border border-chestnut/20 rounded px-2 py-2 font-sans text-sm"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  <button
                    type="button"
                    onClick={() => addBlock('p')}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-grullo/30 font-sans text-xs hover:bg-grullo/50"
                  >
                    <Plus className="w-3 h-3" /> Párrafo
                  </button>
                  <button
                    type="button"
                    onClick={() => addBlock('h2')}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-grullo/30 font-sans text-xs hover:bg-grullo/50"
                  >
                    <Plus className="w-3 h-3" /> Subtítulo
                  </button>
                  <button
                    type="button"
                    onClick={() => addBlock('img')}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-grullo/30 font-sans text-xs hover:bg-grullo/50"
                  >
                    <Plus className="w-3 h-3" /> Imagen
                  </button>
                </div>
              </div>

              {error && <p className="text-sm text-jellyBean font-sans">{error}</p>}

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-chestnut text-white font-sans font-medium hover:bg-chestnut/90"
              >
                Guardar y descargar
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default EcosPostEditor;
