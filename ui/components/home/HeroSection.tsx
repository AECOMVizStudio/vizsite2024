import TypedText from './TypedText';
import Image from 'next/image';

function HeroSection() {
  return (
    <div className="relative h-screen w-full bg-cover">
      <Image 
        src='/sunsethero.png'
        alt="Hero Image" 
        fill={true}
        priority
        className="z-0 object-cover"
      />

      <div className="absolute inset-0 bg-black opacity-40 pointer-events-none"></div>

      <div className="container relative mx-auto z-10 flex flex-col justify-center h-full px-4 md:px-8">
        <h1 className="text-gray-200 text-4xl sm:text-5xl md:text-6xl font-extrabold text-left mb-3">
          AECOM Viz Studio - <TypedText />
        </h1>
        
        <div>
          <h2 className="text-gray-300 text-lg sm:text-xl md:text-2xl max-w-lg sm:max-w-xl md:max-w-2xl mt-8 sm:mt-10 md:mt-12 mx-auto text-center">
            Welcome to our project showcase. We excel in bringing ideas to life through stunning visuals. Discover our work and get in touch with us.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
