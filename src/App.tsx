import Hero from './components/Hero';
import './App.css';
import Header from './components/Header';
import { Introducao } from './components/Introducao';

function App() {
  return (
    <div className="bg-verde-800 font-sans min-h-screen">
      <Hero />
      <Header />
      <Introducao />
    </div>
  );
}

export default App;
