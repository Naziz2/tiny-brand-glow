
import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className="py-32 bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-light tracking-tight mb-8">
          Newsletter
        </h2>
        <p className="text-lg text-white/70 mb-12 max-w-2xl mx-auto font-light">
          Subscribe to receive updates on new releases and exclusive collections.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="flex-1 px-4 py-4 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/50 transition-colors duration-200 text-sm"
              required
            />
            <button
              type="submit"
              className="bg-white text-black px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] hover:bg-gray-100 transition-colors duration-300"
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
