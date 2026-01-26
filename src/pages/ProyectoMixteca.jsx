import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Calendar, Users } from 'lucide-react';

const ProyectoMixteca = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-chestnut/90 to-chestnut/70 z-10" />
        <img
          src="https://via.placeholder.com/1920x1080/914e2e/f0eee1?text=Proyecto+Mixteca"
          alt="Mixteca"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link
                to="/proyectos"
                className="inline-flex items-center space-x-2 text-white mb-6 hover:text-golden transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-sans">Volver a Proyectos</span>
              </Link>
              <h1 className="font-serif text-5xl md:text-6xl text-white font-bold mb-4">
                Proyecto Mixteca
              </h1>
              <p className="font-sans text-xl text-white/90 max-w-2xl">
                Levantamiento geoespacial en la región Mixteca, enfocado en el análisis 
                territorial y desarrollo sostenible.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detalles del Proyecto */}
      <section className="py-20 bg-alabaster">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <MapPin className="w-8 h-8 text-chestnut mb-4" />
              <h3 className="font-serif text-xl text-chestnut font-bold mb-2">Ubicación</h3>
              <p className="font-sans text-darkLava/80">Región Mixteca, México</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <Calendar className="w-8 h-8 text-chestnut mb-4" />
              <h3 className="font-serif text-xl text-chestnut font-bold mb-2">Año</h3>
              <p className="font-sans text-darkLava/80">2024</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <Users className="w-8 h-8 text-chestnut mb-4" />
              <h3 className="font-serif text-xl text-chestnut font-bold mb-2">Equipo</h3>
              <p className="font-sans text-darkLava/80">KAAB MAP</p>
            </motion.div>
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 md:p-12 rounded-lg shadow-lg"
            >
              <h2 className="font-serif text-3xl text-chestnut font-bold mb-6">
                Descripción del Proyecto
              </h2>
              <div className="space-y-4 font-sans text-lg text-darkLava/80 leading-relaxed">
                <p>
                  El Proyecto Mixteca representa un esfuerzo integral de levantamiento 
                  geoespacial en una de las regiones más importantes de México. Utilizando 
                  tecnología de drones de última generación, realizamos un mapeo detallado 
                  del territorio que permite un análisis profundo de las características 
                  geográficas, topográficas y ambientales de la zona.
                </p>
                <p>
                  Este proyecto se enfoca en el desarrollo sostenible, considerando tanto 
                  las necesidades de las comunidades locales como la preservación del 
                  medio ambiente. A través de la fotogrametría y el uso de sistemas de 
                  información geográfica (SIG), generamos datos precisos que sirven 
                  como base para la planificación territorial y la toma de decisiones 
                  informadas.
                </p>
                <p>
                  Nuestro trabajo en la región Mixteca refleja nuestro compromiso con 
                  la equidad, la responsabilidad y la conciencia ambiental, principios 
                  fundamentales que guían cada uno de nuestros proyectos.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProyectoMixteca;
