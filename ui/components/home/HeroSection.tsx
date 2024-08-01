import HeroStats from './HeroStats';
import HeroQuote from './HeroQuote';
import Title from './title';

import TypedText from './TypedText';

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

            
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="container relative mx-auto z-10 flex flex-col align-center justify-center h-full">
              
              <h1 className="text-gray-200 text-6xl font-extrabold text-left mb-3" style={{ height: '130px' }}>
                AECOM Viz Studio -
                <TypedText />
              </h1>
                
              <div>
                <h2 className="text-gray-300 text-2xl max-w-2xl mt-12 mx-auto text-center">Welcome to our project showcase. We excel in bringing ideas to life through stunning visuals. Discover our work and get in touch with us.</h2>
              </div>
              
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