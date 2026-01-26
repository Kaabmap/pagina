import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Calendar, Users } from 'lucide-react';

const ProyectoAcapulco = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-grullo/90 to-grullo/70 z-10" />
        <img
          src="https://via.placeholder.com/1920x1080/9ea67a/f0eee1?text=Proyecto+Acapulco"
          alt="Acapulco"
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
                Proyecto Acapulco
              </h1>
              <p className="font-sans text-xl text-white/90 max-w-2xl">
                Levantamiento topográfico y cartográfico en Acapulco, utilizando tecnología 
                de drones para mapeo costero.
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
              <MapPin className="w-8 h-8 text-grullo mb-4" />
              <h3 className="font-serif text-xl text-chestnut font-bold mb-2">Ubicación</h3>
              <p className="font-sans text-darkLava/80">Acapulco, Guerrero, México</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <Calendar className="w-8 h-8 text-grullo mb-4" />
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
              <Users className="w-8 h-8 text-grullo mb-4" />
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
                  El Proyecto Acapulco se centra en el levantamiento topográfico y cartográfico 
                  de la zona costera de este importante destino turístico mexicano. Utilizando 
                  tecnología de drones especializada, realizamos un mapeo detallado que permite 
                  un análisis preciso de la topografía costera, las características del terreno 
                  y los elementos geográficos relevantes.
                </p>
                <p>
                  Este proyecto es especialmente relevante para la planificación urbana, la 
                  gestión de riesgos costeros y el desarrollo sostenible de la región. 
                  Mediante técnicas avanzadas de fotogrametría y levantamientos LiDAR, 
                  generamos modelos digitales de elevación y mapas de alta precisión que 
                  sirven como herramientas fundamentales para la toma de decisiones.
                </p>
                <p>
                  Nuestro enfoque en Acapulco refleja nuestro compromiso con la aplicación 
                  responsable de la tecnología geoespacial, siempre considerando el impacto 
                  ambiental y social de nuestro trabajo, y trabajando en colaboración con 
                  las comunidades locales.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProyectoAcapulco;
