import EventROw from "./EventROw";

const AvailableEvents = () => {
  return (
    <div className="mt-4">
      <h1 className="font-Inter text-[#130E0A] font-[700] text-xl border-b-2 border-black  w-fit">
        Évènements disponible
      </h1>
      <div className="">
        <EventROw />
        <EventROw />
        <EventROw />
      </div>
    </div>
  );
};

export default AvailableEvents;
