
import { useState } from 'react';
import { Filter, X } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Silk Midi Dress",
    price: 189,
    category: "women",
    type: "dresses",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop",
    colors: ["Black", "Navy", "Burgundy"]
  },
  {
    id: 2,
    name: "Linen Blazer",
    price: 245,
    category: "women",
    type: "outerwear",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&auto=format&fit=crop",
    colors: ["Beige", "White", "Black"]
  },
  {
    id: 3,
    name: "Cotton Shirt",
    price: 125,
    category: "men",
    type: "tops",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800&auto=format&fit=crop",
    colors: ["White", "Blue", "Black"]
  },
  {
    id: 4,
    name: "Wool Trousers",
    price: 199,
    category: "men",
    type: "bottoms",
    image: "https://images.unsplash.com/photo-1506629905064-53f8f0bee2c0?q=80&w=800&auto=format&fit=crop",
    colors: ["Navy", "Charcoal", "Black"]
  },
  {
    id: 5,
    name: "Cashmere Sweater",
    price: 299,
    category: "women",
    type: "tops",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=800&auto=format&fit=crop",
    colors: ["Cream", "Grey", "Pink"]
  },
  {
    id: 6,
    name: "Leather Jacket",
    price: 450,
    category: "men",
    type: "outerwear",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop",
    colors: ["Black", "Brown"]
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
    if (filters.priceRange === 'under200' && product.price >= 200) return false;
    if (filters.priceRange === 'over200' && product.price < 200) return false;
    return true;
  });

  const updateFilter = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <section id="shop" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-black">
            Shop Collection
          </h2>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 border border-tunisia-blue text-tunisia-blue hover:bg-tunisia-blue hover:text-white transition-colors duration-300"
          >
            <Filter size={16} />
            Filters
          </button>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="mb-8 p-6 bg-gray-50 border border-tunisia-blue/20">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-black">Filters</h3>
              <button
                onClick={() => setShowFilters(false)}
                className="text-gray-500 hover:text-black"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={filters.category}
                  onChange={(e) => updateFilter('category', e.target.value)}
                  className="w-full p-2 border border-gray-300 focus:border-tunisia-blue focus:outline-none"
                >
                  <option value="all">All</option>
                  <option value="women">Women</option>
                  <option value="men">Men</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                <select
                  value={filters.type}
                  onChange={(e) => updateFilter('type', e.target.value)}
                  className="w-full p-2 border border-gray-300 focus:border-tunisia-blue focus:outline-none"
                >
                  <option value="all">All Types</option>
                  <option value="dresses">Dresses</option>
                  <option value="tops">Tops</option>
                  <option value="bottoms">Bottoms</option>
                  <option value="outerwear">Outerwear</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                <select
                  value={filters.priceRange}
                  onChange={(e) => updateFilter('priceRange', e.target.value)}
                  className="w-full p-2 border border-gray-300 focus:border-tunisia-blue focus:outline-none"
                >
                  <option value="all">All Prices</option>
                  <option value="under200">Under $200</option>
                  <option value="over200">Over $200</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group">
              <div className="relative overflow-hidden mb-4">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-black group-hover:text-tunisia-blue transition-colors duration-200">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 capitalize">{product.category} • {product.type}</p>
                <div className="flex justify-between items-center">
                  <p className="text-xl font-semibold text-bergandi-red">${product.price}</p>
                  <div className="flex gap-1">
                    {product.colors.slice(0, 3).map((color, index) => (
                      <div 
                        key={index}
                        className="w-4 h-4 rounded-full border border-gray-300"
                        style={{backgroundColor: color.toLowerCase()}}
                        title={color}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found matching your filters.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Shop;
