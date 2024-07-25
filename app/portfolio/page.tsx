import PortfolioItem from "@/ui/components/portfolio/PortfolioItem";

const portfolioItems = [
  {
    imageSrc:'/portfolio/portfolioImage.png',
    title: 'Riverfront Park',
    href: '/featured',
    tags: ['3D' , 'Architecture']
  },

  {
    imageSrc: '/images/virtual-room.jpg',
    title: 'Virtual Room',
    href: 'https://aecomvis2023.herokuapp.com/portfolio',
    tags: ['Buildings', 'Electricity'],
  },
  {
    imageSrc: '/images/immersive-project.jpg',
    title: 'Immersive Project',
    href: 'https://aecomvis2023.herokuapp.com/portfolio',
    tags: ['Simulation'],
  },
  {
    imageSrc: '/images/video.jpg',
    title: 'Video',
    href: 'https://aecomvis2023.herokuapp.com/portfolio',
    tags: ['Interactive'],
  },
  {
    imageSrc: '/images/something-else-1.jpg',
    title: 'Something Else',
    href: 'https://aecomvis2023.herokuapp.com/portfolio',
    tags: ['Architecture'],
  },
  {
    imageSrc: '/images/something-else-2.jpg',
    title: 'Something Else',
    href: 'https://aecomvis2023.herokuapp.com/portfolio',
    tags: ['VR'],
  },
  {
    imageSrc: '/images/something-else-3.jpg',
    title: 'Something Else',
    href: 'https://aecomvis2023.herokuapp.com/portfolio',
    tags: ['Architecture'],
  },
  {
    imageSrc: '/images/something-else-4.jpg',
    title: 'Something Else',
    href: 'https://aecomvis2023.herokuapp.com/portfolio',
    tags: ['VR'],
  },
]

const Page: React.FC = () => {
    return (
      <>
        <div className=" text-gray-700">
          <div className="container mx-auto py-12 text-left p-4">
            <h1 className="text-4xl font-bold">Portfolio</h1>
          </div>
        </div>

        <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
          {portfolioItems.map((item, index) => (
            <PortfolioItem key={index} {...item} />
          ))}
        </div>
      </>
    );
  }

export default Page;