import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { useEcosPosts } from '../context/EcosPostsContext';
import { POSTS_SEED } from '../data/ecosPosts';
import { mergePosts } from '../lib/ecosPostsMerge';

const EcoArticulo = () => {
  const { slug } = useParams();
  const { repoPosts, loading } = useEcosPosts();

  const post = useMemo(() => {
    const list = mergePosts(POSTS_SEED, repoPosts);
    return list.find((p) => p.slug === slug);
  }, [slug, repoPosts]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  if (loading) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center bg-alabaster pt-32">
        <p className="font-sans text-darkLava/70">Cargando…</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 bg-alabaster pt-32 pb-20">
        <p className="font-serif text-2xl text-chestnut mb-4">No encontramos esta publicación.</p>
        <Link to="/ecos" className="font-sans text-chestnut underline hover:text-golden">
          Volver a Ecos
        </Link>
      </div>
    );
  }

  return (
    <article className="bg-alabaster">
      <header className="relative pt-28 pb-0 md:pt-32">
        <div className="h-[42vh] min-h-[240px] max-h-[520px] w-full overflow-hidden bg-darkLava/20">
          <img src={post.imagen} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-darkLava/80 via-darkLava/20 to-transparent" />
        </div>
        <div className="container mx-auto px-4 max-w-3xl -mt-24 md:-mt-28 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-xl p-6 md:p-10 border border-chestnut/10"
          >
            <span className="inline-block bg-chestnut text-white px-3 py-1 rounded-full text-xs font-sans font-medium mb-4">
              {post.categoria}
            </span>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-chestnut leading-tight mb-6">
              {post.titulo}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-darkLava/70 font-sans border-t border-chestnut/10 pt-4">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.fecha}>{formatDate(post.fecha)}</time>
              </div>
              <div className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                <span>{post.autor}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      <div className="container mx-auto px-4 max-w-3xl py-12 md:py-16">
        <Link
          to="/ecos"
          className="inline-flex items-center gap-2 font-sans text-sm text-chestnut hover:text-golden mb-10 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al blog
        </Link>

        <div className="prose-ecos space-y-8 font-sans text-darkLava/90 text-lg leading-relaxed">
          {(post.blocks || []).map((block, i) => {
            if (block.type === 'h2') {
              return (
                <h2
                  key={i}
                  className="font-serif text-2xl md:text-3xl font-bold text-chestnut pt-4 scroll-mt-28"
                >
                  {block.text}
                </h2>
              );
            }
            if (block.type === 'img' && block.src) {
              return (
                <figure key={i} className="my-10">
                  <img
                    src={block.src}
                    alt={block.alt || ''}
                    className="w-full rounded-lg shadow-md object-cover max-h-[480px]"
                  />
                  {block.caption && (
                    <figcaption className="mt-3 text-center text-sm text-darkLava/65 italic">{block.caption}</figcaption>
                  )}
                </figure>
              );
            }
            return (
              <p key={i} className="text-justify md:text-left">
                {block.text}
              </p>
            );
          })}
        </div>
      </div>
    </article>
  );
};

export default EcoArticulo;
