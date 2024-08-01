import Layout from './layout';


// main content
import Header from '@/ui/header';
import HeroSection from '@/ui/components/home/HeroSection';
import BusinessLines from '@/ui/components/home/BusinessLines';
import Services from '@/ui/components/home/Services';



export default function Home() {
  return (
    <div>
      
      <Header />
      <HeroSection />
      <BusinessLines />
      <Services />
      
    </div>
  );
}
