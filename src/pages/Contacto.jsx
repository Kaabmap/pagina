import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Instagram, Linkedin, Send, CheckCircle, Copy, Check } from 'lucide-react';
import imgDron from '../assets/img/Contacto/dron.jpg';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = encodeURIComponent(`[Web] ${formData.asunto}`);
    const body = encodeURIComponent(
      `Nombre: ${formData.nombre}\nEmail: ${formData.email}\n\n${formData.mensaje}`
    );
    window.location.href = `mailto:geoespacial@kaabmap.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });
      setIsSubmitting(false);
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('geoespacial@kaabmap.com');
      setEmailCopied(true);
      setTimeout(() => {
        setEmailCopied(false);
      }, 2000);
    } catch (error) {
      console.error('Error al copiar:', error);
    }
  };

  const redesSociales = [
    {
      nombre: 'Instagram',
      url: 'https://www.instagram.com/kaabmap/',
      icono: Instagram,
      color: 'chestnut'
    },
    {
      nombre: 'LinkedIn',
      url: 'https://www.linkedin.com/company/kaab-map/',
      icono: Linkedin,
      color: 'grullo'
    }
  ];

  return (
    <div className="">
      {/* Hero Section con imagen */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={imgDron} alt="Contacto" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-chestnut/80" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white">
              Contáctanos
            </h1>
            <p className="font-sans text-base sm:text-lg md:text-xl text-white/90 px-2">
              Estamos aquí para ayudarte. Escríbenos y te responderemos pronto.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-20 bg-alabaster">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Formulario */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 sm:p-8 md:p-12 rounded-lg shadow-lg"
            >
              <h2 className="font-serif text-2xl sm:text-3xl text-chestnut font-bold mb-4 md:mb-6">
                Envíanos un mensaje
              </h2>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-grullo/10 border-2 border-grullo rounded-lg p-4 sm:p-6 text-center"
                >
                  <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-grullo mx-auto mb-3 sm:mb-4" />
                  <p className="font-sans text-base sm:text-lg text-darkLava font-medium">
                    ¡Mensaje enviado exitosamente!
                  </p>
                  <p className="font-sans text-sm text-darkLava/70 mt-2">
                    Te responderemos pronto.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
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
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-darkLava/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-chestnut focus:border-transparent font-sans text-sm sm:text-base"
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
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-darkLava/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-chestnut focus:border-transparent font-sans text-sm sm:text-base"
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
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-darkLava/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-chestnut focus:border-transparent font-sans text-sm sm:text-base"
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
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-darkLava/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-chestnut focus:border-transparent font-sans resize-none text-sm sm:text-base"
                      placeholder="Escribe tu mensaje aquí..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-chestnut hover:bg-chestnut/90 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-sans font-medium transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 text-sm sm:text-base"
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
              className="space-y-6 md:space-y-8"
            >
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl text-chestnut font-bold mb-4 md:mb-6">
                  Información de Contacto
                </h2>
                <p className="font-sans text-base sm:text-lg text-darkLava/80 leading-relaxed mb-6 md:mb-8">
                  Puedes contactarnos a través de cualquiera de estos medios. 
                  Estamos aquí para ayudarte con tus proyectos geoespaciales.
                </p>
              </div>

              {/* WhatsApp */}
              <motion.a
                href="https://wa.me/5215568161754"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center space-x-3 sm:space-x-4 bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-chestnut/10 rounded-full flex items-center justify-center group-hover:bg-chestnut transition-colors flex-shrink-0">
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-chestnut" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-sans text-xs sm:text-sm text-darkLava/60 mb-1">WhatsApp</p>
                  <p className="font-sans text-base sm:text-lg text-chestnut font-medium break-words">55 6816 1754</p>
                </div>
              </motion.a>

              {/* Email */}
              <motion.a
                href="mailto:geoespacial@kaabmap.com"
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center space-x-3 sm:space-x-4 bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group relative"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-chestnut/10 rounded-full flex items-center justify-center group-hover:bg-chestnut transition-colors flex-shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-chestnut" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-sans text-xs sm:text-sm text-darkLava/60 mb-1">Email</p>
                  <p className="font-sans text-sm sm:text-lg text-chestnut font-medium break-words">geoespacial@kaabmap.com</p>
                </div>
                <motion.button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    copyEmailToClipboard();
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-chestnut/10 hover:bg-chestnut/20 text-chestnut rounded-lg transition-all duration-300 flex-shrink-0 ml-2"
                  title={emailCopied ? "¡Copiado!" : "Copiar correo"}
                >
                  {emailCopied ? (
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  )}
                </motion.button>
              </motion.a>

              {/* Redes Sociales */}
              <div>
                <h3 className="font-serif text-lg sm:text-xl text-chestnut font-bold mb-3 sm:mb-4">
                  Síguenos en nuestras redes
                </h3>
                <div className="space-y-2 sm:space-y-3">
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
                        className="flex items-center space-x-3 sm:space-x-4 bg-white p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
                      >
                        <Icon 
                          className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform flex-shrink-0"
                          style={{
                            color: red.color === 'chestnut' ? '#914e2e' : '#9ea67a'
                          }}
                        />
                        <span className="font-sans text-sm sm:text-base text-darkLava font-medium">{red.nombre}</span>
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
