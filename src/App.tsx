import Hero from './components/Hero';
import './App.css';
import Header from './components/Header';
import { Introducao } from './components/Introducao';
import Acomodacoes from './components/Acomodacoes';
import Eventos from './components/Eventos';

function App() {
  return (
    <div className="bg-verde-800 font-sans min-h-screen">
      <Hero />
      <Header />
      <Introducao />
      <Acomodacoes />
      <Eventos />
    </div>
  );
}

export default App;
