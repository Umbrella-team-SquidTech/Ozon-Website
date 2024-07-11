import CheckIcon from "@/assets/checkCircle.svg";
import placeholder from "@/assets/placeholder.png";
import ShareandJoin from "@/components/HomePage/ShareandJoin";
import { formatDate } from "@/utils/formatDate";

interface prop {
  suggestedEvent: EventI | null;
}

const SuggestedEvent = ({ suggestedEvent }: prop) => {
  return (
    <div className="mt-4 w-full border border-[#BAB8B8]h-40 md:h-60 rounded-xl flex flex-row justify-between">
      <div className="w-4/6 md:w-1/2 p-4 md:p-7 font-Inter flex flex-col justify-between gap-2 md:gap-0">
        <div className="space-y-1">
          <p className="text-[#130E0A]/50 font-[700] text-xs md:text-base  ">
            {formatDate(suggestedEvent?.created_at || "date")}
          </p>
          <h3 className=" bg-gradient-to-r from-[#11998E]  to-[#38EF7D] bg-clip-text text-transparent  md:text-2xl font-[700]">
            {suggestedEvent?.name || "Nom de l'évènement"}
          </h3>
        </div>
        <div className="flex flex-row gap-1 items-center ">
          <img src={CheckIcon} alt="CheckIcon" width={16} />
          <p className="text-[#130E0A]/50 font-[400] text-xs md:text-base">
            {(suggestedEvent?.participations ?? 0) > 1
              ? `${suggestedEvent?.participations} présents`
              : `Aucune participation`}
          </p>
        </div>
      </div>
      <div className="w-2/6 md:w-2/5 h- relative">
        <img
          src={
            suggestedEvent?.images[0] ? suggestedEvent.images[0] : placeholder
          }
          alt="eventBackground"
          className="rounded-r-xl w-full h-full object-fit  "
        />
        {suggestedEvent && <ShareandJoin suggestedEvent={suggestedEvent} />}
      </div>
    </div>
  );
};

export default SuggestedEvent;
