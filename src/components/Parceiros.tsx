type Parceiro = {
  nome: string;
  logo: string;
};

const parceiros: Parceiro[] = [
  { nome: 'Caravan', logo: '/img/parceiros/caravan.svg' },
  { nome: 'Dogs', logo: '/img/parceiros/dogs.svg' },
  { nome: 'Wildbeast', logo: '/img/parceiros/wildbeast.svg' },
  { nome: 'Lescone', logo: '/img/parceiros/lescone.svg' },
  { nome: 'Surfbot', logo: '/img/parceiros/surfbot.svg' },
];

const Parceiros = () => {
  return (
    <section className="container mb-12 sm:mb-16">
      <ul className="flex flex-col items-center py-4 divide-y-2 divide-verde-900 sm:flex-row sm:justify-between sm:gap-8 sm:divide-y-0 sm:border-y-2 sm:border-verde-900 sm:py-8">
        {parceiros.map((parceiro) => (
          <li
            key={parceiro.nome}
            className="p-4 flex items-center justify-center opacity-70 hover:opacity-100 transition"
          >
            <img
              src={parceiro.logo}
              alt={parceiro.nome}
              className="max-h-8 grayscale hover:grayscale-0 transition"
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Parceiros;
