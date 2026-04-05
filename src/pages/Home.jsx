import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Quote } from 'lucide-react';
import heroImg from '../assets/img/Home/volandodron_recortada.jpg';
import logoPrincipal from '../assets/logos/Principal/KaabMap-Logos_Principal-Blanco.svg';
import imgProyectos from '../assets/img/Servicios/servicios-topografia.jpg';
import imgServicios from '../assets/img/Servicios/servicios-inspeccion.jpg';
import imgEcos from '../assets/img/Servicios/servicios-cartografia.jpg';
import imgColaboraciones from '../assets/img/Home/colaboraciones_logos.png';

const Home = () => {
  const testimonios = [
    {
      texto: "Se desenvuelven con una claridad exquisita. Resolvieron todas nuestras dudas tanto técnicas como operativas.",
      autor: "Departamento de Economía, IBERO"
    },
    {
      texto: "Me sentí escuchada y me dieron una solución enfocada a las necesidades de mi proyecto.",
      autor: "Sabi, Coordinadora Electoral Coyoacán"
    },
    {
      texto: "Se nota el dominio del tema. Manejan costos y entregas realistas en tiempos realistas.",
      autor: "Christian, Trabajador CONAVI"
    },
    {
      texto: "Se ganaron nuestra confianza absoluta.",
      autor: "Equipo INAH"
    }
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <img src={heroImg} alt="Kaab Map volando dron" className="w-full h-auto block" />
        <div className="absolute inset-0 bg-gradient-to-r from-darkLava/80 via-darkLava/50 to-transparent" />

        <div className="absolute inset-0 flex items-center z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <img src={logoPrincipal} alt="KAAB MAP" className="h-20 md:h-28 w-auto mb-2" />

                <div className="space-y-2">
                  <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-normal">
                    Hacemos
                  </h1>
                  <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-golden font-bold">
                    Propuestas Con-ciencia:
                  </h1>
                </div>
                
                <p className="font-serif text-lg md:text-xl text-white/90 leading-relaxed max-w-xl">
                  Estudiamos el territorio y el paisaje por medio del levantamiento de información
                  geoespacial con drones y ayudamos a que otros aprendan a hacerlo.
                </p>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/conocenos"
                    className="inline-flex items-center space-x-2 bg-chestnut hover:bg-chestnut/90 text-white px-8 py-4 rounded-lg font-sans font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <span>Conócenos</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
              </motion.div>
            </div>
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
              { title: 'Casos de Éxito', desc: 'Conoce nuestras colaboraciones', link: '/proyectos', color: '#914e2e', img: imgProyectos },
              { title: 'Servicios', desc: '¿Cómo podemos ayudarte?', link: '/servicios', color: '#9ea67a', img: imgServicios },
              { title: 'Ecos', desc: 'Nuestro blog', link: '/ecos', color: '#c7aa64', img: imgEcos },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-alabaster rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <Link to={item.link} className="block">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-darkLava/50 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-2xl font-bold mb-2" style={{ color: item.color }}>
                      {item.title}
                    </h3>
                    <p className="font-sans text-darkLava/70 mb-4">{item.desc}</p>
                    <span className="font-sans font-medium inline-flex items-center space-x-2 group-hover:space-x-3 transition-all" style={{ color: item.color }}>
                      <span>Explorar</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Colaboraciones */}
      <section className="py-16 bg-alabaster">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-chestnut font-bold mb-2">
              ¿Con quiénes hemos colaborado?
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <img
              src={imgColaboraciones}
              alt="Logos de colaboradores"
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 bg-darkLava">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl text-golden font-bold mb-4">
              Lo que dicen de nosotros
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {testimonios.map((test, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-sm"
              >
                <Quote className="w-7 h-7 text-golden/50 mb-3" />
                <p className="font-serif text-white/90 italic leading-relaxed mb-4 text-sm">
                  "{test.texto}"
                </p>
                <p className="font-sans text-golden text-xs font-medium">
                  — {test.autor}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
