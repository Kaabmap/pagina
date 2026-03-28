import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Lightbulb, BookOpen, Globe } from 'lucide-react';

import imgInspeccion from '../assets/img/Servicios/servicios-inspeccion.jpg';
import imgCursos from '../assets/img/Servicios/servicios-cursos.jpg';
import imgRecursos from '../assets/img/Servicios/servicios-recursos.jpg';
import fotoAri from '../assets/img/Conocenos/KaabMap-Ari8.jpg';
import fotoAle from '../assets/img/Conocenos/KaabMap-Ale10.jpg';
import fotoAlejandro from '../assets/img/Conocenos/KaabMap-Alejandro6.jpg';
import fotoJuanPablo from '../assets/img/Conocenos/KaabMap-JuanPablo6.jpg';
import fotoUriel from '../assets/img/Conocenos/KaabMap-Uriel9.jpg';
import fotoEquipo1 from '../assets/img/Conocenos/KaabMap-Equipo11.jpg';
import fotoEquipo2 from '../assets/img/Conocenos/KaabMap-Equipo5.jpg';
import fotoDrones1 from '../assets/img/Conocenos/KaabMap-Drones13.jpg';
import fotoDrones2 from '../assets/img/Conocenos/KaabMap-Drones29.jpg';

const Conocenos = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentGallery, setCurrentGallery] = useState(0);
  const slideIntervalRef = useRef(null);

  const integrantes = [
    {
      id: 1,
      nombre: "Ariadna Arrieta",
      rol: "Fundadora",
      titulo: "Geógrafa UNAM y Científica de Datos Geoespaciales",
      descripcion: "Líder de Operaciones y Científica de Datos Geoespaciales.",
      foto: fotoAri
    },
    {
      id: 2,
      nombre: "Alejandra Gutiérrez",
      rol: "Fundadora",
      titulo: "Ingeniera Geomática UNAM y Científica de Datos Geoespaciales",
      descripcion: "Gestora de Proyectos Geoespaciales y Especialista SIG.",
      foto: fotoAle
    },
    {
      id: 3,
      nombre: "Juan Pablo Vaca Díez",
      rol: "Integrante",
      titulo: "Gestor de Proyectos y Especialista Geoespacial",
      descripcion: "Gestor de Proyectos y Especialista Geoespacial.",
      foto: fotoJuanPablo
    },
    {
      id: 4,
      nombre: "Alejandro Girón",
      rol: "Integrante",
      titulo: "Especialista en Operaciones de Dron",
      descripcion: "Especialista en Operaciones de Dron y Adquisición de Datos en Campo.",
      foto: fotoAlejandro
    },
    {
      id: 5,
      nombre: "Uriel Mendoza",
      rol: "Integrante",
      titulo: "Programador y Desarrollador Tecnológico Geoespacial",
      descripcion: "Programador y Desarrollador Tecnológico Geoespacial.",
      foto: fotoUriel
    }
  ];

  const galeria = [
    { src: fotoEquipo1, alt: "Equipo KAAB MAP trabajando" },
    { src: fotoEquipo2, alt: "Equipo KAAB MAP en campo" },
    { src: fotoDrones1, alt: "Operación de drones" },
    { src: fotoDrones2, alt: "Vuelo de drones en campo" },
  ];

  const objetivos = [
    {
      icono: Lightbulb,
      titulo: "Inspirar...",
      items: ["Conciencia", "Seguridad", "Participación y liderazgo femenino"],
      color: "#914e2e",
      imagen: imgInspeccion
    },
    {
      icono: BookOpen,
      titulo: "Educar sobre...",
      items: ["El Territorio", "Geomática/Geografía", "Manejo de drones", "Tecnologías", "Impacto socioambiental"],
      color: "#9ea67a",
      imagen: imgCursos
    },
    {
      icono: Globe,
      titulo: "Conectar con...",
      items: ["Personas", "Historias", "La Tierra"],
      color: "#c7aa64",
      imagen: imgRecursos
    }
  ];

  const cooperativaInfo = {
    manifiesto: {
      titulo: "Hacemos propuestas con-ciencia:",
      texto: "Con fundamento, con responsabilidad, con equidad, pero por sobre todo, con pasión por escuchar, aprender y cuidar de nuestro entorno."
    },
    queHacemos: "Estudiamos el territorio y el paisaje por medio del levantamiento de información geoespacial con drones y ayudamos a que otros aprendan a hacerlo.",
    comoLoHacemos: "Empoderamos con conocimiento a profesionales, organizaciones y comunidades poniendo a su disposición talleres, capacitaciones y servicios relacionados al manejo de drones, fotogrametría, levantamientos LiDAR, uso de SIGs y CAD, topografía, monitoreo de recursos y cartografía; así como, ofreciéndoles asesoramiento sobre las acciones conscientes (ambientales, sociales, económicas) que pueden adoptar gracias a estas tecnologías en el desarrollo de sus actividades.",
    porQueLoHacemos: "Buscamos colaborar con proyectos que nos permitan planear, reestructurar y crear espacios funcionales y seguros en pro de las necesidades de nuestra comunidad y de la naturaleza, considerando los datos como el origen de un todo e impulsando el desarrollo sostenible en el proceso.",
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

  useEffect(() => {
    const startAutoPlay = () => {
      if (window.innerWidth < 768) {
        slideIntervalRef.current = setInterval(() => {
          setCurrentSlide((prev) => (prev + 1) % integrantes.length);
        }, 3000);
      }
    };
    startAutoPlay();
    const handleResize = () => {
      if (slideIntervalRef.current) clearInterval(slideIntervalRef.current);
      slideIntervalRef.current = null;
      if (window.innerWidth < 768) startAutoPlay();
    };
    window.addEventListener('resize', handleResize);
    return () => {
      if (slideIntervalRef.current) clearInterval(slideIntervalRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const galleryInterval = setInterval(() => {
      setCurrentGallery((prev) => (prev + 1) % galeria.length);
    }, 4000);
    return () => clearInterval(galleryInterval);
  }, []);

  const resetAutoPlay = () => {
    if (slideIntervalRef.current) clearInterval(slideIntervalRef.current);
    if (window.innerWidth < 768) {
      slideIntervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % integrantes.length);
      }, 3000);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % integrantes.length);
    resetAutoPlay();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + integrantes.length) % integrantes.length);
    resetAutoPlay();
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={fotoEquipo1} alt="Equipo" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-chestnut/85" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-white">
              ¡Hola! Somos...
            </h1>
            <h2 className="font-serif text-3xl md:text-4xl text-golden font-bold mb-6">
              Soluciones Geoespaciales
            </h2>
            <p className="font-sans text-xl text-white/90">
              {cooperativaInfo.manifiesto.texto}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ¿Qué hacemos? / ¿Cómo? / ¿Por qué? */}
      <section className="py-20 bg-alabaster">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-16">
            {[
              { titulo: "¿Qué hacemos?", texto: cooperativaInfo.queHacemos },
              { titulo: "¿Cómo lo hacemos?", texto: cooperativaInfo.comoLoHacemos },
              { titulo: "¿Por qué lo hacemos?", texto: cooperativaInfo.porQueLoHacemos },
            ].map((item, index) => (
              <motion.div
                key={item.titulo}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-5 gap-8 items-center ${index % 2 !== 0 ? 'lg:direction-rtl' : ''}`}
              >
                <div className={`lg:col-span-3 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <h2 className="font-serif text-3xl md:text-4xl text-chestnut font-bold mb-4">
                    {item.titulo}
                  </h2>
                  <p className="font-sans text-lg text-darkLava/80 leading-relaxed">
                    {item.texto}
                  </p>
                </div>
                <div className={`lg:col-span-2 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="rounded-2xl overflow-hidden shadow-xl"
                  >
                    <img
                      src={[fotoEquipo2, fotoDrones1, fotoDrones2][index]}
                      alt={item.titulo}
                      className="w-full h-64 object-cover"
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Objetivos */}
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
              Nuestros Objetivos
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {objetivos.map((obj, index) => {
              const Icon = obj.icono;
              return (
                <motion.div
                  key={obj.titulo}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ y: -8 }}
                  className="rounded-2xl shadow-lg overflow-hidden group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={obj.imagen}
                      alt={obj.titulo}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                    />
                    <div className="absolute bottom-4 left-4 flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm"
                        style={{ backgroundColor: `${obj.color}cc` }}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="font-serif text-xl font-bold text-white drop-shadow-lg">
                        {obj.titulo}
                      </h3>
                    </div>
                  </div>
                  <div className="bg-alabaster p-6 text-center">
                    <ul className="space-y-2">
                      {obj.items.map((item) => (
                        <li key={item} className="font-sans text-darkLava/80 flex items-center justify-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: obj.color }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Galería */}
      <section className="py-16 bg-darkLava">
        <div className="container mx-auto px-4">
          <div className="relative max-w-5xl mx-auto h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentGallery}
                src={galeria[currentGallery].src}
                alt={galeria[currentGallery].alt}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8 }}
                className="w-full h-full object-cover absolute inset-0"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-darkLava/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {galeria.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentGallery(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === currentGallery ? 'bg-golden w-8' : 'bg-white/50 w-2'
                  }`}
                />
              ))}
            </div>
          </div>
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
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl text-chestnut font-bold mb-4">
              Nuestro Equipo
            </h2>
            <p className="font-sans text-lg text-darkLava/70">
              Las personas detrás de KAAB MAP
            </p>
          </motion.div>

          {/* Desktop */}
          <div className="hidden md:flex flex-wrap justify-center gap-12 max-w-5xl mx-auto">
            {integrantes.map((integrante, index) => (
              <motion.div
                key={integrante.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="flex flex-col items-center text-center cursor-pointer group"
                onClick={() => setSelectedMember(selectedMember === integrante.id ? null : integrante.id)}
              >
                <motion.div whileHover={{ scale: 1.08 }} className="relative mb-5">
                  <div className="w-44 h-44 rounded-full overflow-hidden ring-4 ring-alabaster shadow-xl group-hover:ring-golden transition-all duration-300">
                    <img
                      src={integrante.foto}
                      alt={integrante.nombre}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </motion.div>
                <h3 className="font-serif text-xl text-chestnut font-bold mb-1">
                  {integrante.nombre}
                </h3>
                <p className="font-sans text-sm text-golden font-medium mb-1">{integrante.rol}</p>
                <motion.div
                  initial={false}
                  animate={{
                    height: selectedMember === integrante.id ? 'auto' : 0,
                    opacity: selectedMember === integrante.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden max-w-[200px]"
                >
                  <p className="font-sans text-xs text-darkLava/60 italic mb-1 pt-2">{integrante.titulo}</p>
                  <p className="font-sans text-sm text-darkLava/70 leading-relaxed">
                    {integrante.descripcion}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Móvil */}
          <div className="md:hidden relative max-w-xs mx-auto">
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 200 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -200 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-48 h-48 rounded-full overflow-hidden ring-4 ring-alabaster shadow-xl mb-5">
                    <img
                      src={integrantes[currentSlide].foto}
                      alt={integrantes[currentSlide].nombre}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-serif text-2xl text-chestnut font-bold mb-1">
                    {integrantes[currentSlide].nombre}
                  </h3>
                  <p className="font-sans text-sm text-golden font-medium mb-1">
                    {integrantes[currentSlide].rol}
                  </p>
                  <p className="font-sans text-xs text-darkLava/60 italic mb-2">
                    {integrantes[currentSlide].titulo}
                  </p>
                  <p className="font-sans text-sm text-darkLava/70 leading-relaxed">
                    {integrantes[currentSlide].descripcion}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              onClick={prevSlide}
              className="absolute -left-4 top-24 -translate-y-1/2 bg-chestnut/80 hover:bg-chestnut text-white p-2 rounded-full shadow-lg transition-all z-10"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute -right-4 top-24 -translate-y-1/2 bg-chestnut/80 hover:bg-chestnut text-white p-2 rounded-full shadow-lg transition-all z-10"
            >
              <ChevronRight size={20} />
            </button>

            <div className="flex justify-center gap-2 mt-6">
              {integrantes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => { setCurrentSlide(index); resetAutoPlay(); }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-chestnut w-8' : 'bg-chestnut/30 w-2'
                  }`}
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
