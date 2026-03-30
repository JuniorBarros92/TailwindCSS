type CicloItem = {
  titulo: string;
  descricao: string;
  horario: string;
  img: string;
  destaque?: boolean;
};

const itens: CicloItem[] = [
  {
    titulo: 'Amanhecer',
    descricao:
      'Desperte com o canto dos pássaros e participe das nossas caminhadas ao ar livre.',
    horario: '05:40 - 07:00',
    img: '/img/manha.svg',
  },
  {
    titulo: 'Meio-dia',
    descricao:
      'Explore nossas trilhas sombreadas e desfrute de um piquenique gourmet na natureza.',
    horario: '12:00 - 14:00',
    img: '/img/dia.svg',
    destaque: true,
  },
  {
    titulo: 'Anoitecer',
    descricao: 'Termine seu dia com nossa sessão de observação de estrelas.',
    horario: '19:00 - 21:00',
    img: '/img/noite.svg',
  },
];

const CicloNatural = () => {
  return (
    <section className="container bg-[url('/img/padrao.svg')] bg-contain bg-center bg-no-repeat mb-12 sm:mb-16 sm:py-16">
      <p className="mb-4 text-center text-verde-200 uppercase tracking-widest text-sm">
        Ciclo Natural
      </p>

      <h2 className="mb-8 mx-auto font-serif text-balance text-center max-w-3l text-white text-4xl sm:text-6xl">
        Ritmo da Floresta
      </h2>

      <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
        {itens.map((item, index) => (
          <div
            key={index}
            className={`grid flex-1 gap-4 bg-verde-900 p-6 sm:p-8 rounded-xl transition-transform
              ${item.destaque ? 'sm:translate-y-12 sm:hover:translate-y-10' : 'sm:hover:-translate-y-2'}
            `}
          >
            <div className="bg-verde-400 rounded-full size-10 flex items-center justify-center">
              <img src={item.img} alt={item.titulo} />
            </div>

            <h3 className="font-serif text-2xl text-white">{item.titulo}</h3>

            <p className="text-gray-400">{item.descricao}</p>

            <span className="text-verde-300">{item.horario}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CicloNatural;
