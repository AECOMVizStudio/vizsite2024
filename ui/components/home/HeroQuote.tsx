import Carousel from '@/ui/tools/Carousel';
import Image from 'next/image'

function HeroQuote() {
    return (
      <div className='bg-gray-200'>

      <Image
      
      src='/quotes.png'
      alt="Hero Image" 
      width={248}
      height={248}
      className="absolute opacity-15"
      />

      <Carousel />
  </div>
  
    );
  }
  
  export default HeroQuote;