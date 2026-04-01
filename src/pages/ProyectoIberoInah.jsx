import { MapPin, Building2, Users } from 'lucide-react';
import ProyectoDetalle from '../components/ProyectoDetalle';

import img1 from '../assets/img/Proyectos/ibero_inah/ibero_inah_1.png';
import img2 from '../assets/img/Proyectos/ibero_inah/ibero_inah_2.png';
import img3 from '../assets/img/Proyectos/ibero_inah/ibero_inah_3.png';
import img4 from '../assets/img/Proyectos/ibero_inah/ibero_inah_4.png';
import img5 from '../assets/img/Proyectos/ibero_inah/ibero_inah_5.png';
import img6 from '../assets/img/Proyectos/ibero_inah/ibero_inah_6.png';
import img7 from '../assets/img/Proyectos/ibero_inah/ibero_inah_7.png';
import img8 from '../assets/img/Proyectos/ibero_inah/ibero_inah_8.png';

const config = {
  titulo: "IBERO/INAH - Ngi'wa",
  categoria: 'Educación e investigación',
  heroImg: img1,
  imagenes: [img1, img2, img3, img4, img5, img6, img7, img8],
  infoCards: [
    { icon: MapPin, label: 'Locación', value: 'Reserva de la Biosfera Tehuacán–Cuicatlán' },
    { icon: Building2, label: 'Cliente', value: 'IBERO / Instituto Nacional de Antropología e Historia' },
    { icon: Users, label: 'Equipo', value: 'KAAB MAP' },
  ],
  contexto: [
    { titulo: '¿Quién nos contrató?', texto: 'Los buenos resultados y la relación construida durante proyectos anteriores con la Universidad Iberoamericana abrieron la puerta a un convenio con el Instituto Nacional de Antropología e Historia (INAH), gestionado por Alejandra como puente institucional.' },
    { titulo: '¿Qué necesitaban?', texto: 'Acompañamiento integral durante el trabajo de campo, cuyo objetivo principal era realizar un vuelo LIDAR para apoyar investigaciones arqueológicas.' },
    { titulo: 'El reto', texto: 'Generar información precisa que permitiera al equipo del INAH priorizar áreas de exploración y optimizar sus esfuerzos durante las prácticas arqueológicas.' },
  ],
  etapas: [
    { titulo: 'Planificación técnica de vuelo', descripcion: 'Definimos el punto de despegue óptimo y la ruta más eficiente para el vuelo LIDAR tomando en cuenta la topografía y restricciones de la zona. La Reserva cuenta con una geografía compleja, por lo que era esencial maximizar la cobertura, reducir riesgos operativos y obtener datos con la resolución necesaria para detectar posibles estructuras arqueológicas.' },
    { titulo: 'Ejecución del vuelo LIDAR', descripcion: 'La precisión espacial era indispensable para evitar retrabajos y garantizar que la información final tuviera valor científico. Identificamos patrones, estructuras y anomalías que pudieran corresponder a vestigios arqueológicos.' },
    { titulo: 'Asesoría técnica integral', descripcion: 'Brindamos asesoría técnica en campo para orientar la toma de decisiones en tiempo real y garantizar la calidad de los datos obtenidos, apoyando en decisiones logísticas y buscando claridad en la interpretación preliminar de los datos.' },
  ],
  logros: [
    'Dar acompañamiento durante todas las etapas del proceso',
    'Adaptarnos a condiciones cambiantes',
    'Mantener un ritmo colaborativo entre equipos multidisciplinarios',
    'Destacar los alcances del estudio y los hallazgos preliminares',
    'Presentar resultados en el XX Encuentro de Geografías de América Latina y el Caribe',
    'Reforzar la relevancia del uso de geotecnologías en la arqueología contemporánea',
  ],
};

const ProyectoIberoInah = () => <ProyectoDetalle config={config} />;
export default ProyectoIberoInah;
