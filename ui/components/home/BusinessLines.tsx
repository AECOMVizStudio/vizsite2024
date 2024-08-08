import Image from 'next/image'

const industries = [
  {
    icon: '/svg/train.svg', 
    title: 'Transportation',
    description: 'Innovative solutions for the transportation industry.',
  },
  {
    icon: '/svg/electricity.svg', 
    title: 'Utilities',
    description: 'Reliable services for power and water management.',
  },
  {
    icon: '/svg/bridge.svg', 
    title: 'Infrastructure',
    description: 'Sustainable development for large scale city projects',
  },
];


  const BusinessLines = () => {

    return (
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold">Business Lines We Serve</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <div key={industry.title} className="group relative bg-white p-6 rounded-lg shadow-lg overflow-hiddentransform transition-transform duration-300 hover:scale-105">
                <div className="absolute right-1 inset-y-0 opacity-20 group-hover:opacity-70">
                  <Image
                    src={industry.icon}
                    alt={industry.title}
                    width={100}
                    height={100}
                    className='object-cover'
                    
                  />
                </div>
                <div className="relative">
                  <h3 className="text-xl font-bold mb-2">{industry.title}</h3>
                  <p className="text-gray-600">{industry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
    </section>
    )
}


export default BusinessLines