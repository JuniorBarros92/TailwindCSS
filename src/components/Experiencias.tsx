function Experiencias() {
  return (
    <section
      id="experiencias"
      className="container mb-12 sm:mb-16 grid sm:grid-cols-2 gap-8"
    >
      {/* Texto */}
      <div className="bg-verde-900 p-6 sm:p-8 rounded-xl">
        <p className="mb-4 text-verde-200 uppercase tracking-widest text-sm">
          Experiências Exclusivas
        </p>

        <h2 className="mb-8 font-serif text-balance text-white text-3xl sm:text-4xl lg:text-5xl capitalize">
          Escolha sua próxima aventura
        </h2>

        <h3 className="text-white text-xl flex items-center gap-4 before:h-0.5 before:w-6 before:bg-verde-400 hover:before:w-10 before:transition-[width]">
          Observação Noturna
        </h3>
        <p className="mb-8 text-balance text-gray-400 pl-10">
          Explore a vida selvagem em seu habitat natural sob as estrelas.
        </p>

        <h3 className="text-white text-xl flex items-center gap-4 before:h-0.5 before:w-6 before:bg-verde-400 hover:before:w-10 before:transition-[width]">
          Vida Selvagem
        </h3>
        <p className="mb-8 text-balance text-gray-400 pl-10">
          Observe a vida selvagem em seu habitat natural.
        </p>

        <h3 className="text-white text-xl flex items-center gap-4 before:h-0.5 before:w-6 before:bg-verde-400 hover:before:w-10 before:transition-[width]">
          Canoagem
        </h3>
        <p className="mb-8 text-balance text-gray-400 pl-10">
          Conquiste novos horizontes com nossa equipe especializada.
        </p>
      </div>

      {/* Imagens */}
      <div className="grid grid-cols-2 gap-4">
        <div className="group relative cursor-pointer overflow-hidden rounded-xl">
          <img
            className="size-full object-cover transition-transform group-hover:scale-110"
            src="/img/canoagem.jpg"
            alt="canoagem"
          />
          <div className="absolute flex items-end p-4 inset-0 bg-linear-to-t from-verde-950/80 opacity-0 transition-opacity group-hover:opacity-100">
            <span className="text-white">Canoagem</span>
          </div>
        </div>

        <div className="group row-span-2 relative cursor-pointer overflow-hidden rounded-xl">
          <img
            className="size-full object-cover transition-transform group-hover:scale-110"
            src="/img/observacao-noturna.jpg"
            alt="Observação Noturna"
          />
          <div className="absolute flex items-end p-4 inset-0 bg-linear-to-t from-verde-950/80 opacity-0 transition-opacity group-hover:opacity-100">
            <span className="text-white">Observação Noturna</span>
          </div>
        </div>

        <div className="group relative cursor-pointer overflow-hidden rounded-xl">
          <img
            className="size-full object-cover transition-transform group-hover:scale-110"
            src="/img/vida-selvagem.jpg"
            alt="Vida Selvagem"
          />
          <div className="absolute flex items-end p-4 inset-0 bg-linear-to-t from-verde-950/80 opacity-0 transition-opacity group-hover:opacity-100">
            <span className="text-white">Vida Selvagem</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiencias;
