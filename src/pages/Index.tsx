
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
          <div className="p-4 border-b border-tunisia-blue/20">
            <SidebarTrigger className="text-tunisia-blue hover:bg-tunisia-blue/10" />
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
