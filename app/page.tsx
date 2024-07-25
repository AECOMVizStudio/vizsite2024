import Layout from './layout';


// main content
import Title from '@/ui/components/home/title'
import HeroSection from '@/ui/components/home/HeroSection';
import BusinessLines from '@/ui/components/home/BusinessLines';
import Services from '@/ui/components/home/Services';



export default function Home() {
  return (
    <div>
      
      <Title />
      <HeroSection />
      <BusinessLines />
      <Services />
      
    </div>
  );
}
