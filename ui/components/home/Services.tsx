interface ServiceCardProps {
    image: string;
    title: string;
    subtitles: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ image, title, subtitles }) => {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <img src={image} alt={title} className="w-full h-40 object-cover mb-4" />
        <h3 className="text-xl font-bold">{title}</h3>
        <ul>
          {subtitles.map((subtitle, index) => (
            <li key={index}>{subtitle}</li>
          ))}
        </ul>
      </div>
    );
  };

  const Services = () => {
    const servicesData: ServiceCardProps[] = [
      {
        image: '/path/to/image1.jpg', // Replace with actual image paths
        title: '360 Virtual Rooms',
        subtitles: [
          'Customizable web-based rooms',
          'ADA Friendly',
          'Ideal for scoping periods and community outreach',
        ],
      },
      {
        image: '/path/to/image1.jpg', // Replace with actual image paths
        title: '3D Modeling and Simulations',
        subtitles: [
          'Photo and Video Simulations for every stage of construction',
          'GIS based terrain modeling',
          'Day / Night Sims',
        ],
      },
      {
        image: '/path/to/image1.jpg', // Replace with actual image paths
        title: 'Realtime 3D + Web Development',
        subtitles: [
          'Fully explorable, fully customizable worlds',
          'Web Development and Design',
          "Bring your project to life with Unreal Engine pixel streaming",
        ],
      }
   
    ];
    return (
        <section className="py-24">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>
      );
    };
    
export default Services;