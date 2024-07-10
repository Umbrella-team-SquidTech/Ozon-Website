import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SingleEvent from "./SingleEvent";
import SingleEventMObile from "./SingleEventMObile";

interface prop {
  events: EventI[];
}

const IncomingEvents = ({ events }: prop) => {
  return (
    <>
      {/* desktop version */}
      <div className="mt-4 hidden md:block">
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
      {/* mobile version */}
      <div className="flex flex-row overflow-x-auto gap-2 pl-2 pt-2 md:hidden">
        {events.map((event, i) => (
          <SingleEventMObile event={event} key={i} />
        ))}
      </div>
    </>
  );
};

export default IncomingEvents;
