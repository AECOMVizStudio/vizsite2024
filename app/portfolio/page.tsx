
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
    imageSrc: 'portfolio/HermosaEIS.webp',
    title: 'Hermosa Minerals EIS 360',
    description: "A custom 360 room created for a critical minerals project in Arizona.",
    href: 'https://hermosacriticalmineralseis.com/',
    tags: ['Virtual Room', 'Environmental'],
  },
  {
    imageSrc: 'portfolio/KingsPlaza.webp',
    title: 'Sacramento Kings Golden One Center',
    description: "Pursuit renderings for the Golden One Center, which houses the Sacramento Kings basketball team in California.",
    href: 'portfolio/KingsPlaza.webp',
    tags: ['Rendering', 'Architecture'],
  },
  {
    imageSrc: 'portfolio/FrederickDouglassMemorial.webp',
    title: 'Frederick Douglass Memorial Bridge',
    description: 'A 3D rendering of the Frederick Douglass Memorial Bridge in Washington D.C.',
    href: 'https://player.vimeo.com/video/301673201?h=453918afad',
    tags: ['Rendering','Architecture'],
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