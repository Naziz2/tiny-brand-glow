
import { useState } from 'react';
import { Filter, X } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Essential Hoodie",
    price: 120,
    category: "men",
    type: "knitwear",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop",
    colors: ["Black", "Grey", "White"]
  },
  {
    id: 2,
    name: "Oversized Tee",
    price: 65,
    category: "women",
    type: "shirting",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop",
    colors: ["Black", "White", "Grey"]
  },
  {
    id: 3,
    name: "Denim Jacket",
    price: 180,
    category: "men",
    type: "outerwear",
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?q=80&w=800&auto=format&fit=crop",
    colors: ["Blue", "Black"]
  },
  {
    id: 4,
    name: "Wide Leg Jeans",
    price: 145,
    category: "women",
    type: "denim",
    image: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?q=80&w=800&auto=format&fit=crop",
    colors: ["Blue", "Black", "White"]
  },
  {
    id: 5,
    name: "Knit Sweater",
    price: 95,
    category: "women",
    type: "knitwear",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=800&auto=format&fit=crop",
    colors: ["Cream", "Black", "Grey"]
  },
  {
    id: 6,
    name: "Bomber Jacket",
    price: 220,
    category: "men",
    type: "outerwear",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop",
    colors: ["Black", "Navy"]
  }
];

const Shop = () => {
  const [filters, setFilters] = useState({
    category: 'all',
    type: 'all',
    priceRange: 'all'
  });
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = products.filter(product => {
    if (filters.category !== 'all' && product.category !== filters.category) return false;
    if (filters.type !== 'all' && product.type !== filters.type) return false;
    if (filters.priceRange === 'under100' && product.price >= 100) return false;
    if (filters.priceRange === 'over100' && product.price < 100) return false;
    return true;
  });

  const updateFilter = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <section id="shop" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-light tracking-tight text-black">
            Shop
          </h2>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-3 px-6 py-3 border border-black text-black hover:bg-black hover:text-white transition-colors duration-300 text-sm uppercase tracking-[0.2em]"
          >
            <Filter size={16} />
            Filter
          </button>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="mb-16 p-8 bg-gray-50 border border-gray-200">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-medium text-black uppercase tracking-[0.2em]">Filters</h3>
              <button
                onClick={() => setShowFilters(false)}
                className="text-gray-500 hover:text-black"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <label className="block text-xs font-medium text-gray-600 uppercase tracking-[0.2em] mb-3">Gender</label>
                <select
                  value={filters.category}
                  onChange={(e) => updateFilter('category', e.target.value)}
                  className="w-full p-3 border border-gray-300 bg-white text-sm focus:border-black focus:outline-none"
                >
                  <option value="all">All</option>
                  <option value="women">Women</option>
                  <option value="men">Men</option>
                </select>
              </div>
              
              <div>
                <label className="block text-xs font-medium text-gray-600 uppercase tracking-[0.2em] mb-3">Category</label>
                <select
                  value={filters.type}
                  onChange={(e) => updateFilter('type', e.target.value)}
                  className="w-full p-3 border border-gray-300 bg-white text-sm focus:border-black focus:outline-none"
                >
                  <option value="all">All Categories</option>
                  <option value="outerwear">Outerwear</option>
                  <option value="knitwear">Knitwear</option>
                  <option value="denim">Denim</option>
                  <option value="shirting">Shirting</option>
                </select>
              </div>
              
              <div>
                <label className="block text-xs font-medium text-gray-600 uppercase tracking-[0.2em] mb-3">Price</label>
                <select
                  value={filters.priceRange}
                  onChange={(e) => updateFilter('priceRange', e.target.value)}
                  className="w-full p-3 border border-gray-300 bg-white text-sm focus:border-black focus:outline-none"
                >
                  <option value="all">All Prices</option>
                  <option value="under100">Under $100</option>
                  <option value="over100">Over $100</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6 bg-gray-100">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-96 sm:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-light text-black tracking-wide">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 uppercase tracking-[0.1em]">{product.category}</p>
                <p className="text-lg font-medium text-black">${product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg font-light">No products found</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Shop;
