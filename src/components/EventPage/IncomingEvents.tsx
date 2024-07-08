import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SingleEvent from "./SingleEvent";

const IncomingEvents = () => {
  return (
    <div className="mt-4">
      <Carousel className="w-full "
      >
        <CarouselContent>
          <CarouselItem >
            <SingleEvent />
          </CarouselItem>
         
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default IncomingEvents;
