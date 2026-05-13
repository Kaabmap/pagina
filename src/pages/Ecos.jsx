import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, PenLine } from 'lucide-react';
import EcosPostEditor from '../components/EcosPostEditor';
import { useEcosPosts } from '../context/EcosPostsContext';
import { POSTS_SEED } from '../data/ecosPosts';
import { mergePosts } from '../lib/ecosPostsMerge';

const Ecos = () => {
  const [editorOpen, setEditorOpen] = useState(false);
  const { repoPosts, loading } = useEcosPosts();

  const articulos = useMemo(() => mergePosts(POSTS_SEED, repoPosts), [repoPosts]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="">
      <section className="bg-chestnut text-white pt-36 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Ecos</h1>
            <p className="font-sans text-xl text-white/90">
              Información relacionada al concepto de cooperativa y nuestro trabajo
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-alabaster">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex justify-end mb-10">
            <button
              type="button"
              onClick={() => setEditorOpen(true)}
              className="inline-flex items-center justify-center gap-2 shrink-0 px-5 py-3 rounded-lg bg-chestnut text-white font-sans font-medium hover:bg-chestnut/90 shadow-md transition-colors"
            >
              <PenLine className="w-4 h-4" />
              Editor de entradas
            </button>
          </div>

          {loading ? (
            <p className="font-sans text-center text-darkLava/70 py-16">Cargando publicaciones…</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {articulos.map((articulo, index) => (
                <motion.article
                  key={articulo.slug}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                >
                  <Link
                    to={`/ecos/${articulo.slug}`}
                    className="block bg-white rounded-lg shadow-lg overflow-hidden group cursor-pointer h-full hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={articulo.imagen}
                        alt=""
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        <span className="bg-chestnut text-white px-3 py-1 rounded-full text-xs font-sans font-medium">
                          {articulo.categoria}
                        </span>
                        {!articulo.fromSeed && (
                          <span className="bg-golden text-darkLava px-3 py-1 rounded-full text-xs font-sans font-medium">
                            Editorial
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-darkLava/60 mb-4 font-sans">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(articulo.fecha)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{articulo.autor}</span>
                        </div>
                      </div>
                      <h2 className="font-serif text-2xl text-chestnut font-bold mb-3 group-hover:text-golden transition-colors">
                        {articulo.titulo}
                      </h2>
                      <p className="font-sans text-darkLava/80 leading-relaxed mb-4 line-clamp-3">{articulo.resumen}</p>
                      <div className="flex items-center space-x-2 text-chestnut font-sans font-medium group-hover:space-x-4 transition-all">
                        <span>Leer artículo</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      <EcosPostEditor open={editorOpen} onClose={() => setEditorOpen(false)} />
    </div>
  );
};

export default Ecos;
