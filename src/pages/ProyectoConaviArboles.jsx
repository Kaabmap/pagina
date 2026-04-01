import { MapPin, Building2, Users } from 'lucide-react';
import ProyectoDetalle from '../components/ProyectoDetalle';

import img1 from '../assets/img/Proyectos/lidar_ambiental/lidar_ambiental_1.png';
import img2 from '../assets/img/Proyectos/lidar_ambiental/lidar_ambiental_2.png';
import img3 from '../assets/img/Proyectos/lidar_ambiental/lidar_ambiental_3.png';
import img4 from '../assets/img/Proyectos/lidar_ambiental/lidar_ambiental_4.png';
import img5 from '../assets/img/Proyectos/lidar_ambiental/lidar_ambiental_5.png';
import img6 from '../assets/img/Proyectos/lidar_ambiental/lidar_ambiental_6.png';
import img7 from '../assets/img/Proyectos/lidar_ambiental/lidar_ambiental_7.png';
import img8 from '../assets/img/Proyectos/lidar_ambiental/lidar_ambiental_8.png';
import img9 from '../assets/img/Proyectos/lidar_ambiental/lidar_ambiental_9.png';
import img10 from '../assets/img/Proyectos/lidar_ambiental/lidar_ambiental_10.png';
import img11 from '../assets/img/Proyectos/lidar_ambiental/lidar_ambiental_11.png';

const config = {
  titulo: 'CONAVI - Árboles',
  categoria: 'Desarrollo urbano y ambiental',
  heroImg: img1,
  imagenes: [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11],
  infoCards: [
    { icon: MapPin, label: 'Locación', value: 'Sonora, México' },
    { icon: Building2, label: 'Cliente', value: 'Colaborador vinculado a proyectos CONAVI' },
    { icon: Users, label: 'Equipo', value: 'KAAB MAP (remoto)' },
  ],
  contexto: [
    { titulo: '¿Quién nos contrató?', texto: 'Un colaborador vinculado a proyectos de vivienda para CONAVI, encargado de desarrollar un nuevo proyecto habitacional en Sonora.' },
    { titulo: '¿Qué necesitaba?', texto: 'Contar con información precisa sobre el arbolado existente dentro del predio para planificar adecuadamente el desarrollo de viviendas y cumplir con requerimientos ambientales. Necesitaba saber cuántos árboles serían impactados, qué características tenían y qué acciones serían necesarias.' },
    { titulo: 'El reto', texto: 'Caracterizar cada árbol del predio de forma precisa a partir de datos remotos, obteniendo variables clave como altura, diámetro y extensión de copa. La información debía ser lo suficientemente estructurada para integrarse en estudios técnicos y procesos de evaluación ambiental.' },
  ],
  etapas: [
    { titulo: 'Procesamiento de nube de puntos LiDAR', descripcion: 'Partimos de un levantamiento aéreo con dron y sensor LiDAR para generar una nube de puntos de alta densidad, procesada mediante posicionamiento, orientación, filtración de ruido y clasificación de terreno y vegetación.' },
    { titulo: 'Generación de modelos', descripcion: 'A partir de la nube procesada, generamos Modelo Digital de Terreno (MDT), Modelo Digital de Superficie (MDS), curvas de nivel y modelos de altura de vegetación.' },
    { titulo: 'Desarrollo de rutinas personalizadas en Google Colab', descripcion: 'Desarrollamos rutinas personalizadas para identificar y caracterizar cada árbol de forma automatizada, obteniendo ubicación de cada individuo, altura y diámetro estimado, y delimitación de copas.' },
  ],
  logros: [
    'Cuantificar el arbolado existente con precisión',
    'Integrar datos LiDAR con análisis automatizado',
    'Sustentar decisiones técnicas ante requerimientos ambientales',
    'Traducir información técnica en insumos útiles para planeación',
    'Ejecutar todo el análisis de forma remota, optimizando tiempos y costos',
    'Presentar un desglose de costos claro',
  ],
};

const ProyectoConaviArboles = () => <ProyectoDetalle config={config} />;
export default ProyectoConaviArboles;
