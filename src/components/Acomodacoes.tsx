export function Acomodacoes() {
  return (
    <section
      id="acomodacoes"
      className="container mx-auto px-4 grid gap-8 pt-16 mb-12 sm:mb-16 lg:grid-cols-[2fr_3fr]"
    >
      {/* Lado esquerdo */}
      <div className="content-end bg-[url('/img/padrao.svg')] bg-no-repeat bg-contain bg-left-left pb-8 ">
        <h2 className="text-white mb-8 text-3xl  font-serif sm:text-4xl lg:text-5xl">
          Refúgio Natural
        </h2>

        <ul className="text-gray-200 grid gap-4 text-sm sm:text-lg">
          {[
            'Experimente a natureza de perto',
            'Conecte-se com a natureza',
            'Desconecte-se do digital',
            'Observe a vida selvagem',
            'Escolha a sua cabine preferida',
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-4">
              <span className="h-0.5 w-6 bg-verde-400 inline-block"></span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Lado direito (grid de imagens) */}
      <div className="grid grid-cols-[2fr_1fr] pb-4 gap-4 sm:gap-8">
        {/* Casa 1 */}
        <div className="col-span-2 relative">
          <img
            className="h-52 w-full object-cover rounded-xl"
            src="/img/casa1.jpg"
            alt="Casa Ruby"
          />
          <span className="absolute top-2 right-2 uppercase text-white rounded-full bg-verde-950/60 px-4 py-2 text-xs sm:text-sm">
            Ruby
          </span>
        </div>

        {/* Casa 2 */}
        <div className="relative">
          <img
            className="w-full h-full object-cover rounded-xl"
            src="/img/casa2.jpg"
            alt="Casa Emerald"
          />
          <span className="absolute top-2 right-2 uppercase text-white rounded-full bg-verde-950/60 px-4 py-2 text-xs sm:text-sm">
            Emerald
          </span>
        </div>

        {/* Casa 3 */}
        <div className="relative">
          <img
            className="w-full h-full object-cover rounded-xl"
            src="/img/casa3.jpg"
            alt="Casa Saphire"
          />
          <span className="absolute top-2 right-2 uppercase text-white rounded-full bg-verde-950/60 px-4 py-2 text-xs sm:text-sm">
            Saphire
          </span>
        </div>
      </div>
    </section>
  );
}

export default Acomodacoes;
