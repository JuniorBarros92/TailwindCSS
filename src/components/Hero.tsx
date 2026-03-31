function Hero() {
  return (
    <div className="container mt-4 flex justify-center md:justify-start">
      <div className="inline-flex items-center rounded-md bg-verde-900">
        <span className="size-2 neon block rounded-full relative -left-1"></span>

        <div className="flex text-verde-300 divide-x-2 divide-verde-800">
          <div className="px-4 py-2 capitalize">segunda</div>
          <div className="px-4 py-2">25º</div>
          <div className="px-4 py-2">🌤️</div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
