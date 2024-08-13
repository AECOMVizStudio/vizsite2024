import Image from "next/image";

const values: string[] = ['Detail-Oriented', 'Collaborative', 'Innovative', 'Professional', 'Client-Focused']


const Page = () => {
    return (
      <section className="flex flex-col lg:flex-row items-center md:items-start justify-between p-8 md:p-16 bg-white">
      {/* Text Section */}
      <div className="pt-24 lg:w-1/2 mb-8 md:mb-0">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">About the Studio</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed my-8">
          Our team is dedicated to bringing your visions to life through stunning 3D visualizations. With a focus on quality and creativity, we strive to exceed your expectations with every project we undertake.
        </p>

        <div className="border-t border-gray-300 mt-8 pt-4">
          <h3 className="text-xl text-gray-600 mb-4">// Our Core Values</h3>
          <div className="flex flex-wrap gap-4">

          {values.map((value, index) => (
            <span key={index} className="px-4 py-2 bg-gray-200 border-gray-700 text-lg shadow-md">
                {value}
            </span>
          ))}

          </div>
        </div>
      </div>
      <div className="mx-auto lg:py-24 py-8 flex justify-center">
        <Image
        src={'/about_us.jpeg'}
        width={700}
        height={600}
        alt="a studio"
        ></Image> 
      </div>
    </section>
    );
  }
export default Page