import { MapPin, Building2, Users } from 'lucide-react';
import ProyectoDetalle from '../components/ProyectoDetalle';

import img1 from '../assets/img/Proyectos/analisis_electoral/analisis_electoral_1.png';
import img2 from '../assets/img/Proyectos/analisis_electoral/analisis_electoral_2.png';
import img3 from '../assets/img/Proyectos/analisis_electoral/analisis_electoral_3.png';
import img4 from '../assets/img/Proyectos/analisis_electoral/analisis_electoral_4.png';
import img5 from '../assets/img/Proyectos/analisis_electoral/analisis_electoral_5.png';
import img6 from '../assets/img/Proyectos/analisis_electoral/analisis_electoral_6.png';
import img7 from '../assets/img/Proyectos/analisis_electoral/analisis_electoral_7.png';
import img8 from '../assets/img/Proyectos/analisis_electoral/analisis_electoral_8.png';

const config = {
  titulo: 'Análisis Territorial Electoral',
  categoria: 'Planeación y análisis socio-territorial',
  heroImg: img1,
  imagenes: [img1, img2, img3, img4, img5, img6, img7, img8],
  infoCards: [
    { icon: MapPin, label: 'Locación', value: 'Coyoacán, CDMX' },
    { icon: Building2, label: 'Cliente', value: 'Coordinadora Electoral en Coyoacán' },
    { icon: Users, label: 'Equipo', value: 'KAAB MAP' },
  ],
  contexto: [
    { titulo: '¿Quién nos contrató?', texto: 'Una colaboradora del ámbito político en Coyoacán, con experiencia en coordinación electoral y vinculación territorial, que buscaba fortalecer la toma de decisiones dentro de su equipo de campaña.' },
    { titulo: '¿Qué necesitaba?', texto: 'Contar con información territorial clara y estructurada para entender el alcance real de su operación en campo. Su objetivo era transformar datos dispersos en una herramienta útil para la estrategia electoral.' },
    { titulo: 'El reto', texto: 'Medir con precisión el alcance territorial de los líderes de campaña: ¿A cuántas personas estaba llegando realmente cada uno? ¿En qué zonas había mayor o menor presencia?' },
  ],
  etapas: [
    { titulo: 'Mapa interactivo en Google Maps', descripcion: 'Desarrollamos un mapa interactivo que integraba información electoral clave, permitiendo visualizar límites administrativos y secciones electorales, identificar la cobertura territorial por líder de campaña, y analizar la distribución espacial del esfuerzo político.' },
    { titulo: 'Programación de bot', descripcion: 'Implementamos un proceso automatizado para la extracción y estructuración de datos desde fuentes oficiales, asegurando información completa, actualizada y con precisión en la ubicación geográfica (coordenadas).' },
  ],
  logros: [
    'Escuchar y traducir una necesidad política en un problema territorial claro',
    'Integrar tecnología, análisis y visualización en una sola solución',
    'Identificar zonas con baja cobertura',
    'Demostrar el valor de la cartografía como herramienta estratégica',
    'Optimizar la toma de decisiones en campo',
  ],
};

const ProyectoAnalisisElectoral = () => <ProyectoDetalle config={config} />;
export default ProyectoAnalisisElectoral;
