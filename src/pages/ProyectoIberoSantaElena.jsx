import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, MapPin, Calendar, Users, ChevronLeft, ChevronRight, X, CheckCircle } from 'lucide-react';
import { useState } from 'react';

import img1 from '../assets/img/Proyectos/ibero_santa_elena/ibero_santa_elena_1.png';
import img2 from '../assets/img/Proyectos/ibero_santa_elena/ibero_santa_elena_2.png';
import img3 from '../assets/img/Proyectos/ibero_santa_elena/ibero_santa_elena_3.png';
import img4 from '../assets/img/Proyectos/ibero_santa_elena/ibero_santa_elena_4.png';
import img5 from '../assets/img/Proyectos/ibero_santa_elena/ibero_santa_elena_5.png';
import img6 from '../assets/img/Proyectos/ibero_santa_elena/ibero_santa_elena_6.png';
import img7 from '../assets/img/Proyectos/ibero_santa_elena/ibero_santa_elena_7.png';
import img8 from '../assets/img/Proyectos/ibero_santa_elena/ibero_santa_elena_8.png';
import img9 from '../assets/img/Proyectos/ibero_santa_elena/ibero_santa_elena_9.png';

const imagenes = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const etapas = [
  {
    titulo: "Curso básico de manejo de drone M300",
    descripcion: "Iniciamos con una sesión teórica donde revisamos el marco legal aeronáutico, los permisos requeridos, los principios de vuelo, los sensores disponibles y las capacidades específicas del equipo. El objetivo era construir una base sólida que permitiera comprender no solo cómo volar, sino por qué se toman ciertas decisiones técnicas en campo."
  },
  {
    titulo: "Práctica de vuelo inicial",
    descripcion: "Acompañados por nuestro instructor, los participantes realizaron un vuelo supervisado en el que abordamos desde el armado y revisión del equipo, hasta el despegue, maniobras básicas y aterrizaje seguro. Esta etapa se enfocó en generar confianza, reconocer protocolos y familiarizarse con las condiciones reales del entorno."
  },
  {
    titulo: "Práctica avanzada en área de conservación",
    descripcion: "Una vez adquiridas las habilidades fundamentales, trasladamos el ejercicio a un entorno real: un área de conservación donde realizamos un vuelo LIDAR, aplicando todo lo aprendido. Aquí trabajamos con planificación de misiones, trazado de rutas, revisión de parámetros y toma de decisiones en campo."
  },
  {
    titulo: "Curso de almacenamiento, organización y procesamiento de datos",
    descripcion: "Para cerrar el ciclo, impartimos un módulo dedicado al manejo responsable de la información. Enseñamos flujos de trabajo para guardar, organizar y procesar los datos adquiridos, asegurando que el Laboratorio pudiera integrarlos en proyectos futuros y conservarlos con calidad técnica."
  }
];

const logros = [
  "Dar acompañamiento intensivo y personalizado",
  "Transmitir y promover la tolerancia, resolución de problemas, paciencia y organización",
  "Resolver dudas técnicas y operativas",
  "La entrega completa de los productos procesados obtenidos, acompañada de una exposición clara sobre cada insumo, su utilidad y cómo incorporarlos en sus proyectos",
  "Mantener un enfoque pedagógico que explicaba la lógica detrás de cada paso",
  "Capacitar al equipo para que continúen utilizando el drone con mayor independencia y criterio técnico"
];

