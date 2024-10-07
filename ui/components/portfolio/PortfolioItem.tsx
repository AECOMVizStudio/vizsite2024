'use client'
import { useState } from 'react'
import ImageViewer from './ImageViewer';
import { oneMinus } from 'three/webgpu';

interface PortfolioItemProps {
    imageSrc: string;
    title: string;
    href: string;
    demohref?: string;
    isDemo:boolean;
    description?: string;
    tags: string[];
}


const PortfolioItem = ({ imageSrc, title, href, demohref, isDemo, description, tags}: PortfolioItemProps) => {

    const [isViewerOpen, setIsViewerOpen] = useState(false)

    const handleImageClick = () => {
        setIsViewerOpen(true)
    }

    const closeViewer = () => {
        setIsViewerOpen(false)
    }
    const handleClick = () => {
        // maybe in the future have videos open in a modal as well
        if (href == imageSrc) {
            handleImageClick();
        } else {
            window.open(href, '_blank');
        }
    }

    const handleDemoClick = () => {
        if (demohref && typeof demohref === 'string' && demohref.trim() !== '') {
            window.open(demohref, '_blank');
        } else {
            console.error('Demo link is not provided or invalid');
        }
    };
    




    return(
        <div className="portfolio-item relative group p-2">
            <div className="relative overflow-hidden">
                
                <img
                    onClick={handleClick}
                    src={imageSrc}
                    alt={title}
                    className="w-full h-auto object-cover mb-2 transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                />

                {/* Begin hover visible content */}
                <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col justify-center items-center text-center p-4 z-15">
                    <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
                    <p className="text-white mb-4">
                    {description ? description : 'Include a detailed desciption here'}
                    </p>
                    <div className='flex flex-row space-x-2'>
                        <button
                            onClick={handleClick}
                            className="bg-white text-black font-semibold py-2 px-4 rounded shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105"
                            >
                            View Project
                        </button>

                        {isDemo && demohref &&          
                            <button
                            onClick={handleDemoClick}
                            className="bg-white text-black font-semibold py-2 px-4 rounded shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105"
                            >
                            Demo
                        </button>
                        }
                            
                        
                    </div>
                </div>
                    {/* End hover visible content */}
            </div>


            <h3 className="text-lg font-semibold mb-1 mt-2">{title}</h3>
                <div className="flex flex-row space-x-2">
                    {tags.map((tag, index) => (
                    <span key={index} className="bg-gray-200 p-2 text-sm shadow-md">
                        {tag}
                    </span>
                    ))}
                </div>
            {isViewerOpen && (
                <ImageViewer
                    imageSrc={imageSrc}
                    altText={title}
                    isOpen={isViewerOpen}
                    onClose={closeViewer}
                />
            )}
        </div>
    )
}

export default PortfolioItem;