import TypedText from "./TypedText"

export default function Title(){
    return(
        <div className=" text-gray-700 flex items-center">
          <div className="container mx-auto py-6">
            <h1 className="text-6xl max-w-6xl font-bold mx-auto mt-12 text-left text-gradient" style={{ height: '130px' }}>
              AECOM Viz Studio -  
              <TypedText />
            </h1>
            <h2 className="text-lg max-w-2xl mx-auto my-8 text-center">Welcome to our project showcase. We excel in bringing ideas to life through stunning visuals. Discover our work and get in touch with us.</h2>
          </div>
        </div>
    )
}

