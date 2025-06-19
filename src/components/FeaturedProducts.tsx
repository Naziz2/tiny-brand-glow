
const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Essential Notebook",
      price: "$45",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=4846&auto=format&fit=crop",
      category: "Stationery"
    },
    {
      id: 2,
      name: "Minimal Workspace",
      price: "$120",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=6000&auto=format&fit=crop",
      category: "Furniture"
    },
    {
      id: 3,
      name: "Design Collection",
      price: "$85",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=6000&auto=format&fit=crop",
      category: "Books"
    }
  ];

  return (
    <section id="shop" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-black mb-4">
            Featured Collection
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Each piece in our collection is carefully curated to bring beauty and functionality to your daily life.
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
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-wider text-gray-500 font-medium">
                  {product.category}
                </p>
                <h3 className="text-lg font-serif font-medium text-black group-hover:text-gray-600 transition-colors duration-200">
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
          <button className="border border-black text-black px-8 py-3 text-sm font-medium uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-300">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
