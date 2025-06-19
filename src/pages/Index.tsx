
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '../components/AppSidebar';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import Shop from '../components/Shop';
import About from '../components/About';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1">
          <div className="p-6 border-b border-gray-200 bg-white">
            <SidebarTrigger className="text-black hover:bg-gray-100 p-2" />
          </div>
          <Hero />
          <FeaturedProducts />
          <Shop />
          <About />
          <Newsletter />
          <Footer />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
