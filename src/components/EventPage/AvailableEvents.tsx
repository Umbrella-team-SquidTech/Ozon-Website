import EventROw from "./EventROw";
import SingleEventMobileCol from "./SingleEventMobileCol";

const AvailableEvents = () => {
  return (
    <>
    {/* dektop version */}
    <div className="mt-4 hidden md:block">
      <h1 className="font-Inter text-[#130E0A] font-[700] text-xl border-b-2 border-black  w-fit">
        Évènements disponible
      </h1>
      <div className="">
        <EventROw />
        <EventROw />
        <EventROw />
      </div>
    </div>
    {/* mobile version */}
    <div className="px-2 pt-3"> 
      <h1 className="font-Inter text-[#130E0A] font-[700] text-xl border-b-2 border-black  w-fit">
        Évènements disponible
      </h1>
      <div className="flex flex-col  gap-2 md:hidden">
       <SingleEventMobileCol />
       <SingleEventMobileCol />
       <SingleEventMobileCol />
      </div>
    </div>
    </> 
  );
};

export default AvailableEvents;
