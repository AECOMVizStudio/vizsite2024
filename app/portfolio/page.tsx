
import PortfolioItem from "@/ui/components/portfolio/PortfolioItem";


const portfolioItems = [
  {
    imageSrc:'/portfolio/studioShowcase.webp',
    title: 'Studio Showcase',
    href: 'https://vimeo.com/995810614',
    demohref: 'https://connector.eagle3dstreaming.com/v5/ColeRobAECOM/UnrealShowcase/dev',
    isDemo: true,
    description: 'A realtime 3D project created to showcase some of our best work in Unreal Engine.',
    tags: ['Realtime 3D' , 'Architecture', 'Transportation'],
  },

  {
    imageSrc: '/portfolio/ChicagoLakefront.webp',
    title: 'Chicago Lakefront',
    href: 'https://vimeo.com/259920004?share=copy',
    isDemo: false,
    description: 'A compliation of 3D renderings of the Chicago Lakefront projects.',
    tags: ['Rendering', 'Transportation'],
  },
  {
    imageSrc: 'portfolio/HermosaEIS.webp',
    title: 'Hermosa Minerals EIS 360',
    description: "A custom 360 room created for a critical minerals project in Arizona.",
    href: 'https://hermosacriticalmineralseis.com/',
    isDemo: false,
    tags: ['Virtual Room', 'Environmental'],
  },
  {
    imageSrc: 'portfolio/KingsPlaza.webp',
    title: 'Sacramento Kings Golden One Center',
    description: "Pursuit renderings for the Golden One Center, which houses the Sacramento Kings basketball team in California.",
    href: 'portfolio/KingsPlaza.webp',
    isDemo: false,
    tags: ['Rendering', 'Architecture'],
  },
  {
    imageSrc: 'portfolio/FrederickDouglassMemorial.webp',
    title: 'Frederick Douglass Memorial Bridge',
    description: 'A 3D rendering of the Frederick Douglass Memorial Bridge in Washington D.C.',
    href: 'https://player.vimeo.com/video/301673201?h=453918afad',
    isDemo: false,
    tags: ['Rendering','Architecture'],
  },
  {
    imageSrc: '/portfolio/PennStation.webp',
    title: 'Newark Penn Station 360',
    description: 'The Viz Studio recreated the Newark Penn Station interior for a 360 virtual room for a pursuit from photos only.',
    href: 'https://aecomviz.com/Newark-penn360/',
    isDemo: false,
    tags: ['360 Room', 'Transportation'],
  },
  {
    imageSrc: '/portfolio/DiyarAlMuharraq.webp',
    title: 'Diyar al Muharraq',
    description : 'A visualization of the largest privately built community in Bahrain',
    href: 'https://vimeo.com/386603551',
    isDemo: false,
    tags: ['Rendering', 'Architecture'],
  },
  {
    imageSrc: '/portfolio/Lakefront.webp',
    title: 'Chicago SmartLights ComEd',
    description: 'A detailed techincal rendering of the Smart Lighting Implementation plan',
    href: '/portfolio/Lakefront.webp',
    isDemo: false,
    tags: ['Rendering', 'Energy'],  
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