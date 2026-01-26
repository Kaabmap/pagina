import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Drone, Map, Ruler, Monitor, Camera, BookOpen, Users } from 'lucide-react';

const Servicios = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const servicios = [
    {
      id: 1,
      titulo: 'Talleres y Capacitaciones',
      descripcion: 'Empoderamos con conocimiento a profesionales, organizaciones y comunidades a través de talleres y capacitaciones especializadas en el manejo de drones, fotogrametría, levantamientos LiDAR, uso de SIGs y CAD, topografía, monitoreo de recursos y cartografía.',
      icono: BookOpen,
      imagen: 'https://via.placeholder.com/800x500/914e2e/f0eee1?text=Talleres+y+Capacitaciones',
      color: 'chestnut'
    },
    {
      id: 2,
      titulo: 'Manejo de Drones',
      descripcion: 'Ofrecemos servicios especializados en el manejo de drones para levantamientos geoespaciales, con equipo de última generación y pilotos certificados.',
      icono: Drone,
      imagen: 'https://via.placeholder.com/800x500/9ea67a/f0eee1?text=Manejo+de+Drones',
      color: 'grullo'
    },
    {
      id: 3,
      titulo: 'Fotogrametría',
      descripcion: 'Servicios de fotogrametría aérea y terrestre para generar modelos 3D, ortofotos y mapas de alta precisión utilizando tecnología de vanguardia.',
      icono: Camera,
      imagen: 'https://via.placeholder.com/800x500/c7aa64/f0eee1?text=Fotogrametría',
      color: 'golden'
    },
    {
      id: 4,
      titulo: 'Levantamientos LiDAR',
      descripcion: 'Levantamientos topográficos y cartográficos utilizando tecnología LiDAR para obtener datos precisos del terreno y generar modelos digitales de elevación.',
      icono: Ruler,
      imagen: 'https://via.placeholder.com/800x500/dd6657/f0eee1?text=Levantamientos+LiDAR',
      color: 'jellyBean'
    },
    {
      id: 5,
      titulo: 'Sistemas de Información Geográfica (SIG)',
      descripcion: 'Desarrollo y gestión de sistemas de información geográfica para análisis espacial, planificación territorial y toma de decisiones basada en datos.',
      icono: Map,
      imagen: 'https://via.placeholder.com/800x500/914e2e/f0eee1?text=Sistemas+de+Información+Geográfica',
      color: 'chestnut'
    },
    {
      id: 6,
      titulo: 'Topografía',
      descripcion: 'Servicios topográficos completos utilizando tecnología moderna para levantamientos precisos del terreno, curvas de nivel y planos topográficos.',
      icono: Ruler,
      imagen: 'https://via.placeholder.com/800x500/9ea67a/f0eee1?text=Topografía',
      color: 'grullo'
    },
    {
      id: 7,
      titulo: 'Monitoreo de Recursos',
      descripcion: 'Monitoreo y análisis de recursos naturales mediante tecnología geoespacial para evaluar cambios, impactos y tendencias ambientales.',
      icono: Monitor,
      imagen: 'https://via.placeholder.com/800x500/c7aa64/f0eee1?text=Monitoreo+de+Recursos',
      color: 'golden'
    },
    {
      id: 8,
      titulo: 'Cartografía',
      descripcion: 'Elaboración de mapas temáticos, cartografía digital y productos cartográficos de alta calidad para diversos propósitos y escalas.',
      icono: Map,
      imagen: 'https://via.placeholder.com/800x500/dd6657/f0eee1?text=Cartografía',
      color: 'jellyBean'
    },
    {
      id: 9,
      titulo: 'Asesoramiento',
      descripcion: 'Asesoramiento sobre acciones conscientes (ambientales, sociales, económicas) que pueden adoptarse gracias a estas tecnologías en el desarrollo de actividades.',
      icono: Users,
      imagen: 'https://via.placeholder.com/800x500/914e2e/f0eee1?text=Asesoramiento',
      color: 'chestnut'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % servicios.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + servicios.length) % servicios.length);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-chestnut text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              Nuestros Servicios
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
            {/* Slider Container */}
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Imagen */}
                  <div className="h-64 lg:h-96 relative overflow-hidden">
                    <img
                      src={servicios[currentSlide].imagen}
                      alt={servicios[currentSlide].titulo}
                      className="w-full h-full object-cover"
                    />
                    <div 
                      className="absolute inset-0 bg-gradient-to-r to-transparent"
                      style={{
                        background: `linear-gradient(to right, ${
                          servicios[currentSlide].color === 'chestnut' ? 'rgba(145, 78, 46, 0.8)' :
                          servicios[currentSlide].color === 'grullo' ? 'rgba(158, 166, 122, 0.8)' :
                          servicios[currentSlide].color === 'golden' ? 'rgba(199, 170, 100, 0.8)' :
                          'rgba(221, 102, 87, 0.8)'
                        }, transparent)`
                      }}
                    />
                  </div>

                  {/* Contenido */}
                  <div className="bg-white p-8 lg:p-12 flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div 
                        className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
                        style={{
                          backgroundColor: servicios[currentSlide].color === 'chestnut' ? 'rgba(145, 78, 46, 0.1)' :
                            servicios[currentSlide].color === 'grullo' ? 'rgba(158, 166, 122, 0.1)' :
                            servicios[currentSlide].color === 'golden' ? 'rgba(199, 170, 100, 0.1)' :
                            'rgba(221, 102, 87, 0.1)'
                        }}
                      >
                        {(() => {
                          const Icon = servicios[currentSlide].icono;
                          return (
                            <Icon 
                              className="w-8 h-8"
                              style={{
                                color: servicios[currentSlide].color === 'chestnut' ? '#914e2e' :
                                  servicios[currentSlide].color === 'grullo' ? '#9ea67a' :
                                  servicios[currentSlide].color === 'golden' ? '#c7aa64' :
                                  '#dd6657'
                              }}
                            />
                          );
                        })()}
                      </div>
                      <h2 className="font-serif text-3xl md:text-4xl text-chestnut font-bold mb-4">
                        {servicios[currentSlide].titulo}
                      </h2>
                      <p className="font-sans text-lg text-darkLava/80 leading-relaxed">
                        {servicios[currentSlide].descripcion}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-chestnut p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-chestnut p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {servicios.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-chestnut w-8'
                      : 'bg-chestnut/30 hover:bg-chestnut/50'
                  }`}
                  aria-label={`Ir a servicio ${index + 1}`}
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
            <p className="font-sans text-lg text-darkLava/70">
              Conoce más sobre cada uno de nuestros servicios
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  className="bg-alabaster p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div 
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4"
                    style={{
                      backgroundColor: servicio.color === 'chestnut' ? 'rgba(145, 78, 46, 0.1)' :
                        servicio.color === 'grullo' ? 'rgba(158, 166, 122, 0.1)' :
                        servicio.color === 'golden' ? 'rgba(199, 170, 100, 0.1)' :
                        'rgba(221, 102, 87, 0.1)'
                    }}
                  >
                    <Icon 
                      className="w-6 h-6"
                      style={{
                        color: servicio.color === 'chestnut' ? '#914e2e' :
                          servicio.color === 'grullo' ? '#9ea67a' :
                          servicio.color === 'golden' ? '#c7aa64' :
                          '#dd6657'
                      }}
                    />
                  </div>
                  <h3 className="font-serif text-xl text-chestnut font-bold mb-3">
                    {servicio.titulo}
                  </h3>
                  <p className="font-sans text-sm text-darkLava/70 line-clamp-3">
                    {servicio.descripcion}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servicios;
