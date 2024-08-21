
import PortfolioItem from "@/ui/components/portfolio/PortfolioItem";


const portfolioItems = [
  {
    imageSrc:'/portfolio/portfolioImage.png',
    title: 'Studio Showcase',
    href: '/portfolio/portfolioImage.png',
    description: 'A realtime 3D project created to showcase some of our best work in Unreal Engine.',
    tags: ['3D' , 'Architecture']
  },

  {
    imageSrc: 'https://placehold.co/800x400',
    title: 'STEAM 360',
    href: 'https://aecomvis2023.herokuapp.com/portfolio',
    description: 'A 360° virtual room, custom built for STEAM students. This project is complete with keyboard navigation and is text to speech compatible',
    tags: ['Virtual Room', 'Outreach'],
  },
  {
    imageSrc: 'https://placehold.co/800x400',
    title: 'Route 3',
    href: 'https://aecomvis2023.herokuapp.com/portfolio',
    tags: ['Infrastructure'],
  },
  {
    imageSrc: 'https://placehold.co/800x400',
    title: 'Energy 360',
    href: 'https://aecomvis2023.herokuapp.com/portfolio',
    tags: ['Virtual Room', 'Energy'],
  },
  {
    imageSrc: 'https://placehold.co/800x400',
    title: 'LA 28',
    href: 'https://aecomvis2023.herokuapp.com/portfolio',
    tags: ['Architecture'],
  },
  {
    imageSrc: 'https://placehold.co/800x400',
    title: 'CHSR',
    href: 'https://aecomvis2023.herokuapp.com/portfolio',
    tags: ['3D Modeling'],
  },
  {
    imageSrc: 'https://placehold.co/800x400',
    title: 'Second Avenue Subway',
    href: 'https://aecomvis2023.herokuapp.com/portfolio',
    tags: ['3D Rendering', 'Architecture'],
  },
  {
    imageSrc: 'https://placehold.co/800x400',
    title: 'West Seattle Link Extension',
    href: 'https://aecomvis2023.herokuapp.com/portfolio',
    tags: ['Realtime 360', 'Transportation'],
  },
]

const Page = () => {
    return (
      <div className="mx-4 lg:mx-auto py-24">
        <div className=" text-gray-900">
          <div className="container mx-4 lg:mx-auto py-12 text-left">
            <h1 className="text-4xl font-bold">Portfolio</h1>
            <h2 className="text-md mt-4">Check out some of our recent projects. Tap or Hover to learn more.</h2>
          </div>
        </div>



        <div className="container lg:mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
          {portfolioItems.map((item, index) => (
            <PortfolioItem key={index} {...item} />
          ))}
        </div>

      </div>
      
    );
  }

export default Page;