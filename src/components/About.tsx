
const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-black">
              Our Philosophy
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                We believe in the power of simplicity. Every product we create is born from the intersection of functionality and beauty, designed to enhance your daily rituals.
              </p>
              <p>
                Our approach is rooted in sustainability and mindful consumption. We choose quality over quantity, creating pieces that are built to last and improve with time.
              </p>
              <p>
                From our studio to your space, each item carries the story of careful craftsmanship and intentional design.
              </p>
            </div>
            <button className="bg-black text-white px-8 py-3 text-sm font-medium uppercase tracking-wider hover:bg-gray-800 transition-colors duration-300">
              Learn More
            </button>
          </div>

          {/* Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1524230572899-a752b3835840?q=80&w=3464&auto=format&fit=crop"
              alt="Minimal architecture"
              className="w-full h-96 lg:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
