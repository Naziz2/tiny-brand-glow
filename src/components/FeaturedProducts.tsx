
const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Essential Tee",
      price: "$45",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=4846&auto=format&fit=crop",
      category: "Basics"
    },
    {
      id: 2,
      name: "Tailored Blazer",
      price: "$180",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=6000&auto=format&fit=crop",
      category: "Outerwear"
    },
    {
      id: 3,
      name: "Classic Denim",
      price: "$95",
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=6000&auto=format&fit=crop",
      category: "Denim"
    }
  ];

  return (
    <section id="shop" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-black mb-4">
            New Arrivals
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-tunisia-blue to-bergandi-red mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Thoughtfully designed pieces that blend comfort with contemporary style for every occasion.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden bg-gray-100 mb-4">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tunisia-blue/0 to-transparent group-hover:from-tunisia-blue/10 transition-colors duration-300"></div>
              </div>
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-wider text-bergandi-red font-medium">
                  {product.category}
                </p>
                <h3 className="text-lg font-serif font-medium text-black group-hover:text-tunisia-blue transition-colors duration-200">
                  {product.name}
                </h3>
                <p className="text-sm font-medium text-black">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="border-2 border-tunisia-blue text-tunisia-blue px-8 py-3 text-sm font-medium uppercase tracking-wider hover:bg-tunisia-blue hover:text-white transition-colors duration-300">
            Shop All
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
