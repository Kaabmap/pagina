import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen bg-alabaster texture-bg flex items-center relative overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-chestnut font-normal">
                  Hacemos
                </h1>
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-chestnut font-bold">
                  Propuestas Con-ciencia:
                </h1>
              </div>
              
              <p className="font-serif text-lg md:text-xl text-chestnut/80 leading-relaxed max-w-xl">
                Estudiamos el territorio y el paisaje por medio del levantamiento de información
                geoespacial con drones y ayudamos a que otros aprendan a hacerlo.
              </p>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/conocenos"
                  className="inline-flex items-center space-x-2 bg-jellyBean hover:bg-jellyBean/90 text-white px-8 py-4 rounded-lg font-sans font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <span>Conócenos</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Illustration Area */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[500px] lg:h-[600px]"
            >
              {/* Clouds */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-10 z-10"
              >
                <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
                  <path d="M20 40 Q10 20 30 20 Q40 10 50 20 Q60 10 70 20 Q80 10 90 20 Q110 20 100 40 Q110 60 90 60 Q80 70 70 60 Q60 70 50 60 Q40 70 30 60 Q10 60 20 40 Z" fill="white" opacity="0.9"/>
                </svg>
              </motion.div>

              {/* Drone */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 right-20 z-20"
              >
                <div className="relative">
                  <div className="w-16 h-16 bg-darkLava rounded-lg flex items-center justify-center">
                    <div className="w-12 h-12 bg-grullo rounded"></div>
                  </div>
                  {/* Signal circles */}
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 border-2 border-jellyBean rounded-full"
                  />
                  <motion.div
                    animate={{ scale: [1, 2, 1], opacity: [0.3, 0, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    className="absolute inset-0 border-2 border-jellyBean rounded-full"
                  />
                </div>
              </motion.div>

              {/* Landscape Illustration */}
              <div className="absolute bottom-0 left-0 right-0 h-[300px]">
                {/* Mountains */}
                <svg width="100%" height="100%" viewBox="0 0 800 300" preserveAspectRatio="none">
                  <path d="M0,300 L0,200 Q100,150 200,180 T400,160 T600,140 T800,120 L800,300 Z" fill="#4A513A" opacity="0.8"/>
                  <path d="M0,300 L0,220 Q150,180 300,200 T600,180 T800,160 L800,300 Z" fill="#828D4D" opacity="0.9"/>
                </svg>
              </div>

              {/* People Silhouettes */}
              <div className="absolute bottom-20 right-10 flex items-end space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="w-8 h-12 bg-chestnut rounded-t-full"
                    style={{ height: `${40 + i * 8}px` }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-chestnut font-bold mb-4">
              Nuestro Trabajo
            </h2>
            <p className="font-sans text-lg text-darkLava/70 max-w-2xl mx-auto">
              Exploramos el territorio con tecnología de vanguardia y conciencia ambiental
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Proyectos', desc: 'Conoce nuestros trabajos', link: '/proyectos', color: '#914e2e' },
              { title: 'Servicios', desc: 'Lo que ofrecemos', link: '/servicios', color: '#9ea67a' },
              { title: 'Ecos', desc: 'Nuestro blog', link: '/ecos', color: '#c7aa64' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-alabaster p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link to={item.link} className="block">
                  <h3 className="font-serif text-2xl font-bold mb-3" style={{ color: item.color }}>
                    {item.title}
                  </h3>
                  <p className="font-sans text-darkLava/70 mb-4">{item.desc}</p>
                  <span className="font-sans font-medium inline-flex items-center space-x-1" style={{ color: item.color }}>
                    <span>Explorar</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
