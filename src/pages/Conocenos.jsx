import { motion } from 'framer-motion';
import { useState } from 'react';

const Conocenos = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  // Información de la cooperativa basada en el PDF
  const cooperativaInfo = {
    historia: {
      titulo: "Nacimos de la amistad",
      texto: "Nos conocimos en el trabajo y, desde el primer momento que colaboramos, hicimos match! Nos complementamos muy bien y nos damos mucha fuerza mutua, lo que nos ayuda a darnos la oportunidad de hacer cosas que solas no nos atreveríamos o dudaríamos en hacer. Nunca hemos peleado, porque para nosotras la comunicación es esencial. Por cosas de la vida renunciamos a nuestro trabajo y decidimos forjar nuestro propio camino de la mano de nuestros socios y amigos. Somos un equipo unido: andamos al pie del cañón apoyándonos, compartiendo lo que sabemos e investigando lo que no, para resolverlo entre todos."
    },
    manifiesto: {
      titulo: "Hacemos propuestas con-ciencia",
      texto: "Con fundamento, con responsabilidad, con equidad, pero por sobre todo, con pasión por escuchar, aprender y cuidar de nuestro entorno."
    },
    valores: [
      {
        titulo: "Conciencia",
        descripcion: "Reconocemos el gran impacto que tienen nuestras decisiones y acciones sobre los demás y sobre nuestro territorio, así que la capacidad de provocar un cambio positivo está en nuestras manos."
      },
      {
        titulo: "Pasión",
        descripcion: "La conexión tan profunda que tenemos con la Tierra y con nuestras raíces es una de las razones que nos hace amar lo que hacemos."
      },
      {
        titulo: "Colaboración",
        descripcion: "Para nosotras el conocimiento es poder, pero como no lo sabemos todo y nunca se termina de aprender, estamos más que dispuestas a nutrir y ampliar nuestra perspectiva."
      },
      {
        titulo: "Equidad",
        descripcion: "Como iniciativa liderada por mujeres, buscamos inspirar, educar y colaborar con aquellos que impulsen la equidad de género en el ámbito tecnológico y geográfico."
      }
    ]
  };

  // Integrantes (ejemplo - se pueden agregar más)
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
              Conócenos
            </h1>
            <p className="font-sans text-xl text-white/90">
              Somos un equipo unido que busca construir nuevos mapas y caminos 
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                <div className="relative h-80 overflow-hidden">
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
        </div>
      </section>
    </div>
  );
};

export default Conocenos;
