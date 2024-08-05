function HeroStats() {

  // border-r-2 border-amber-800

  //border-l-2 border-amber-800
    return (
      <div className="flex flex-wrap w-full">
        <div className="w-full md:w-1/2 flex flex-row items-center justify-evenly ">
          <div className="text-center p-10">
            <h2 className="text-5xl font-bold">$125m</h2>
            <p className="text-gray-700">Revenue Gained</p>
          </div>
          <div className="text-center p-10">
            <h2 className="text-5xl font-bold">200+</h2>
            <p className="text-gray-700">Projects</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-row items-center justify-evenly ">
          <div className="text-center p-10">
            <h2 className="text-5xl font-bold">13</h2>
            <p className="text-gray-700">Industry Awards</p>
          </div>
          <div className="text-center p-10">
            <h2 className="text-5xl font-bold">70+</h2>
            <p className="text-gray-700">Years of Experience</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default HeroStats;