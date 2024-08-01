import Layout from './layout';


// main content
import Header from '@/ui/header';
import HeroSection from '@/ui/components/home/HeroSection';
import HeroStats from '@/ui/components/home/HeroStats';
import HeroQuote from '@/ui/components/home/HeroQuote';
import BusinessLines from '@/ui/components/home/BusinessLines';
import Services from '@/ui/components/home/Services';



export default function Home() {
  return (
    <div>
      
      <Header />
      <HeroSection />
      <HeroStats />
      <HeroQuote />
      <BusinessLines />
      <Services />
      
    </div>
  );
}
