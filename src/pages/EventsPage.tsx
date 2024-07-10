import AvailableEvents from "@/components/EventPage/AvailableEvents";
import IncomingEvents from "@/components/EventPage/IncomingEvents";
import RootLayout from "@/components/RootLayout";
import IncomingEventsSkeleton from "@/components/EventPage/IncomingEventsSkeleton";
import AvailableEventsSkeleton from "@/components/EventPage/AvailableEventsSkeleton";
import MapCta from "@/components/EventPage/MapCta";
const Events = () => {
  return (
    <RootLayout>
      <div className="mt-4 pt-0 md:px-20">
        <div>
          <h1 className="mx-2 font-Outfit text-[#130E0A] font-[700] text-xl border-b-2 border-black w-fit">
            Évènements à venir
          </h1>
          <div className="px-2 md:px-0"><MapCta /></div>
          <IncomingEvents />
          <AvailableEvents />
          {/* <IncomingEventsSkeleton />
          <AvailableEventsSkeleton /> */}
        </div>
      </div>
    </RootLayout>
  );
};

export default Events;
