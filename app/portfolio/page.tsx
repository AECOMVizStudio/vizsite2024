
import PortfolioItem from "@/ui/components/portfolio/PortfolioItem";


const portfolioItems = [
  {
    imageSrc:'/portfolio/studioShowcase.webp',
    title: 'Studio Showcase',
    href: '/portfolio/studioShowcase.webp',
    description: 'A realtime 3D project created to showcase some of our best work in Unreal Engine.',
    tags: ['Realtime 3D' , 'Architecture']
  },

  {
    imageSrc: '/portfolio/Electric_Vehicles_Virtual_Room.webp',
    title: 'EV 360 Demo',
    href: '/portfolio/Electric_Vehicles_Virtual_Room.webp',
    description: 'A 360 virtual room showcasing the future of electric vehicles.',
    tags: ['Rendering', 'Energy'],
  },
  {
    imageSrc: 'https://placehold.co/800x400',
    title: 'Route 3',
    description: "A 3D model of a proposed highway project. This project was created to help visualize the impact of the project on the surrounding area.",
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
    imageSrc: '/portfolio/PennStation.webp',
    title: 'Newark Penn Station 360',
    description: 'The Viz Studio recreated the Newark Penn Station interior for a 360 virtual room for a pursuit from photos only.',
    href: 'https://aecomviz.com/Newark-penn360/',
    tags: ['360 Room', 'Transportation'],
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