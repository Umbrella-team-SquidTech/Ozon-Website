import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SingleEvent from "./SingleEvent";
import SingleEventMObile from "./SingleEventMObile";
import SingleEventMobileCol from "./SingleEventMobileCol";

const IncomingEvents = () => {
  return (
    <>
      {/* desktop version */}
      <div className="mt-4 hidden md:block">
        <Carousel className="w-full ">
          <CarouselContent>
            <CarouselItem className="flex flex-row gap-2">
              <SingleEvent />
              <SingleEvent />
              <SingleEvent />
            </CarouselItem>
            <CarouselItem className="flex flex-row gap-2 ">
              <SingleEvent />
              <SingleEvent />
              <SingleEvent />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      {/* mobile version */}
      <div className="flex flex-row overflow-x-auto gap-2 pl-2 pt-2 md:hidden">
        <SingleEventMObile />
        <SingleEventMObile />
        <SingleEventMObile />
        <SingleEventMObile />
        <SingleEventMObile />
      </div>

    </>
  );
};

export default IncomingEvents;
