import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, Youtube, Linkedin, Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Nota: Para usar EmailJS, necesitas configurar tu cuenta y obtener las credenciales
    // Por ahora, solo simulamos el envío
    try {
      // await emailjs.send(
      //   'YOUR_SERVICE_ID',
      //   'YOUR_TEMPLATE_ID',
      //   formData,
      //   'YOUR_PUBLIC_KEY'
      // );
      
      // Simulación de envío
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSubmitted(true);
      setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error al enviar:', error);
      alert('Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const redesSociales = [
    {
      nombre: 'Instagram',
      url: 'https://instagram.com',
      icono: Instagram,
      color: 'chestnut'
    },
    {
      nombre: 'YouTube',
      url: 'https://youtube.com',
      icono: Youtube,
      color: 'jellyBean'
    },
    {
      nombre: 'LinkedIn',
      url: 'https://linkedin.com',
      icono: Linkedin,
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
              Contáctanos
            </h1>
            <p className="font-sans text-xl text-white/90">
              Estamos aquí para ayudarte. Escríbenos y te responderemos pronto.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-alabaster">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Formulario */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 md:p-12 rounded-lg shadow-lg"
            >
              <h2 className="font-serif text-3xl text-chestnut font-bold mb-6">
                Envíanos un mensaje
              </h2>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-grullo/10 border-2 border-grullo rounded-lg p-6 text-center"
                >
                  <CheckCircle className="w-12 h-12 text-grullo mx-auto mb-4" />
                  <p className="font-sans text-lg text-darkLava font-medium">
                    ¡Mensaje enviado exitosamente!
                  </p>
                  <p className="font-sans text-sm text-darkLava/70 mt-2">
                    Te responderemos pronto.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="nombre" className="block font-sans text-sm font-medium text-darkLava mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-darkLava/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-chestnut focus:border-transparent font-sans"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block font-sans text-sm font-medium text-darkLava mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-darkLava/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-chestnut focus:border-transparent font-sans"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="asunto" className="block font-sans text-sm font-medium text-darkLava mb-2">
                      Asunto
                    </label>
                    <input
                      type="text"
                      id="asunto"
                      name="asunto"
                      value={formData.asunto}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-darkLava/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-chestnut focus:border-transparent font-sans"
                      placeholder="¿En qué podemos ayudarte?"
                    />
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block font-sans text-sm font-medium text-darkLava mb-2">
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 border border-darkLava/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-chestnut focus:border-transparent font-sans resize-none"
                      placeholder="Escribe tu mensaje aquí..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-chestnut hover:bg-chestnut/90 text-white px-8 py-4 rounded-lg font-sans font-medium transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Enviar Mensaje</span>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Información de Contacto */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-serif text-3xl text-chestnut font-bold mb-6">
                  Información de Contacto
                </h2>
                <p className="font-sans text-lg text-darkLava/80 leading-relaxed mb-8">
                  Puedes contactarnos a través de cualquiera de estos medios. 
                  Estamos aquí para ayudarte con tus proyectos geoespaciales.
                </p>
              </div>

              {/* Teléfono */}
              <motion.a
                href="tel:+521234567890"
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-chestnut/10 rounded-full flex items-center justify-center group-hover:bg-chestnut transition-colors">
                  <Phone className="w-6 h-6 text-chestnut" />
                </div>
                <div>
                  <p className="font-sans text-sm text-darkLava/60 mb-1">Teléfono</p>
                  <p className="font-sans text-lg text-chestnut font-medium">+52 123 456 7890</p>
                </div>
              </motion.a>

              {/* Email */}
              <motion.a
                href="mailto:contacto@kaabmap.com"
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-chestnut/10 rounded-full flex items-center justify-center group-hover:bg-chestnut transition-colors">
                  <Mail className="w-6 h-6 text-chestnut" />
                </div>
                <div>
                  <p className="font-sans text-sm text-darkLava/60 mb-1">Email</p>
                  <p className="font-sans text-lg text-chestnut font-medium">contacto@kaabmap.com</p>
                </div>
              </motion.a>

              {/* Redes Sociales */}
              <div>
                <h3 className="font-serif text-xl text-chestnut font-bold mb-4">
                  Síguenos en nuestras redes
                </h3>
                <div className="space-y-3">
                  {redesSociales.map((red, index) => {
                    const Icon = red.icono;
                    return (
                      <motion.a
                        key={red.nombre}
                        href={red.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05, x: 10 }}
                        className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
                      >
                        <Icon 
                          className="w-6 h-6 group-hover:scale-110 transition-transform"
                          style={{
                            color: red.color === 'chestnut' ? '#914e2e' :
                              red.color === 'jellyBean' ? '#dd6657' :
                              '#9ea67a'
                          }}
                        />
                        <span className="font-sans text-darkLava font-medium">{red.nombre}</span>
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;
