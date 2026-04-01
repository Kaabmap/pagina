import { MapPin, Building2, Users } from 'lucide-react';
import ProyectoDetalle from '../components/ProyectoDetalle';

import img1 from '../assets/img/Proyectos/ibero_santa_elena/ibero_santa_elena_1.png';
import img2 from '../assets/img/Proyectos/ibero_santa_elena/ibero_santa_elena_2.png';
import img3 from '../assets/img/Proyectos/ibero_santa_elena/ibero_santa_elena_3.png';
import img4 from '../assets/img/Proyectos/ibero_santa_elena/ibero_santa_elena_4.png';
import img5 from '../assets/img/Proyectos/ibero_santa_elena/ibero_santa_elena_5.png';
import img6 from '../assets/img/Proyectos/ibero_santa_elena/ibero_santa_elena_6.png';
import img7 from '../assets/img/Proyectos/ibero_santa_elena/ibero_santa_elena_7.png';
import img8 from '../assets/img/Proyectos/ibero_santa_elena/ibero_santa_elena_8.png';
import img9 from '../assets/img/Proyectos/ibero_santa_elena/ibero_santa_elena_9.png';

const config = {
  titulo: 'IBERO - Santa Elena',
  categoria: 'Educación e investigación',
  heroImg: img1,
  imagenes: [img1, img2, img3, img4, img5, img6, img7, img8, img9],
  infoCards: [
    { icon: MapPin, label: 'Locación', value: 'Rancho Santa Elena, Hidalgo' },
    { icon: Building2, label: 'Cliente', value: 'IBERO – Depto. de Economía / Lab. Geoespacial' },
    { icon: Users, label: 'Equipo', value: 'KAAB MAP' },
  ],
  contexto: [
    { titulo: '¿Quién nos contrató?', texto: 'La Universidad Iberoamericana, específicamente el Departamento de Economía a través del Laboratorio Geoespacial, nos invitó a colaborar en un proyecto que buscaba profesionalizar el uso de drones dentro de sus actividades académicas y de investigación.' },
    { titulo: '¿Qué necesitaban?', texto: 'El Laboratorio había adquirido un drone y requerían la capacitación necesaria para operarlo de manera óptima. Tomar decisiones sobre salud de cultivos, cambios en cobertura, manejo de recursos o identificación de riesgos requiere información espacial detallada, bien capturada y correctamente procesada.' },
    { titulo: 'El reto', texto: 'Fortalecer sus capacidades técnicas y operativas para desarrollar proyectos vinculados con análisis territorial, conservación del medio ambiente y agricultura de precisión con resultados confiables.' },
  ],
  etapas: [
    { titulo: 'Curso básico de manejo de drone M300', descripcion: 'Sesión teórica sobre marco legal aeronáutico, permisos, principios de vuelo, sensores y capacidades del equipo. El objetivo era construir una base sólida para comprender no solo cómo volar, sino por qué se toman ciertas decisiones técnicas en campo.' },
    { titulo: 'Práctica de vuelo inicial', descripcion: 'Vuelo supervisado abordando armado, revisión del equipo, despegue, maniobras básicas y aterrizaje seguro. Enfocada en generar confianza, reconocer protocolos y familiarizarse con las condiciones reales del entorno.' },
    { titulo: 'Práctica avanzada en área de conservación', descripcion: 'Vuelo LIDAR en un entorno real de conservación, aplicando todo lo aprendido: planificación de misiones, trazado de rutas, revisión de parámetros y toma de decisiones en campo.' },
    { titulo: 'Curso de almacenamiento, organización y procesamiento de datos', descripcion: 'Módulo dedicado al manejo responsable de la información. Flujos de trabajo para guardar, organizar y procesar los datos adquiridos, asegurando que el Laboratorio pudiera integrarlos en proyectos futuros.' },
  ],
  logros: [
    'Dar acompañamiento intensivo y personalizado',
    'Transmitir y promover la tolerancia, resolución de problemas, paciencia y organización',
    'Resolver dudas técnicas y operativas',
    'Entrega completa de productos procesados con exposición clara sobre cada insumo y su utilidad',
    'Mantener un enfoque pedagógico que explicaba la lógica detrás de cada paso',
    'Capacitar al equipo para que continúen utilizando el drone con mayor independencia y criterio técnico',
  ],
};

const ProyectoIberoSantaElena = () => <ProyectoDetalle config={config} />;
export default ProyectoIberoSantaElena;
