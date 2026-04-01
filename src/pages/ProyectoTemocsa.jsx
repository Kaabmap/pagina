import { MapPin, Building2, Users } from 'lucide-react';
import ProyectoDetalle from '../components/ProyectoDetalle';

import img1 from '../assets/img/Proyectos/capacitacion_lidar/capacitacion_lidar_1.png';
import img2 from '../assets/img/Proyectos/capacitacion_lidar/capacitacion_lidar_2.png';
import img3 from '../assets/img/Proyectos/capacitacion_lidar/capacitacion_lidar_3.png';
import img4 from '../assets/img/Proyectos/capacitacion_lidar/capacitacion_lidar_4.png';
import img5 from '../assets/img/Proyectos/capacitacion_lidar/capacitacion_lidar_5.png';
import img6 from '../assets/img/Proyectos/capacitacion_lidar/capacitacion_lidar_6.png';
import img7 from '../assets/img/Proyectos/capacitacion_lidar/capacitacion_lidar_7.png';

const config = {
  titulo: 'TEMOCSA - Curso',
  categoria: 'Capacitación técnica especializada',
  heroImg: img1,
  imagenes: [img1, img2, img3, img4, img5, img6, img7],
  infoCards: [
    { icon: MapPin, label: 'Locación', value: 'México' },
    { icon: Building2, label: 'Cliente', value: 'TEMOCSA – Constructora mexicana' },
    { icon: Users, label: 'Equipo', value: 'KAAB MAP' },
  ],
  contexto: [
    { titulo: '¿Quién nos contrató?', texto: 'La empresa TEMOCSA, una constructora mexicana enfocada en la gestión y ejecución de proyectos de ingeniería, interesada en integrar nuevas tecnologías geoespaciales a sus procesos.' },
    { titulo: '¿Qué necesitaban?', texto: 'Capacitar a su equipo técnico en el uso de drones con tecnología LiDAR, no solo a nivel operativo, sino entendiendo su aplicación en proyectos reales. Buscaban reducir la dependencia de terceros e incorporar nuevas capacidades técnicas internas.' },
    { titulo: 'El reto', texto: 'Diseñar una capacitación que combinara teoría y práctica, permitiendo que el equipo no solo aprendiera a operar el dron, sino a integrar esta tecnología dentro de sus flujos de trabajo en ingeniería.' },
  ],
  etapas: [
    { titulo: 'Curso integral de dron M300', descripcion: 'Diseñamos una capacitación que combinara teoría y práctica abordando: normativa y consideraciones operativas, flujos de trabajo en levantamientos geoespaciales, fundamentos de fotogrametría y tecnología LiDAR, planeación de misiones, y prácticas de vuelo y adquisición de datos.' },
  ],
  logros: [
    'Adaptar la capacitación a un contexto real de ingeniería',
    'Transmitir y promover conciencia, ética profesional, tolerancia, resolución de problemas, paciencia y colaboración',
    'Resolver dudas técnicas y operativas',
    'Fortalecer las capacidades internas del equipo',
    'Combinar teoría, práctica y aplicación directa',
    'Capacitar al equipo para que continúen utilizando el drone con mayor independencia y criterio técnico',
  ],
};

const ProyectoTemocsa = () => <ProyectoDetalle config={config} />;
export default ProyectoTemocsa;
