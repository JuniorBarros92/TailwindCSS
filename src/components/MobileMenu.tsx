import { useState } from 'react';

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* BOTÃO */}
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden flex items-center gap-3 cursor-pointer bg-green-400 text-green-900 py-2 px-4 rounded-full z-50 relative"
        aria-label="Abrir menu"
        aria-expanded={open}
      >
        Menu
        {/* HAMBURGER */}
        <div className="w-5 h-4 flex flex-col justify-between">
          <span
            className={`h-0.5 bg-green-900 rounded transition-all duration-300 ${
              open ? 'rotate-45 translate-y-1.5' : ''
            }`}
          />
          <span
            className={`h-0.5 bg-green-900 rounded transition-all duration-300 ${
              open ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`h-0.5 bg-green-900 rounded transition-all duration-300 ${
              open ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          />
        </div>
      </button>

      {/* MENU */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          open ? 'visible' : 'invisible'
        }`}
      >
        {/* OVERLAY */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* SIDEBAR */}
        <nav
          className={`absolute left-0 top-0 h-full w-64 bg-green-900 text-white p-6 flex flex-col gap-6 transform transition-transform duration-300 ${
            open ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <a href="#home" className="hover:text-green-400">
            Home
          </a>
          <a href="#eventos" className="hover:text-green-400">
            Sobre
          </a>
          <a href="#experiencias" className="hover:text-green-400">
            Serviços
          </a>
          <a href="#contato" className="hover:text-green-400">
            Contato
          </a>
        </nav>
      </div>
    </div>
  );
}
