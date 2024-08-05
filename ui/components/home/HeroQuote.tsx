'use client'

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Image from 'next/image'


const quotes = [
  {
    quote: "These mates are great! I rate 8 out of 8!",
    name: "Steve Irwin",
    image: "https://placedog.net/150" // Placeholder image URL
  },
  {
    quote: "They did an ok job, in an ok amount of time, for an ok amount of money.",
    name: "Orville 'OK' Kennedy",
    image: "https://placedog.net/450" // Placeholder image URL
  },
  {
    quote: "Insert self-serving quote about the quality of our work here",
    name: "Guy McMann",
    image: "https://placedog.net/250" // Placeholder image URL
  }
];


function HeroQuote() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: false, // Optional: Use fade effect
    cssEase: "linear"
  };
    return (
      <div>

      <Image
      
      src='/quotes.png'
      alt="Hero Image" 
      width={248}
      height={248}
      className="absolute opacity-15"
      />

        <Slider {...settings} className='w-full px-4 py-32'>
        {quotes.map((item, index) => (
          <div key={index} className="slick-slide">  {/* Add slick-slide class for potential styling */}
            <div className='flex md:flex-row sm:flex-col xs:flex-col md:items-center sm:items-start md:justify-around'>
              <div className='md:w-2/3'>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold pb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">{item.quote}</h1>
                <p className='text-xl md:text-2xl lg:text-3xl font-medium text-gray-700'>- {item.name}</p>
              </div>
              <img src={item.image} alt={item.name} className='w-24 h-24 md:w-48 md:h-48 rounded-full mb-4 md:mb-0 border-4 border-gray-300 md:ml-8' />
            </div>
            
          </div>
        ))}
      </Slider>
  </div>
  
    );
  }
  
  export default HeroQuote;