import SingleEvent from "@/components/EventPage/SingleEvent";
import RootLayout from "@/components/RootLayout";

const Events = () => {
  return (
    <RootLayout>
      <div className="mt-4  pt-0 md:px-20">
        <div>
        <h1 className="font-Inter text-[#130E0A] font-[700] text-xl border-b-2 border-black  w-fit">Évènements à venir</h1>
        <div className="mt-4">
          <SingleEvent />
        </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default Events;
