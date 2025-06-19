
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=5760&auto=format&fit=crop"
          alt="Fashion collection"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-sans font-light text-white mb-8 tracking-tight">
          ATELIER
        </h1>
        <p className="text-lg sm:text-xl text-white/80 mb-12 max-w-2xl mx-auto font-light tracking-wide uppercase">
          Contemporary fashion for the modern individual
        </p>
        <div className="space-y-6 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center">
          <button className="w-full sm:w-auto bg-white text-black px-12 py-4 text-sm font-medium uppercase tracking-[0.2em] hover:bg-gray-100 transition-colors duration-300">
            Shop Now
          </button>
          <button className="w-full sm:w-auto border border-white text-white px-12 py-4 text-sm font-medium uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors duration-300">
            Lookbook
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
