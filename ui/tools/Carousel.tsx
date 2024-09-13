'use client'

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const quotes = [
    {
      quote: "You are all so amazing. This would not be where it is now without all of your hard work and dedication. You are inspirational!",
      name: "Wendy Lau",
      image: "https://placedog.net/150",
      title: "Risk Management Director, ED&I Lead, AECOM" // Placeholder image URL
    },
    {
      quote: "Working with the AECOM Viz team was again a HUGE success. The best part of the experience was sharing our vision of the meeting and working collaboratively to make it happen.",
      name: "Odessa L. Phillip, P.E",
      title: "President & CEO, Assedo Consulting, LLC"
    },
    {
      quote: "You are always reliable and always come through in a crunch with great quality. Thank you, again, for all your efforts.",
      name: "Gladys Galer",
      title: "Major Pursuits, AECOM" // Placeholder image URL
    },
    {
      quote: "Yup! As usual, you guys killed it. Fantastic work. I like that more techniques were developed and refined through your collaboration - Can't thank this team enough.",
      name: "Paul Boucher",
      title: "Senior Graphic Design Manager, DCSA Major Pursuits, AECOM" // Placeholder image URL
    },
  
    {
      quote: "The unique-to-Colfax graphics and user-friendly interface have facilitated an influx of positive public feedback on the project.",
      name: "Amber Haines",
      title: "Parsons, Colfax BRT Deputy Project Manager" // Placeholder image URL
    },
  ];

  const settings = {
    dots: false,
    arrows:false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: false, // Optional: Use fade effect
    cssEase: "linear",
    

  };



const Carousel = () => {

  return (
    <div className='container p-4 md:py-8 md:mx-auto overflow-hidden'>

      <Slider {...settings}>
        {quotes.map((item, index) => (
          <div key={index} className="slick-slide">  {/* Add slick-slide class for potential styling */}
            <div className='flex flex-col md:flex-row  md:items-center sm:items-start md:justify-around'>
              <div className='md:w-2/3'>
                <h1 className="text-3xl md:text-5xl lg:text-5xl font-extrabold pb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">{item.quote}</h1>
                <p className='text-xl md:text-2xl lg:text-3xl font-medium text-slate-950'>{item.name}</p>
                <p className='text-xl md:text-2xl lg:text-3xl font-medium text-gray-500'>- {item.title}</p>
              </div>
              {/* <img src={item.image} alt={item.name} className='w-24 h-24 md:w-48 md:h-48 rounded-full mb-4 md:mb-0 border-4 border-gray-300 md:ml-8' /> */}
            </div>
            
          </div>
        ))}
      </Slider>
      </div>
  )
  }


export default Carousel;