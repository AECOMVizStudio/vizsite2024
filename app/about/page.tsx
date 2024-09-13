import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('@/ui/tools/ModelViewer'), {
  loading: () => <p>Loading model...</p>,
  ssr: false,
});


import Image from "next/image";

const values: string[] = ['Detail-Oriented', 'Collaborative', 'Innovative', 'Professional', 'Client-Focused']


const Page = () => {
    return (
      <section className="flex flex-col items-center justify-center p-8 md:p-16 bg-white">
      
      <div className="pt-24 m-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">About the Studio</h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed my-8">
          Our team is dedicated to bringing your visions to life through stunning 3D visualizations. With a focus on quality and creativity, we strive to exceed your expectations with every project we undertake. Our creative professionals illustrate concepts and amplify project potential. We create clarity by delivering impactful and engaging stories that resonate with your stakeholders and clients.
        </p>

        <div className="border-t border-gray-300 mt-8 pt-4">
          <h3 className="text-xl text-gray-600 mb-4">Our Core Values</h3>
          <div className="flex flex-wrap gap-4">

          {values.map((value, index) => (
            <span key={index} className="px-4 py-2 bg-gray-200 border-gray-700 text-lg shadow-md">
                {value}
            </span>
          ))}

          </div>
        </div>
      </div>
      <div className=''>

          <DynamicComponent />
      
      </div>
    </section>
    );
  }
export default Page