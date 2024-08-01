function HeroStats() {
    return (
      <div className="flex flex-wrap w-full">
        <div className="w-full md:w-1/2 bg-black text-white flex flex-row items-center justify-center">
          <div className="text-center p-10">
            <h2 className="text-5xl font-bold">$125m</h2>
            <p className="text-gray-20">Revenue Gained</p>
          </div>
          <div className="text-center p-10">
            <h2 className="text-5xl font-bold">200+</h2>
            <p className="text-gray-200">Projects</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-right-stat text-white flex flex-row items-center justify-center">
          <div className="text-center p-10">
            <h2 className="text-5xl font-bold">13</h2>
            <p className="text-gray-200">Industry Awards</p>
          </div>
          <div className="text-center p-10">
            <h2 className="text-5xl font-bold">70+</h2>
            <p className="text-gray-200">Years of Experience</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default HeroStats;