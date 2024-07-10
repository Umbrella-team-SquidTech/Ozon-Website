import EventROw from "./EventROw";
import SingleEventMobileCol from "./SingleEventMobileCol";

interface prop {
  events: EventI[];
}

const AvailableEvents = ({ events }: prop) => {
  return (
    <>
      {/* dektop version */}
      <div className="mt-4 hidden md:block">
        <h1 className="font-Inter text-[#130E0A] font-[700] text-xl border-b-2 border-black  w-fit">
          Évènements disponible
        </h1>
        <div className="">
          {events.map((event) => (
            <EventROw event={event} />
          ))}
        </div>
      </div>
      {/* mobile version */}
      <div className="px-2 pt-3 md:hidden block">
        <h1 className="font-Inter text-[#130E0A] font-[700] text-xl border-b-2 border-black w-fit ">
          Évènements disponible
        </h1>
        <div className="flex flex-col  gap-2 pb-[69px]">
          {events.map((event) => {
            return <SingleEventMobileCol event={event} />;
          })}
        </div>
      </div>
    </>
  );
};

export default AvailableEvents;
