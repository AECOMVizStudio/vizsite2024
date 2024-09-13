import Image from 'next/image'
import Link from 'next/link';

interface ServiceCardProps {
    image: string;
    title: string;
    description: string;
}

const services = [
  {
    image: '/360room.webp', 
    title: '360 Virtual Rooms',
    description: 'Immersive, adaptable, and responsive web-based virtual rooms that provide interactive and dynamic settings for your next project delivery.'
  },
  {
    image: '/services3D.webp', 
    title: '2D + 3D Visualization',
    description: 'From creating photo simulations, 4D Scheduling animations, conceptual narratives, and renderings that invoke a sense of place, we excel in bringing even the most complex designs to life.',
  },
  {
    image: '/Realtime3D.webp', 
    title: 'Realtime 3D + Web Development',
    description: 'Fully customized, explorable 3D worlds delivered over the web, alongside industry leading web development. Make an impact via the most cutting edge technology available.'
  }

];

const Services = () => {

    return (
      <section className="main-background py-12">
      <div className="container mx-auto px-6">
        <div className="text-left mb-12">
          <h2 className="text-4xl text-white font-bold pb-2">Our Services</h2>
          <h3 className="text-lg text-gray-200">Every Project is a Story Waiting to be Told</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
              <div
                key={service.title}
                className="group relative bg-gray-100 p-4 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
              >
                

                  <div className="relative w-full h-48">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill={true}
                      sizes='(max-width:358px) 100vw'
                      className="rounded-t-sm"
                      />
                  </div>
                  <div className="relative z-10 mt-4">
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                
              </div>
            ))}
          </div>
          <div className="text-center">

          
            <Link href="/portfolio" className="inline-block bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 text-white font-semibold text-2xl mt-12 py-4 px-8 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105">
              View Portfolio
            </Link>
          

        </div>
        </div>
      </section>
      );
    };
    
export default Services;