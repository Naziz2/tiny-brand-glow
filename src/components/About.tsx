
const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-black">
              Our Story
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-bergandi-red to-tunisia-blue"></div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Founded on the belief that great style shouldn't come at the cost of comfort or conscience, we create clothing that moves with you through life's moments.
              </p>
              <p>
                Every piece in our collection is carefully crafted from sustainable materials, designed to be versatile, and built to last beyond seasons and trends.
              </p>
              <p>
                From our design studio to your wardrobe, each garment tells a story of thoughtful creation and timeless appeal.
              </p>
            </div>
            <button className="bg-gradient-to-r from-tunisia-blue to-bergandi-red text-white px-8 py-3 text-sm font-medium uppercase tracking-wider hover:from-tunisia-blue/90 hover:to-bergandi-red/90 transition-all duration-300">
              Learn More
            </button>
          </div>

          {/* Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=3464&auto=format&fit=crop"
              alt="Fashion design process"
              className="w-full h-96 lg:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-tunisia-blue/10 via-transparent to-bergandi-red/5"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