const ProyectoIberoSantaElena = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index) => { setLightboxIndex(index); setLightboxOpen(true); };
  const closeLightbox = () => setLightboxOpen(false);
  const prevImage = (e) => { e.stopPropagation(); setLightboxIndex((prev) => (prev - 1 + imagenes.length) % imagenes.length); };
  const nextImage = (e) => { e.stopPropagation(); setLightboxIndex((prev) => (prev + 1) % imagenes.length); };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[65vh] min-h-[450px] overflow-hidden">
        <div className="absolute inset-0">
          <img src={img1} alt="Ibero Santa Elena" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-chestnut/90 via-chestnut/60 to-transparent" />
        </div>
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Link to="/proyectos" className="inline-flex items-center space-x-2 text-white/80 hover:text-golden transition-colors mb-6">
                <ArrowLeft className="w-5 h-5" />
                <span className="font-sans">Volver a Proyectos</span>
              </Link>
              <span className="block font-sans text-sm text-golden font-semibold uppercase tracking-wider mb-3">
                Educación e investigación
              </span>
              <h1 className="font-serif text-5xl md:text-7xl text-white font-bold mb-4">
                IBERO - Santa Elena
              </h1>
              <p className="font-sans text-xl text-white/90 max-w-2xl">
                Capacitación integral en manejo de drones y procesamiento de datos
                para el Laboratorio Geoespacial de la Universidad Iberoamericana.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Info cards */}
      <section className="py-16 bg-alabaster">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
            {[
              { icon: MapPin, label: 'Locación', value: 'Rancho Santa Elena, Hidalgo' },
              { icon: Calendar, label: 'Cliente', value: 'IBERO – Depto. de Economía / Lab. Geoespacial' },
              { icon: Users, label: 'Equipo', value: 'KAAB MAP' },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <item.icon className="w-8 h-8 text-chestnut mx-auto mb-3" />
                <h3 className="font-serif text-lg text-chestnut font-bold mb-1">{item.label}</h3>
                <p className="font-sans text-darkLava/80 text-sm">{item.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Contexto */}
          <div className="max-w-4xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-2xl shadow-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-serif text-xl text-chestnut font-bold mb-3">¿Quién nos contrató?</h3>
                  <p className="font-sans text-darkLava/80 leading-relaxed">
                    La Universidad Iberoamericana, específicamente el Departamento de Economía a través
                    del Laboratorio Geoespacial, nos invitó a colaborar en un proyecto que buscaba
                    profesionalizar el uso de drones dentro de sus actividades académicas y de investigación.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-chestnut font-bold mb-3">¿Qué necesitaban?</h3>
                  <p className="font-sans text-darkLava/80 leading-relaxed">
                    El Laboratorio había adquirido un drone y requerían la capacitación necesaria para
                    operarlo de manera óptima. Tomar decisiones sobre salud de cultivos, cambios en
                    cobertura, manejo de recursos o identificación de riesgos requiere información
                    espacial detallada, bien capturada y correctamente procesada.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-chestnut font-bold mb-3">El reto</h3>
                  <p className="font-sans text-darkLava/80 leading-relaxed">
                    Fortalecer sus capacidades técnicas y operativas para desarrollar proyectos
                    vinculados con análisis territorial, conservación del medio ambiente y agricultura
                    de precisión con resultados confiables.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Etapas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl text-chestnut font-bold mb-4">
              Diseñamos una experiencia integral
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {etapas.map((etapa, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-alabaster p-8 rounded-2xl shadow-md relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-chestnut rounded-l-2xl" />
                <div className="flex items-start gap-4">
                  <span className="font-serif text-4xl text-chestnut/20 font-bold flex-shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl text-chestnut font-bold mb-3">
                      {etapa.titulo}
                    </h3>
                    <p className="font-sans text-darkLava/80 leading-relaxed">
                      {etapa.descripcion}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Galería */}
      <section className="py-20 bg-alabaster">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl text-chestnut font-bold mb-4">
              Galería del Proyecto
            </h2>
          </motion.div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {imagenes.map((img, index) => {
              const isLarge = index === 0 || index === 4;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => openLightbox(index)}
                  className={`relative overflow-hidden rounded-xl shadow-lg cursor-pointer group ${
                    isLarge ? 'sm:col-span-2 lg:col-span-2 h-80' : 'h-64'
                  }`}
                >
                  <img src={img} alt={`Ibero Santa Elena - ${index + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-chestnut/0 group-hover:bg-chestnut/20 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-darkLava/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white font-sans text-sm">Imagen {index + 1} de {imagenes.length}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Logros */}
      <section className="py-20 bg-chestnut">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl text-white font-bold mb-4">
              Logramos...
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {logros.map((logro, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-xl flex items-start gap-3"
              >
                <CheckCircle className="w-6 h-6 text-golden flex-shrink-0 mt-0.5" />
                <p className="font-sans text-white/90 leading-relaxed">{logro}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-darkLava/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button onClick={closeLightbox} className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50">
              <X className="w-8 h-8" />
            </button>
            <button onClick={prevImage} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all z-50">
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button onClick={nextImage} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all z-50">
              <ChevronRight className="w-8 h-8" />
            </button>
            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              src={imagenes[lightboxIndex]}
              alt={`Ibero Santa Elena - ${lightboxIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {imagenes.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === lightboxIndex ? 'bg-golden w-6' : 'bg-white/40 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProyectoIberoSantaElena;
