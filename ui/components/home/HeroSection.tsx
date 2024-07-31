import HeroStats from './HeroStats';
import HeroQuote from './HeroQuote';

import Image from 'next/image'

function HeroSection() {
    return (
      
        <div className="mx-auto">
            <div className='container mx-auto'>

            <Image 
            src='/hero-desktop.png'
            width={1000}
            height={760}
            className='md:w-full h-auto object-cover mb-8'
            alt="placeholder hero"
            priority={true}
            />

            </div>
          
          <HeroStats />
          <HeroQuote />
         
        </div>
      
    );
  }
  
  export default HeroSection;