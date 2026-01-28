import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Conocenos = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideIntervalRef = useRef(null);

  // Integrantes
  const integrantes = [
    {
      id: 1,
      nombre: "Ariadna Arrieta",
      rol: "Fundadora",
      descripcion: "Apasionada por la geomática y el territorio. Especialista en levantamientos geoespaciales con drones.",
      foto: "https://via.placeholder.com/300x400/914e2e/f0eee1?text=Ariadna+Arrieta"
    },
    {
      id: 2,
      nombre: "Alejandra Gutiérrez",
      rol: "Fundadora",
      descripcion: "Experta en cartografía y sistemas de información geográfica. Comprometida con el desarrollo sostenible.",
      foto: "https://via.placeholder.com/300x400/9ea67a/f0eee1?text=Alejandra+Gutiérrez"
    },
    {
      id: 3,
      nombre: "Juan Pablo",
      rol: "Rol pendiente",
      descripcion: "Breve biografía pendiente.",
      foto: "https://via.placeholder.com/300x400/c7aa64/f0eee1?text=Juan+Pablo"
    },
    {
      id: 4,
      nombre: "Giron",
      rol: "Rol pendiente",
      descripcion: "Breve biografía pendiente.",
      foto: "https://via.placeholder.com/300x400/dd6657/f0eee1?text=Giron"
    },
    {
      id: 5,
      nombre: "Uriel",
      rol: "Rol pendiente",
      descripcion: "Breve biografía pendiente.",
      foto: "https://via.placeholder.com/300x400/828d4d/f0eee1?text=Uriel"
    }
  ];

  // Información de la cooperativa basada en el PDF
  const cooperativaInfo = {
    historia: {
      titulo: "Nacimos de la amistad",
      texto: "Creemos firmemente que a más conciencia, conocimeinto y colaboración es igual a mejores espacios y mayor calidad de vida para todos"
    },
    manifiesto: {
      titulo: "Hacemos propuestas con-ciencia",
      texto: "Con fundamento, con responsabilidad, con equidad, pero por sobre todo, con pasión por escuchar, aprender y cuidar de nuestro entorno."
    },
    valores: [
      {
        titulo: "Conciencia",
        descripcion: "Reconocemos el gran impacto que tienen nuestras decisiones y acciones sobre los demás y sobre nuestro territorio, así que la capacidad de provocar un cambio positivo está en nuestras manos y en las de todos."
      },
      {
        titulo: "Pasión",
        descripcion: "La conexión tan profunda que tenemos con la Tierra y con nuestras raíces es una de las razones que nos hace amar lo que hacemos, tanto a nosotras como a nosotros."
      },
      {
        titulo: "Colaboración",
        descripcion: "Para nosotras y nosotros el conocimiento es poder, pero como no lo sabemos todo y nunca se termina de aprender, estamos más que dispuestas y dispuestos a nutrir y ampliar nuestra perspectiva."
      },
      {
        titulo: "Equidad",
        descripcion: "Como iniciativa liderada por mujeres, buscamos inspirar, educar y colaborar con aquellas y aquellos que impulsen la equidad de género en el ámbito tecnológico y geográfico."
      }
    ]
  };

  // Auto-play del slider en móvil
  useEffect(() => {
    const startAutoPlay = () => {
      if (window.innerWidth < 768) { // Solo en móvil (md breakpoint)
        slideIntervalRef.current = setInterval(() => {
          setCurrentSlide((prev) => (prev + 1) % integrantes.length);
        }, 2000); // Cambia cada 2 segundos
      }
    };

    startAutoPlay();

    const handleResize = () => {
      if (slideIntervalRef.current) {
        clearInterval(slideIntervalRef.current);
        slideIntervalRef.current = null;
      }
      if (window.innerWidth < 768) {
        startAutoPlay();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (slideIntervalRef.current) {
        clearInterval(slideIntervalRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % integrantes.length);
    // Reiniciar el auto-play
    if (slideIntervalRef.current) {
      clearInterval(slideIntervalRef.current);
    }
    if (window.innerWidth < 768) {
      slideIntervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % integrantes.length);
      }, 2000);
    }
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + integrantes.length) % integrantes.length);
    // Reiniciar el auto-play
    if (slideIntervalRef.current) {
      clearInterval(slideIntervalRef.current);
    }
    if (window.innerWidth < 768) {
      slideIntervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % integrantes.length);
      }, 2000);
    }
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
              Conócenos
            </h1>
            <p className="font-sans text-xl text-white/90">
              Somos un equipo multidisciplinario que busca construir nuevos mapas y caminos 
              que nos guíen a nuevas aventuras.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Historia */}
      <section className="py-20 bg-alabaster">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-serif text-4xl text-chestnut font-bold mb-6">
              {cooperativaInfo.historia.titulo}
            </h2>
            <p className="font-sans text-lg text-darkLava leading-relaxed">
              {cooperativaInfo.historia.texto}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Manifiesto */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="font-serif text-4xl text-chestnut font-bold mb-6">
              {cooperativaInfo.manifiesto.titulo}
            </h2>
            <p className="font-serif text-2xl text-darkLava/80 italic leading-relaxed">
              {cooperativaInfo.manifiesto.texto}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-alabaster">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl text-chestnut font-bold mb-4">
              Nuestra Brújula
            </h2>
            <p className="font-sans text-lg text-darkLava/70">
              Los valores que guían nuestro trabajo
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {cooperativaInfo.valores.map((valor, index) => (
              <motion.div
                key={valor.titulo}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="font-serif text-2xl text-chestnut font-bold mb-4">
                  {valor.titulo}
                </h3>
                <p className="font-sans text-darkLava/80 leading-relaxed">
                  {valor.descripcion}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo */}
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
              Nuestro Equipo
            </h2>
            <p className="font-sans text-lg text-darkLava/70">
              Las personas detrás de KAAB MAP
            </p>
          </motion.div>

          {/* Versión Desktop - Grid */}
          <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {integrantes.map((integrante, index) => (
              <motion.div
                key={integrante.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-alabaster rounded-lg shadow-lg overflow-hidden cursor-pointer"
                onClick={() => setSelectedMember(selectedMember === integrante.id ? null : integrante.id)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={integrante.foto}
                    alt={integrante.nombre}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-chestnut/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <p className="font-sans text-sm mb-2">{integrante.rol}</p>
                      <p className="font-serif text-xl font-bold">{integrante.nombre}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl text-chestnut font-bold mb-2">
                    {integrante.nombre}
                  </h3>
                  <p className="font-sans text-sm text-golden mb-3">{integrante.rol}</p>
                  <motion.div
                    initial={false}
                    animate={{ height: selectedMember === integrante.id ? 'auto' : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="font-sans text-darkLava/80 leading-relaxed">
                      {integrante.descripcion}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Versión Móvil - Slider */}
          <div className="md:hidden relative max-w-sm mx-auto">
            <div className="relative overflow-hidden rounded-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="bg-alabaster rounded-lg shadow-lg overflow-hidden cursor-pointer"
                  onClick={() => setSelectedMember(selectedMember === integrantes[currentSlide].id ? null : integrantes[currentSlide].id)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={integrantes[currentSlide].foto}
                      alt={integrantes[currentSlide].nombre}
                      className="w-full h-full object-cover transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-chestnut/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="text-white">
                        <p className="font-sans text-sm mb-2">{integrantes[currentSlide].rol}</p>
                        <p className="font-serif text-xl font-bold">{integrantes[currentSlide].nombre}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-2xl text-chestnut font-bold mb-2">
                      {integrantes[currentSlide].nombre}
                    </h3>
                    <p className="font-sans text-sm text-golden mb-3">{integrantes[currentSlide].rol}</p>
                    <motion.div
                      initial={false}
                      animate={{ height: selectedMember === integrantes[currentSlide].id ? 'auto' : 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="font-sans text-darkLava/80 leading-relaxed">
                        {integrantes[currentSlide].descripcion}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Flechas de navegación */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-chestnut/80 hover:bg-chestnut text-white p-2 rounded-full shadow-lg transition-all duration-300 z-10"
              aria-label="Anterior"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-chestnut/80 hover:bg-chestnut text-white p-2 rounded-full shadow-lg transition-all duration-300 z-10"
              aria-label="Siguiente"
            >
              <ChevronRight size={24} />
            </button>

            {/* Indicadores de posición */}
            <div className="flex justify-center gap-2 mt-4">
              {integrantes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index);
                    // Reiniciar auto-play
                    if (slideIntervalRef.current) {
                      clearInterval(slideIntervalRef.current);
                    }
                    slideIntervalRef.current = setInterval(() => {
                      setCurrentSlide((prev) => (prev + 1) % integrantes.length);
                    }, 2000);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-chestnut w-8'
                      : 'bg-chestnut/30 w-2'
                  }`}
                  aria-label={`Ir a slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Conocenos;
