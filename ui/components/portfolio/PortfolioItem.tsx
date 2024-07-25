interface PortfolioItemProps {
    imageSrc: string;
    title: string;
    href: string;
    tags: string[];
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ imageSrc, title, href, tags}) => {
    return(
        <div className="portfolio-item p-2">
            <a href = {href}><img src={imageSrc} alt={title} className="w-full h-auto object-cover mb-2" /> </a>
            <h3 className="text-lg font-semibold mb-1">{title}</h3>
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