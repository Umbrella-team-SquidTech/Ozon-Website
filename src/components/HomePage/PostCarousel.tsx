import PostImage from "@/assets/HomePage/PostImage.png";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
const PostCarousel = () => {
  return (
    <Carousel className="relative pt-2 md:w-2/6">
    <CarouselPrevious className="text-PrimaryColor bg-white/80 absolute left-2 z-10" />
    <CarouselContent className="relative z-0">
      <CarouselItem>
        <img src={PostImage} alt="post" className="w-full h-full" />
      </CarouselItem>
      <CarouselItem>
        <img src={PostImage} alt="post" className="w-full h-full" />
      </CarouselItem>
      <CarouselItem>
        <img src={PostImage} alt="post" className="w-full h-full" />
      </CarouselItem>
    </CarouselContent>
    <CarouselNext className="text-PrimaryColor bg-white/80     absolute right-2 z-10" />
  </Carousel>
  )
}

export default PostCarousel