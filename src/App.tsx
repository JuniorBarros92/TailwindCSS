import Hero from './components/Hero';
import './App.css';
import Header from './components/Header';
import { Introducao } from './components/Introducao';
import Acomodacoes from './components/Acomodacoes';
import Eventos from './components/Eventos';
import Experiencias from './components/Experiencias';
import CicloNatural from './components/CicloNatural';
import Contato from './components/Contato';

function App() {
  return (
    <div className="bg-verde-800 font-sans min-h-screen">
      <Hero />
      <Header />
      <Introducao />
      <Acomodacoes />
      <Eventos />
      <Experiencias />
      <CicloNatural />
      <Contato />
    </div>
  );
}

export default App;
