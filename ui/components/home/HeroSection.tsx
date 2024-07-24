import HeroStats from './HeroStats';
import HeroQuote from './HeroQuote';

function HeroSection() {
    return (
      <section className="bg-gray-100 py-24">
        <div className="container mx-auto">
          <HeroStats />
          <HeroQuote />
        </div>
      </section>
    );
  }
  
  export default HeroSection;