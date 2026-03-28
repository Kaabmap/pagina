import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap, MapPinned, Building2, Wrench, Quote } from 'lucide-react';

import imgIbero1 from '../assets/img/Proyectos/ibero_santa_elena/ibero_santa_elena_1.png';

const Proyectos = () => {
  const categorias = [
    { nombre: "Educación e investigación", color: "#914e2e" },
    { nombre: "Planeación y análisis socio-territorial", color: "#9ea67a" },
    { nombre: "Desarrollo urbano y ambiental", color: "#c7aa64" },
    { nombre: "Capacitación técnica especializada", color: "#dd6657" },
  ];

  const proyectos = [
    {
      id: 'ibero-santa-elena',
      titulo: 'IBERO - Santa Elena',
      categoria: 'Educación e investigación',
      cliente: 'Universidad Iberoamericana – Departamento de Economía / Laboratorio Geoespacial',
      descripcion: 'Capacitación integral en manejo de drones, vuelo LIDAR y procesamiento de datos para el Laboratorio Geoespacial de la Ibero, con prácticas en el Rancho Santa Elena, Hidalgo.',
      imagen: imgIbero1,
      tieneDetalle: true,
      icono: GraduationCap
    },
    {
      id: 'ibero-inah-ngiwa',
      titulo: "IBERO/INAH - Ngi'wa",
      categoria: 'Educación e investigación',
      cliente: 'Universidad Iberoamericana / Instituto Nacional de Antropología e Historia (INAH)',
      descripcion: 'Acompañamiento integral y vuelo LIDAR para investigaciones arqueológicas en la Reserva de la Biosfera Tehuacán–Cuicatlán, generando información precisa para priorizar áreas de exploración.',
      imagen: null,
      tieneDetalle: false,
      icono: GraduationCap
    },
    {
      id: 'analisis-territorial-electoral',
      titulo: 'Análisis Territorial Electoral',
      categoria: 'Planeación y análisis socio-territorial',
      cliente: 'Coordinadora Electoral en Coyoacán',
      descripcion: 'Desarrollo de mapa interactivo y bot automatizado para análisis electoral, visualizando cobertura territorial de líderes de campaña y optimizando la toma de decisiones en campo.',
      imagen: null,
      tieneDetalle: false,
      icono: MapPinned
    },
    {
      id: 'conavi-arboles',
      titulo: 'CONAVI - Árboles',
      categoria: 'Desarrollo urbano y ambiental',
      cliente: 'Colaborador vinculado a proyectos de vivienda CONAVI en Sonora',
      descripcion: 'Procesamiento de nube de puntos LiDAR para caracterizar el arbolado existente en un predio, generando modelos digitales y rutinas automatizadas para cumplir con requerimientos ambientales.',
      imagen: null,
      tieneDetalle: false,
      icono: Building2
    },
    {
      id: 'temocsa-curso',
      titulo: 'TEMOCSA - Curso',
      categoria: 'Capacitación técnica especializada',
      cliente: 'TEMOCSA – Constructora mexicana de proyectos de ingeniería',
      descripcion: 'Capacitación integral en dron M300 con tecnología LiDAR, combinando teoría, práctica y aplicación directa para fortalecer las capacidades internas del equipo técnico.',
      imagen: null,
      tieneDetalle: false,
      icono: Wrench
    }
  ];

  const testimonios = [
    {
      texto: "Se desenvuelven con una claridad exquisita. Resolvieron todas nuestras dudas tanto técnicas como operativas.",
      autor: "Departamento de Economía, IBERO"
    },
    {
      texto: "Me sentí escuchada y me dieron una solución enfocada a las necesidades de mi proyecto.",
      autor: "Sabi, Abogada y Coordinadora Electoral Coyoacán"
    },
    {
      texto: "Se nota el dominio del tema. Manejan costos y entregas realistas en tiempos realistas.",
      autor: "Christian, Emprendedor y Trabajador CONAVI"
    },
    {
      texto: "Nos asesoraron y acompañaron en todo el desarrollo de nuestro proyecto, lo que nos permitió desarrollarlo de forma controlada y eficiente. Se ganaron nuestra confianza absoluta.",
      autor: "Equipo INAH"
    }
  ];

  const getCategoryColor = (cat) => {
    const found = categorias.find(c => c.nombre === cat);
    return found ? found.color : '#914e2e';
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={imgIbero1} alt="Proyectos" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-chestnut/80" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-white">
              Casos de Éxito
            </h1>
            <p className="font-sans text-xl text-white/90">
              Conoce nuestras colaboraciones y los resultados que hemos logrado
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16 bg-darkLava">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-serif text-3xl text-golden font-bold mb-2">
              ¿Con quiénes hemos colaborado?
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {testimonios.map((test, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-sm"
              >
                <Quote className="w-8 h-8 text-golden/60 mb-3" />
                <p className="font-serif text-white/90 italic leading-relaxed mb-4">
                  "{test.texto}"
                </p>
                <p className="font-sans text-golden text-sm font-medium">
                  — {test.autor}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section className="py-20 bg-alabaster">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            {proyectos.map((proyecto, index) => {
              const Icon = proyecto.icono;
              const catColor = getCategoryColor(proyecto.categoria);

              return (
                <motion.div
                  key={proyecto.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden group"
                >
                  {proyecto.tieneDetalle ? (
                    <Link to={`/proyectos/${proyecto.id}`} className="block">
                      <ProjectCard proyecto={proyecto} Icon={Icon} catColor={catColor} />
                    </Link>
                  ) : (
                    <ProjectCard proyecto={proyecto} Icon={Icon} catColor={catColor} />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

const ProjectCard = ({ proyecto, Icon, catColor }) => (
  <div className={`grid grid-cols-1 ${proyecto.imagen ? 'md:grid-cols-2' : ''}`}>
    {proyecto.imagen && (
      <div className="relative h-64 md:h-full min-h-[280px] overflow-hidden">
        <img
          src={proyecto.imagen}
          alt={proyecto.titulo}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-darkLava/30 to-transparent" />
      </div>
    )}
    <div className="p-8 md:p-10 flex flex-col justify-center">
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: `${catColor}1a` }}
        >
          <Icon className="w-5 h-5" style={{ color: catColor }} />
        </div>
        <span
          className="font-sans text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full"
          style={{ backgroundColor: `${catColor}15`, color: catColor }}
        >
          {proyecto.categoria}
        </span>
      </div>
      <h3 className="font-serif text-2xl md:text-3xl text-chestnut font-bold mb-2">
        {proyecto.titulo}
      </h3>
      <p className="font-sans text-sm text-darkLava/50 mb-3">{proyecto.cliente}</p>
      <p className="font-sans text-darkLava/80 leading-relaxed mb-4">
        {proyecto.descripcion}
      </p>
      {proyecto.tieneDetalle && (
        <div className="flex items-center space-x-2 text-chestnut font-sans font-medium group-hover:space-x-4 transition-all">
          <span>Ver proyecto completo</span>
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
        </div>
      )}
    </div>
  </div>
);

export default Proyectos;
