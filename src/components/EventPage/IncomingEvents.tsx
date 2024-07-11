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
    // get only the events where user_is_participating is true
    events = events.filter((event) => event.user_is_participating);
    console.log(events);
  return (
    <>
      {/* desktop version */}
      {events.length > 0 ? 
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
     </div>:
      <div className="flex flex-row justify-center items-center h-40">
        <p className="text-[#130E0A] font-Outfit text-[700] text-xl">Aucune participation</p>
        </div>}
        
      {/* mobile version */}
    { events.length > 0 ?    
    <div className="flex flex-row overflow-x-auto gap-2 pl-2 pt-2 md:hidden">
          {events.map((event, i) => (
            <SingleEventMObile event={event} key={i} />
          ))}
        </div>:
        <div className="flex flex-row justify-center items-center h-40 md:hidden">
          <p className="text-[#130E0A] font-Outfit text-[700] text-xl">Aucune participation</p>
          </div>}
    </>
  );
};

export default IncomingEvents;
