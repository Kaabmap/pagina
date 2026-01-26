import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Proyectos = () => {
  const proyectos = [
    {
      id: 'mixteca',
      titulo: 'Mixteca',
      descripcion: 'Proyecto de levantamiento geoespacial en la región Mixteca, enfocado en el análisis territorial y desarrollo sostenible.',
      imagen: 'https://via.placeholder.com/600x400/914e2e/f0eee1?text=Proyecto+Mixteca',
      color: 'chestnut'
    },
    {
      id: 'acapulco',
      titulo: 'Acapulco',
      descripcion: 'Levantamiento topográfico y cartográfico en Acapulco, utilizando tecnología de drones para mapeo costero.',
      imagen: 'https://via.placeholder.com/600x400/9ea67a/f0eee1?text=Proyecto+Acapulco',
      color: 'grullo'
    }
  ];

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
              Nuestros Proyectos
            </h1>
            <p className="font-sans text-xl text-white/90">
              Exploramos el territorio con tecnología de vanguardia y conciencia ambiental
            </p>
          </motion.div>
        </div>
      </section>

      {/* Proyectos Grid */}
      <section className="py-20 bg-alabaster">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {proyectos.map((proyecto, index) => (
              <motion.div
                key={proyecto.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden group"
              >
                <Link to={`/proyectos/${proyecto.id}`} className="block">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={proyecto.imagen}
                      alt={proyecto.titulo}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-chestnut/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-8">
                    <h3 className="font-serif text-3xl text-chestnut font-bold mb-4">
                      {proyecto.titulo}
                    </h3>
                    <p className="font-sans text-darkLava/80 mb-6 leading-relaxed">
                      {proyecto.descripcion}
                    </p>
                    <div className="flex items-center space-x-2 text-chestnut font-sans font-medium group-hover:space-x-4 transition-all">
                      <span>Ver más detalles</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mensaje para futuros proyectos */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16 max-w-2xl mx-auto"
          >
            <p className="font-sans text-lg text-darkLava/70 italic">
              Más proyectos se irán agregando conforme vayamos avanzando en nuestros trabajos.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Proyectos;
