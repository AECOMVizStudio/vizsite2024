import TypedText from "./TypedText"

export default function Title(){
    return(
        <div className="flex-start relative min-w-52">
          <div className="container py-6">
            <h1 className="text-6xl max-w-6xl min-w-52 font-extrabold mt-12 text-left text-gray-200" style={{ height: '130px' }}>
              AECOM Viz Studio -  
              <TypedText />
            </h1>
            <h2 className="text-gray-300 text-lg max-w-2xl mx-auto my-8 text-center">Welcome to our project showcase. We excel in bringing ideas to life through stunning visuals. Discover our work and get in touch with us.</h2>
          </div>
        </div>
    )
}

