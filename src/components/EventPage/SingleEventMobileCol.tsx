import CheckIcon from "@/assets/checkCircle.svg";
import ImageBackground from "@/assets/placeholder.png";
import ShareandJoin from "@/components/HomePage/ShareandJoin";
import { Button } from "../ui/button";
import { compareDates } from "@/utils/formatDate";
interface prop {
  event: EventI;
}

const SingleEventMobileCol = ({ event }: prop) => {
  return (
    <div className="mt-4 w-full  border border-[#BAB8B8] rounded-xl flex flex-row ">
      <div className="w-4/6 md:w-1/2 p-4 md:p-7 font-Inter flex flex-col justify-between gap-2 md:gap-0">
        <div className="space-y-1">
          <p className="text-[#130E0A]/50 font-[700] text-xs md:text-base  ">
            {event.start}
          </p>
          <h3 className=" bg-gradient-to-r from-[#11998E]  to-[#38EF7D] bg-clip-text text-transparent  md:text-2xl font-[700] h-16">
            {event.name}
          </h3>
        </div>
        <div className="flex flex-row gap-1 items-center ">
          <img src={CheckIcon} alt="CheckIcon" width={16} />
          <p className="text-[#130E0A]/50 font-[400] text-xs md:text-base">
            {event.participations > 1
              ? `${event.participations} présents`
              : `${event.participations} présent`}
            {!compareDates(event.start, new Date().toISOString())
              ? "Evenement passé"
              : "Evenement à venir"}
          </p>
        </div>
        <Button className=" self-center  bg-SecondaryColor  hover:bg-PrimaryColor">
          Rejoindre l'évènement
        </Button>
      </div>
      <div className="w-2/6 md:w-1/2 relative">
        <img
          src={event.images[0] ? event.images[0] : ImageBackground}
          alt="eventBackground"
          className="rounded-r-xl w-full h-full object-cover  "
        />

        <ShareandJoin suggestedEvent={event} />

      </div>
    </div>
  );
};

export default SingleEventMobileCol;
