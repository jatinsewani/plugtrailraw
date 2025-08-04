import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import InteractiveMap from '@/components/InteractiveMap';
import Partners from '@/components/Partners';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <InteractiveMap />
      <Partners />
      <Contact />
    </div>
  );
};

export default Index;
