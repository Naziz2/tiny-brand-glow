
const About = () => {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-light tracking-tight text-black">
              About
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg font-light">
              <p>
                Founded on the principle that exceptional design should be accessible, we create contemporary clothing that transcends seasonal trends.
              </p>
              <p>
                Every garment is thoughtfully designed and ethically produced, ensuring both quality and sustainability without compromise.
              </p>
              <p>
                Our collections reflect a commitment to minimalist aesthetics and functional design, crafted for the modern wardrobe.
              </p>
            </div>
            <button className="bg-black text-white px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] hover:bg-gray-800 transition-colors duration-300">
              Our Story
            </button>
          </div>

          {/* Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=3464&auto=format&fit=crop"
              alt="Design process"
              className="w-full h-[600px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
