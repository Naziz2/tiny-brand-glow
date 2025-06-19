
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import About from '../components/About';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedProducts />
      <About />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
