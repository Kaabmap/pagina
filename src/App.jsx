import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Conocenos from './pages/Conocenos';
import Proyectos from './pages/Proyectos';
import ProyectoIberoSantaElena from './pages/ProyectoIberoSantaElena';
import Servicios from './pages/Servicios';
import Ecos from './pages/Ecos';
import Contacto from './pages/Contacto';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/conocenos" element={<Conocenos />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/proyectos/ibero-santa-elena" element={<ProyectoIberoSantaElena />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/ecos" element={<Ecos />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
