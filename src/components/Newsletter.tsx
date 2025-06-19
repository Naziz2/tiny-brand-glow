
import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-6">
          Stay Connected
        </h2>
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          Be the first to discover our new collections and exclusive stories behind each creation.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-colors duration-200"
              required
            />
            <button
              type="submit"
              className="bg-white text-black px-8 py-3 text-sm font-medium uppercase tracking-wider hover:bg-gray-100 transition-colors duration-300"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
