import Hero from './components/Hero';
import './App.css';
import Header from './components/Header';
import { Introducao } from './components/Introducao';
import Acomodacoes from './components/Acomodacoes';
import Eventos from './components/Eventos';
import Experiencias from './components/Experiencias';

function App() {
  return (
    <div className="bg-verde-800 font-sans min-h-screen">
      <Hero />
      <Header />
      <Introducao />
      <Acomodacoes />
      <Eventos />
      <Experiencias />
    </div>
  );
}

export default App;
