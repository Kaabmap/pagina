/**
 * Artículos base de Ecos (versionados en código).
 * Las entradas añadidas desde la web se guardan en localStorage y se fusionan en la lista.
 */

export const POSTS_SEED = [
  {
    id: 'seed-cooperativa',
    slug: 'que-es-una-cooperativa',
    titulo: '¿Qué es una cooperativa?',
    resumen:
      'Las cooperativas son organizaciones democráticas que pertenecen a sus miembros, quienes las controlan y dirigen. Aquí explicamos cómo funcionan y por qué importan para un trabajo geoespacial más justo.',
    fecha: '2024-01-15',
    autor: 'KAAB MAP',
    categoria: 'Conceptos',
    imagen:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    blocks: [
      {
        type: 'p',
        text: 'Una cooperativa es una asociación autónoma de personas que se unen voluntariamente para afrontar sus necesidades y aspiraciones económicas, sociales y culturales mediante una empresa de propiedad conjunta y gestión democrática. A diferencia de una sociedad mercantil clásica, el capital no manda: lo hacen las personas que trabajan o usan los servicios de la cooperativa, con reglas claras de una persona, un voto en la asamblea.',
      },
      {
        type: 'h2',
        text: 'Democracia económica y reparto más equitativo',
      },
      {
        type: 'p',
        text: 'En el modelo cooperativo, las utilidades se reparten de acuerdo con el trabajo aportado o el uso de la empresa, no solo según quién invirtió más dinero al inicio. Eso favorece estabilidad laboral, reduce la brecha entre dirección y equipo técnico y alinea los objetivos del proyecto con el bienestar de quienes lo construyen día a día.',
      },
      {
        type: 'img',
        src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
        alt: 'Equipo reunido alrededor de una mesa colaborando',
        caption: 'La toma de decisiones colectiva es el corazón del modelo cooperativo.',
      },
      {
        type: 'h2',
        text: 'Valores que guían el trabajo cotidiano',
      },
      {
        type: 'p',
        text: 'Los principios cooperativos —ayuda mutua, responsabilidad, democracia, igualdad, equidad y solidaridad— no son un adorno: se traducen en contratos claros, transparencia en los proyectos, cuidado del territorio y respeto entre quienes participan en levantamientos, análisis y entregables. En un sector técnico como el geoespacial, eso se refleja en documentación compartida, revisiones por pares y decisiones abiertas sobre prioridades.',
      },
      {
        type: 'img',
        src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
        alt: 'Espacio de trabajo luminoso y organizado',
        caption: 'Un entorno de trabajo cooperativo apuesta por la transparencia y el reparto justo de tareas.',
      },
      {
        type: 'h2',
        text: 'Cooperativas y territorio',
      },
      {
        type: 'p',
        text: 'Muchas cooperativas tienen un vínculo fuerte con el territorio: cartografía participativa, estudios ambientales o apoyo a comunidades. El enfoque cooperativo encaja bien con proyectos que requieren diálogo prolongado con actores locales, porque la estructura incentiva escuchar, acordar y sostener relaciones a largo plazo, más allá del cierre formal de un contrato.',
      },
      {
        type: 'p',
        text: 'En KAAB MAP entendemos la cooperativa como marco para hacer geografía y tecnología con criterios de justicia social y sostenibilidad. Si te interesa colaborar o conocer más sobre cómo trabajamos, puedes escribirnos desde la sección de contacto.',
      },
    ],
  },
];
