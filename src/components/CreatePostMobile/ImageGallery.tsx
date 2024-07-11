import { Minus } from "lucide-react";
interface props {
  images: string[];
  setImages: (images: string[]) => void;
}

const ImageGallery = ({ images, setImages }: props) => {
  const removeImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
  };

  return (
    <div className="flex flex-wrap gap-4">
      {images.length > 0
        ? images.map((image, index) => (
            <div key={index} className="w-48 h-48 relative ">
              <img
                src={image}
                alt={`image ${index + 1}`}
                className="h-full w-full object-cover rounded-sm"
              />
              <button
                onClick={() => removeImage(index)}
                className="absolute -top-2 -left-2 bg-red-700 text-white rounded-full"
              >
                <Minus />
              </button>
            </div>
          ))
        : null}
    </div>
  );
};

export default ImageGallery;
