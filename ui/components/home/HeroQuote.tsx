'use client'

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Image from 'next/image'


const quotes = [
  {
    quote: "She picked this high nest here, because it'll be out of flood waters. And now she's gonna bite me.",
    name: "Steve Irwin",
    image: "https://placedog.net/150" // Placeholder image URL
  },
  {
    quote: "That which hath made them drunk hath made me bold. What hath quenched them hath given me fire.",
    name: "Lady Macbeth",
    image: "https://placedog.net/450" // Placeholder image URL
  },
  {
    quote: "I don't want any adventures, thank you. Not today. Good morning!",
    name: "Bilbo Baggins",
    image: "https://placedog.net/250" // Placeholder image URL
  },
  {
    quote: "We sitting here, I'm supposed to be the franchise player, and we in here talking about practice. Not a game, not a game, we talking about practice man.",
    name: "Allen Iverson",
    image: "https://placedog.net/250" // Placeholder image URL
  },
];


function HeroQuote() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: false, // Optional: Use fade effect
    cssEase: "linear"
  };
    return (
      <div className='bg-gray-200'>

      <Image
      
      src='/quotes.png'
      alt="Hero Image" 
      width={248}
      height={248}
      className="absolute opacity-15"
      />

        <Slider {...settings} className='w-full px-4 py-12'>
        {quotes.map((item, index) => (
          <div key={index} className="slick-slide">  {/* Add slick-slide class for potential styling */}
            <div className='flex flex-col md:flex-row  md:items-center sm:items-start md:justify-around'>
              <div className='md:w-2/3'>
                <h1 className="text-3xl md:text-5xl lg:text-5xl font-extrabold pb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">{item.quote}</h1>
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