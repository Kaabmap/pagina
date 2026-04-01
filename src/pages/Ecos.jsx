import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Ecos = () => {
  const articulos = [
    {
      id: 1,
      titulo: '¿Qué es una Cooperativa?',
      resumen: 'Las cooperativas son organizaciones democráticas que pertenecen a sus miembros, quienes las controlan y dirigen. Descubre cómo funcionan y por qué son importantes para el desarrollo sostenible.',
      fecha: '2024-01-15',
      autor: 'KAAB MAP',
      imagen: 'https://via.placeholder.com/600x400/914e2e/f0eee1?text=Cooperativas',
      categoria: 'Conceptos'
    },
    {
      id: 2,
      titulo: 'El Modelo Cooperativo en la Tecnología',
      resumen: 'Exploramos cómo el modelo cooperativo puede transformar la industria tecnológica, promoviendo la equidad, la colaboración y el desarrollo sostenible en el sector geoespacial.',
      fecha: '2024-01-10',
      autor: 'KAAB MAP',
      imagen: 'https://via.placeholder.com/600x400/9ea67a/f0eee1?text=Tecnología+Cooperativa',
      categoria: 'Tecnología'
    },
    {
      id: 3,
      titulo: 'Valores Cooperativos: Colaboración y Equidad',
      resumen: 'Los valores fundamentales de las cooperativas - ayuda mutua, responsabilidad, democracia, igualdad, equidad y solidaridad - y cómo los aplicamos en nuestro trabajo diario.',
      fecha: '2024-01-05',
      autor: 'KAAB MAP',
      imagen: 'https://via.placeholder.com/600x400/c7aa64/f0eee1?text=Valores+Cooperativos',
      categoria: 'Valores'
    },
    {
      id: 4,
      titulo: 'Cooperativas y Desarrollo Sostenible',
      resumen: 'Cómo las cooperativas contribuyen al desarrollo sostenible a través de prácticas responsables, equitativas y conscientes del impacto ambiental y social.',
      fecha: '2024-01-01',
      autor: 'KAAB MAP',
      imagen: 'https://via.placeholder.com/600x400/dd6657/f0eee1?text=Desarrollo+Sostenible',
      categoria: 'Sostenibilidad'
    }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="">
      {/* Hero Section */}
      <section className="bg-chestnut text-white pt-36 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              Ecos
            </h1>
            <p className="font-sans text-xl text-white/90">
              Información relacionada al concepto de cooperativa y nuestro trabajo
            </p>
          </motion.div>
        </div>
      </section>

      {/* Artículos */}
      <section className="py-20 bg-alabaster">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {articulos.map((articulo, index) => (
              <motion.article
                key={articulo.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={articulo.imagen}
                    alt={articulo.titulo}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-chestnut text-white px-3 py-1 rounded-full text-xs font-sans font-medium">
                      {articulo.categoria}
                    </span>
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
                  <p className="font-sans text-darkLava/80 leading-relaxed mb-4 line-clamp-3">
                    {articulo.resumen}
                  </p>
                  <div className="flex items-center space-x-2 text-chestnut font-sans font-medium group-hover:space-x-4 transition-all">
                    <span>Leer más</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Mensaje para futuros artículos */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16 max-w-2xl mx-auto"
          >
            <p className="font-sans text-lg text-darkLava/70 italic">
              Más artículos sobre cooperativas y nuestro trabajo se irán agregando periódicamente.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Ecos;
