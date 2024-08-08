interface PortfolioItemProps {
    imageSrc: string;
    title: string;
    href: string;
    description?: string;
    tags: string[];
}


const PortfolioItem = ({ imageSrc, title, href, description, tags}: PortfolioItemProps) => {
    return(
        <div className="portfolio-item relative group p-2">
            <div className="relative overflow-hidden">
                
                <img
                    src={imageSrc + `?text=${title}`}
                    alt={title}
                    className="w-full h-auto object-cover mb-2 transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                />
                {/* Begin hover visible content */}
                <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col justify-center items-center text-center p-4 z-15">
                    <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
                    <p className="text-white mb-4">
                    {description ? description : 'Include a detailed desciption here'}
                    </p>
                    <a
                    href={href}
                    className="bg-white text-black font-semibold py-2 px-4 rounded shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105"
                    > View Project </a>
                </div>
                    {/* End hover visible content */}

               
            </div>
            <h3 className="text-lg font-semibold mb-1 mt-2">{title}</h3>
            <div className="flex flex-wrap space-x-2">
                {tags.map((tag, index) => (
                <span key={index} className="bg-gray-200 px-2 py-1 text-sm rounded">
                    {tag}
                </span>
                ))}
            </div>
        </div>
    )
}

export default PortfolioItem;