import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, BookOpen, Search, Mountain, TreePine, Map, MessageCircle } from 'lucide-react';

import imgCursos from '../assets/img/Servicios/servicios-cursos.jpg';
import imgInspeccion from '../assets/img/Servicios/servicios-inspeccion.jpg';
import imgTopografia from '../assets/img/Servicios/servicios-topografia.jpg';
import imgRecursos from '../assets/img/Servicios/servicios-recursos.jpg';
import imgCartografia from '../assets/img/Servicios/servicios-cartografia.jpg';

const Servicios = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const servicios = [
    {
      id: 1,
      titulo: 'Cursos, Talleres y Capacitaciones',
      descripcion: 'Diseñamos experiencias integrales con acompañamiento intensivo y personalizado.',
      detalles: [
        'Manejo de RPAS (drones)',
        'Fotogrametría',
        'Levantamientos LiDAR',
        'Uso de Sistemas de Información Geográfica',
        'Introducción al CAD',
        'Programación con datos geoespaciales'
      ],
      icono: BookOpen,
      imagen: imgCursos,
      color: '#914e2e'
    },
    {
      id: 2,
      titulo: 'Inspección',
      descripcion: 'Realizamos inspecciones detalladas y seguras en infraestructuras civiles e industriales o áreas de difícil acceso.',
      detalles: [],
      icono: Search,
      imagen: imgInspeccion,
      color: '#9ea67a'
    },
    {
      id: 3,
      titulo: 'Topografía Digital y Modelamiento Espacial',
      descripcion: 'Generamos modelos digitales del terreno en 2D y 3D para entender, analizar y tomar decisiones sobre el espacio.',
      detalles: [],
      icono: Mountain,
      imagen: imgTopografia,
      color: '#c7aa64'
    },
    {
      id: 4,
      titulo: 'Monitoreo de Recursos y Territorio',
      descripcion: 'Damos seguimiento a las dinámicas del territorio mediante información geoespacial, facilitando la gestión de recursos naturales, productivos y ambientales en distintos contextos.',
      detalles: [],
      icono: TreePine,
      imagen: imgRecursos,
      color: '#dd6657'
    },
    {
      id: 5,
      titulo: 'Productos Cartográficos',
      descripcion: 'Elaboramos mapas personalizados para planificación urbana, gestión de proyecto, logística, etc.',
      detalles: [],
      icono: Map,
      imagen: imgCartografia,
      color: '#914e2e'
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % servicios.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + servicios.length) % servicios.length);

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={imgInspeccion} alt="Servicios" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-chestnut/80" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-white">
              ¿Cómo podemos ayudarte?
            </h1>
            <p className="font-sans text-xl text-white/90">
              Empoderamos con conocimiento a profesionales, organizaciones y comunidades
            </p>
          </motion.div>
        </div>
      </section>

      {/* Slider de Servicios */}
      <section className="py-20 bg-alabaster">
        <div className="container mx-auto px-4">
          <div className="relative max-w-6xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="h-72 lg:h-[450px] relative overflow-hidden">
                    <img
                      src={servicios[currentSlide].imagen}
                      alt={servicios[currentSlide].titulo}
                      className="w-full h-full object-cover"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(135deg, ${servicios[currentSlide].color}66, transparent 70%)`
                      }}
                    />
                  </div>

                  <div className="bg-white p-8 lg:p-12 flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div
                        className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
                        style={{ backgroundColor: `${servicios[currentSlide].color}1a` }}
                      >
                        {(() => {
                          const Icon = servicios[currentSlide].icono;
                          return <Icon className="w-8 h-8" style={{ color: servicios[currentSlide].color }} />;
                        })()}
                      </div>
                      <h2 className="font-serif text-3xl md:text-4xl text-chestnut font-bold mb-4">
                        {servicios[currentSlide].titulo}
                      </h2>
                      <p className="font-sans text-lg text-darkLava/80 leading-relaxed mb-4">
                        {servicios[currentSlide].descripcion}
                      </p>
                      {servicios[currentSlide].detalles.length > 0 && (
                        <ul className="space-y-2">
                          {servicios[currentSlide].detalles.map((detalle) => (
                            <li key={detalle} className="font-sans text-darkLava/70 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: servicios[currentSlide].color }} />
                              {detalle}
                            </li>
                          ))}
                        </ul>
                      )}
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-chestnut p-3 rounded-full shadow-lg transition-all hover:scale-110">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-chestnut p-3 rounded-full shadow-lg transition-all hover:scale-110">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="flex justify-center space-x-2 mt-8">
              {servicios.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-chestnut w-8' : 'bg-chestnut/30 hover:bg-chestnut/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Servicios */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl text-chestnut font-bold mb-4">
              Todos Nuestros Servicios
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {servicios.map((servicio, index) => {
              const Icon = servicio.icono;
              return (
                <motion.div
                  key={servicio.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  onClick={() => setCurrentSlide(index)}
                  className="bg-alabaster rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden group"
                >
                  <div className="h-44 overflow-hidden relative">
                    <img
                      src={servicio.imagen}
                      alt={servicio.titulo}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-darkLava/40 to-transparent" />
                    <div
                      className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${servicio.color}cc` }}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl text-chestnut font-bold mb-3">
                      {servicio.titulo}
                    </h3>
                    <p className="font-sans text-sm text-darkLava/70 line-clamp-3">
                      {servicio.descripcion}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Asesoramiento */}
      <section className="py-16 bg-chestnut">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <MessageCircle className="w-12 h-12 text-golden mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl text-white font-bold mb-4">
              ¿No estás seguro de qué necesitas?
            </h2>
            <p className="font-sans text-lg text-white/90 mb-8">
              Si tu proyecto es de carácter territorial y geoespacial, pero no estás seguro de cuáles son
              las soluciones o servicios que necesitas, contáctanos y te agendamos una sesión de
              asesoramiento personalizada gratuita.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/525528832974"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-chestnut px-8 py-3 rounded-lg font-sans font-medium hover:bg-golden hover:text-white transition-all shadow-lg"
              >
                55 2883 2974
              </a>
              <a
                href="mailto:geoespacial@kaabmap.com"
                className="bg-white/10 border border-white/30 text-white px-8 py-3 rounded-lg font-sans font-medium hover:bg-white/20 transition-all"
              >
                geoespacial@kaabmap.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Servicios;
