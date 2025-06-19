
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=5760&auto=format&fit=crop"
          alt="Minimalist workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 animate-fade-in">
          Crafted with
          <span className="block italic">Intention</span>
        </h1>
        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up">
          Discover our collection of thoughtfully designed pieces that blend modern aesthetics with timeless elegance.
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center animate-slide-up">
          <button className="w-full sm:w-auto bg-white text-black px-8 py-3 text-sm font-medium uppercase tracking-wider hover:bg-gray-100 transition-colors duration-300">
            Explore Collection
          </button>
          <button className="w-full sm:w-auto border border-white text-white px-8 py-3 text-sm font-medium uppercase tracking-wider hover:bg-white hover:text-black transition-colors duration-300">
            Our Story
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
