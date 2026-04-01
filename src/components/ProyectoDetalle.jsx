import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ChevronLeft, ChevronRight, X, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const ProyectoDetalle = ({ config }) => {
  const { titulo, categoria, heroImg, imagenes, infoCards, contexto, etapas, logros } = config;
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (i) => { setLightboxIndex(i); setLightboxOpen(true); };
  const prevImage = (e) => { e.stopPropagation(); setLightboxIndex((p) => (p - 1 + imagenes.length) % imagenes.length); };
  const nextImage = (e) => { e.stopPropagation(); setLightboxIndex((p) => (p + 1) % imagenes.length); };

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[65vh] min-h-[450px] overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt={titulo} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-chestnut/90 via-chestnut/60 to-transparent" />
        </div>
        <div className="absolute inset-0 z-10 flex items-end pb-16">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Link to="/proyectos" className="inline-flex items-center space-x-2 text-white/80 hover:text-golden transition-colors mb-4">
                <ArrowLeft className="w-5 h-5" />
                <span className="font-sans">Volver a Proyectos</span>
              </Link>
              <span className="block font-sans text-sm text-golden font-semibold uppercase tracking-wider mb-3">
                {categoria}
              </span>
              <h1 className="font-serif text-5xl md:text-7xl text-white font-bold">
                {titulo}
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Info cards */}
      <section className="py-16 bg-alabaster">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
            {infoCards.map((card, i) => (
              <motion.div key={card.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <card.icon className="w-8 h-8 text-chestnut mx-auto mb-3" />
                <h3 className="font-serif text-lg text-chestnut font-bold mb-1">{card.label}</h3>
                <p className="font-sans text-darkLava/80 text-sm">{card.value}</p>
              </motion.div>
            ))}
          </div>

          {contexto && (
            <div className="max-w-4xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white p-8 md:p-12 rounded-2xl shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {contexto.map((ctx) => (
                    <div key={ctx.titulo}>
                      <h3 className="font-serif text-xl text-chestnut font-bold mb-3">{ctx.titulo}</h3>
                      <p className="font-sans text-darkLava/80 leading-relaxed">{ctx.texto}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </section>

      {/* Etapas */}
      {etapas && etapas.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="font-serif text-4xl text-chestnut font-bold">¿Qué hicimos?</h2>
            </motion.div>
            <div className="max-w-4xl mx-auto space-y-6">
              {etapas.map((etapa, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="bg-alabaster p-8 rounded-2xl shadow-md relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-chestnut rounded-l-2xl" />
                  <div className="flex items-start gap-4">
                    <span className="font-serif text-4xl text-chestnut/20 font-bold flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <h3 className="font-serif text-xl text-chestnut font-bold mb-3">{etapa.titulo}</h3>
                      <p className="font-sans text-darkLava/80 leading-relaxed">{etapa.descripcion}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Galería */}
      <section className="py-20 bg-alabaster">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-serif text-4xl text-chestnut font-bold">Galería del Proyecto</h2>
          </motion.div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {imagenes.map((img, i) => {
              const isLarge = i === 0 || i === 4;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} whileHover={{ scale: 1.03 }} onClick={() => openLightbox(i)} className={`relative overflow-hidden rounded-xl shadow-lg cursor-pointer group ${isLarge ? 'sm:col-span-2 lg:col-span-2 h-80' : 'h-64'}`}>
                  <img src={img} alt={`${titulo} - ${i + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-chestnut/0 group-hover:bg-chestnut/20 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-darkLava/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white font-sans text-sm">Imagen {i + 1} de {imagenes.length}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Logros */}
      {logros && logros.length > 0 && (
        <section className="py-20 bg-chestnut">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="font-serif text-4xl text-white font-bold">Logramos...</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {logros.map((logro, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-xl flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-golden flex-shrink-0 mt-0.5" />
                  <p className="font-sans text-white/90 leading-relaxed">{logro}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-darkLava/95 flex items-center justify-center p-4" onClick={() => setLightboxOpen(false)}>
            <button onClick={() => setLightboxOpen(false)} className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50"><X className="w-8 h-8" /></button>
            <button onClick={prevImage} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all z-50"><ChevronLeft className="w-8 h-8" /></button>
            <button onClick={nextImage} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all z-50"><ChevronRight className="w-8 h-8" /></button>
            <motion.img key={lightboxIndex} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} src={imagenes[lightboxIndex]} alt={`${titulo} - ${lightboxIndex + 1}`} className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl" onClick={(e) => e.stopPropagation()} />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {imagenes.map((_, i) => (
                <button key={i} onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); }} className={`w-2 h-2 rounded-full transition-all duration-300 ${i === lightboxIndex ? 'bg-golden w-6' : 'bg-white/40 hover:bg-white/70'}`} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProyectoDetalle;
