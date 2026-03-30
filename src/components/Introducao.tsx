export function Introducao() {
  return (
    <main className="container mx-auto px-4">
      <section
        className="relative rounded-2xl overflow-hidden text-white
        bg-cover bg-center
        py-16 sm:py-24 lg:py-32"
        style={{
          backgroundImage: 'url(/img/floresta.jpg)',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 from-verde-950/95 via-verde-950/70 to-verde-950/20" />

        {/* Conteúdo */}
        <div className="relative z-10 max-w-5xl mx-auto ">
          {/* Badge */}
          <div className="mb-6 sm:mb-10">
            <div
              className="bg-verde-950/60 backdrop-blur-md rounded-xl flex flex-col gap-2 p-3 w-fit
              sm:flex-row sm:items-center sm:gap-6 sm:px-4 sm:py-1 sm:rounded-full"
            >
              <span className="text-xs sm:text-sm">
                temos vaga para dezembro
              </span>

              <a
                className="bg-verde-200 text-verde-900 py-2 px-4 rounded-full text-xs sm:text-sm font-medium hover:brightness-110 transition"
                href="#"
              >
                Reserve Hoje
              </a>
            </div>
          </div>

          {/* Título */}
          <h1
            className="font-serif text-2xl leading-tight mb-6
            sm:text-4xl sm:mb-12
            lg:text-5xl lg:mb-16 max-w-xl sm:max-w-2xl p-2"
          >
            Venha Experimentar a Vida na Floresta
          </h1>

          {/* Rodapé */}
          <div
            className="flex flex-col gap-4 text-xs
            sm:flex-row sm:justify-between sm:items-end sm:text-sm"
          >
            <p>
              Melhores locais para visitar{' '}
              <a
                className="underline decoration-2 underline-offset-4 hover:no-underline"
                href="/"
              >
                2049
              </a>
            </p>

            <div>
              <p className="uppercase mb-1 text-[10px] sm:text-xs tracking-wider">
                Recomendado por
              </p>

              <p className="flex items-center gap-2 sm:gap-3">
                <img
                  className="w-20 sm:w-28"
                  src="/img/parceiros/wildbeast.svg"
                  alt="Wildbeast"
                />
                <span>|</span>
                <span className="text-xs sm:text-sm">Revista Nacional</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
