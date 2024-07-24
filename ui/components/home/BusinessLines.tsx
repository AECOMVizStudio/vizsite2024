import { SparklesIcon } from "@heroicons/react/24/solid";

interface BusinessLineCardProps {
  
    title: string;
    
}

interface BusinessLine {
  
    title: string;
  }


  


const BusinessLineCard: React.FC<BusinessLineCardProps> = ({ title }) => {
    return (
      <div className="bg-white border-solid flex shadow-md p-6">
        <div className=" mb-4">
          <SparklesIcon title={title} className="w-10 h-10" />
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
    
      </div>
    );
};

  const BusinessLines = () => {
    const businessLinesData: BusinessLine[] = [
      {
    
        title: 'Transportation',
    
      },
      {

        title: 'Power & Water',
    
      },
      {

        title: 'Buildings & Places',

      },
    ];

    return (
        <section className="py-24">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Business Lines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessLinesData.map((line, index) => (
              <BusinessLineCard key={index} {...line} />
            ))}
          </div>
        </div>
      </section>
    )
}


export default BusinessLines