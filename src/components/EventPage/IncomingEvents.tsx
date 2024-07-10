import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SingleEvent from "./SingleEvent";

interface prop {
  events: EventI[];
}

const IncomingEvents = ({ events }: prop) => {
  return (
    <div className="mt-4">
      <Carousel className="w-full ">
        <CarouselContent>
          {events.map((event, i) => (
            <CarouselItem className=" md:basis-1/2 lg:basis-1/3">
              <SingleEvent event={event} key={i} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default IncomingEvents;
