import PostImage from "@/assets/HomePage/PostImage.png";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
interface props {
  postGallery: string[];
}
const PostCarousel = ({ postGallery }: props) => {
  if (!postGallery.length) return null;
  return (
    <Carousel className="relative pt-2 md:w-2/6">
      <CarouselPrevious className="text-PrimaryColor bg-white/80 absolute left-2 z-10" />
      <CarouselContent className="relative z-0">
        {postGallery.map((image, index) => (
          <CarouselItem key={index}>
            <img src={image} alt="post" className="w-full h-full" />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext className="text-PrimaryColor bg-white/80     absolute right-2 z-10" />
    </Carousel>
  );
};

export default PostCarousel;
