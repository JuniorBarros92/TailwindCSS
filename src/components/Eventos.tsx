function Eventos() {
  return (
    <section
      id="eventos"
      className="mb-12 sm:mb-16 py-12 sm:py-16 bg-verde-900"
    >
      <div className="container">
        <p className="mb-4 text-center text-verde-200 uppercase tracking-widest text-sm">
          Conecte-se com a natureza
        </p>

        <h2 className="mb-8 mx-auto font-serif text-balance text-center max-w-3xl text-white text-4xl sm:text-6xl">
          Cada Som, Cada Momento, Uma Nova Descoberta
        </h2>

        <div className="overflow-x-auto snap-x snap-mandatory pb-4 grid grid-cols-[repeat(3,minmax(300px,1fr))] gap-4 sm:gap-8">
          {/* Evento 1 */}
          <div className="grid snap-center gap-4 bg-verde-800 p-6 sm:p-8 rounded-xl">
            <h3 className="text-verde-300 text-2xl font-serif">Lua Nova</h3>

            <div className="text-white">
              <p className="font-serif text-5xl">23</p>
              <p className="text-xl">Março 2049</p>
            </div>

            <p className="text-gray-300 text-balance">
              Melhor período para observação astronômica. O Céu estará claro e
              as estrelas visíveis.
            </p>

            <a
              href="#contato"
              className="justify-self-start self-end bg-verde-200 text-verde-900 py-2 px-4 inline-block rounded-full"
            >
              Reservar 23/03
            </a>
          </div>

          {/* Evento 2 */}
          <div className="grid snap-center gap-4 bg-verde-800 p-6 sm:p-8 rounded-xl">
            <h3 className="text-verde-300 text-2xl font-serif">
              Aurora Boreal
            </h3>

            <div className="text-white">
              <p className="font-serif text-5xl">15</p>
              <p className="text-xl">Abril 2049</p>
            </div>

            <p className="text-gray-300 text-balance">
              Melhor período para observação da Aurora Boreal, o céu estará
              iluminado pelas estrelas.
            </p>

            <a
              href="#contato"
              className="justify-self-start self-end bg-verde-200 text-verde-900 py-2 px-4 inline-block rounded-full"
            >
              Reservar 15/04
            </a>
          </div>

          {/* Evento 3 */}
          <div className="grid snap-center gap-4 bg-verde-800 p-6 sm:p-8 rounded-xl">
            <h3 className="text-verde-300 text-2xl font-serif">
              Chuva de Meteoros
            </h3>

            <div className="text-white">
              <p className="font-serif text-5xl">18</p>
              <p className="text-xl">Agosto 2049</p>
            </div>

            <p className="text-gray-300 text-balance">
              Melhor período para observação da Chuva de Meteoros, o céu estará
              iluminado pelas estrelas.
            </p>

            <a
              href="#contato"
              className="justify-self-start self-end bg-verde-200 text-verde-900 py-2 px-4 inline-block rounded-full"
            >
              Reservar 18/08
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Eventos;
