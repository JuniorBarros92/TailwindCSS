import React from 'react';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';

type Link = {
  nome: string;
  url: string;
  icon: React.ReactNode;
};

const links: Link[] = [
  { nome: 'Instagram', url: '#', icon: <FaInstagram size={18} /> },
  { nome: 'LinkedIn', url: '#', icon: <FaLinkedin size={18} /> },
  { nome: 'Facebook', url: '#', icon: <FaFacebook size={18} /> },
];

const Footer = () => {
  const ano = new Date().getFullYear();

  return (
    <footer className="container pb-8">
      <div className="bg-verde-900 grid gap-8 lg:grid-cols-2 mb-8 rounded-2xl p-6 sm:p-12">
        {/* INFO */}
        <div className="flex gap-12 max-sm:flex-col max-sm:gap-4">
          <div>
            <h3 className="text-white font-serif text-xl mb-4">Endereço</h3>
            <p className="text-gray-400">
              Rua da Mata, 123 <br />
              Floresta Nacional <br />
              Rio de Janeiro, RJ
            </p>
          </div>

          <div>
            <h3 className="text-white font-serif text-xl mb-4">Contato</h3>
            <p className="text-gray-400">
              contato@forest.com <br />
              +55 21 9999-9999
            </p>
          </div>
        </div>

        {/* LOGO */}
        <div className="lg:justify-self-end">
          <img className="mb-4" src="/img/forest.svg" alt="Forest" />
          <p className="text-gray-400">Conecte-se com a natureza</p>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="text-gray-400 flex items-center justify-between gap-8 text-sm max-sm:flex-col-reverse">
        <p>© {ano} Forest. Todos os direitos reservados.</p>

        <ul className="flex gap-8">
          {links.map((link) => (
            <li key={link.nome}>
              <a
                href={link.url}
                className="flex items-center gap-2 hover:text-verde-300 hover:scale-105 transition"
              >
                {link.icon}
                {link.nome}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
