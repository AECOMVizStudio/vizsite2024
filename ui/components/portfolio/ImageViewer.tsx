
interface ImageViewerProps {
    imageSrc: string;
    altText: string;
    isOpen: boolean;
    onClose: ()=> void;
}

const ImageViewer = ({ imageSrc, altText, isOpen, onClose }: ImageViewerProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="relative max-w-4xl w-full ">
            <button
              onClick={onClose}
              className="absolute top-0 right-0  text-white text-2xl p-4"
            >
              &times;
            </button>
            <img
              src={imageSrc}
              alt={altText}
              className="w-full h-auto object-cover rounded-sm"
            />
          </div>
        </div>
      );
    };

export default ImageViewer;