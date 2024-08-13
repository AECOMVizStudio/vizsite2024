import Image from 'next/image'
import Link from 'next/link';

interface ServiceCardProps {
    image: string;
    title: string;
    description: string;
}

const services = [
  {
    image: '/360room.png', 
    title: '360 Virtual Rooms',
    description: 'The perfect option for public outreach and virtual open house events. Fully customizable and professionally rendered 360 degree spaces.'
  },
  {
    image: '/3dmodel.png', 
    title: '3D Modeling and Simulations',
    description: 'Cutting edge Photo and Video Simulations for every stage of your project. We offer GIS based terrain modeling, realistic textures, and variable time & weather',
  },
  {
    image: '/e3d.png', 
    title: 'Realtime 3D + Web Development',
    description: 'Fully custom explorable 3D worlds, alongside industry leading web development.'
  }

];

const Services = () => {

    return (
      <section className="main-background py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-white font-semibold">Our Services</h2>
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