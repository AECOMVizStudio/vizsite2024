

function HeroStats() {
  return (
    <div className="flex flex-wrap w-full justify-center items-center py-8">
      <div className="w-full md:flex md:flex-row md:justify-evenly md:items-center h-full space-y-8 md:space-y-0 space-x-0 md:space-x-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold">$1bn</h2>
          <p className="text-gray-700">Revenue Gained</p>
        </div>
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold">2,000+</h2>
          <p className="text-gray-700">Projects</p>
        </div>



        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold">5</h2>
          <p className="text-gray-700">Industry Awards</p>
        </div>
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold">100+</h2>
          <p className="text-gray-700">Years of Experience</p>
        </div>
      </div>
    </div>
  );
}

export default HeroStats;
