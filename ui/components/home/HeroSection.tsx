import HeroStats from './HeroStats';
import HeroQuote from './HeroQuote';
import Title from './title';

import Image from 'next/image'

function HeroSection() {
    return (
      
        <div className="relative h-screen w-full bg-cover">
            

            <Image 
            src='/sunsethero.png'
            alt="Hero Image" 
            fill={true}
            priority
            className="z-0"
            />

            <div className=" z-10 flex items-start justify-center h-full pt-10 text-left">
              
              <Title />
              
            </div>
            {/* <div className="relative z-10 flex items-start justify-center h-full pt-20 text-center">
              <div>
                <h1 className="text-6xl font-bold mb-4">Your Hero Title</h1>
                <p className="text-xl">Your hero subtitle or description goes here.</p>
              </div>
            </div> */}

            
            <HeroStats />
            <HeroQuote />
          

         
        </div>
      
    );
  }
  
  export default HeroSection;