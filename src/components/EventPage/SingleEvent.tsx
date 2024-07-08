import CheckIcon from "@/assets/checkCircle.svg";
import { Card } from "../ui/card";
import EventImage from "@/assets/EventPage/EventImage.png";
import { Button } from "../ui/button";
import { CircleArrowRight, Share } from "lucide-react";

const SingleEvent = () => {
  return (
    <Card className="p-4 w-2/6 flex flex-col items-center justify-center">
      <img src={EventImage} alt="event image" />
      <div className="pt-3">
        <p className="text-[#130E0A]/50 font-[700] text-xs md:text-base  ">
          Lundi, 21 Juillet 2024 · 14:00
        </p>
        <h3 className="text-TypoColor  md:text-xl font-[600] ">
          Plantation d’arbres pour créer une forêt
        </h3>
        <div className="flex flex-row gap-1 items-center pt-2 ">
          <img src={CheckIcon} alt="CheckIcon" width={16} />
          <p className="text-[#130E0A]/50 font-[400] text-xs md:text-base">
            81 présents{" "}
          </p>
        </div>
      </div>
      <div className="w-full pt-4 space-y-2">
        <Button className="w-full space-x-2 bg-SecondaryColor hover:bg-PrimaryColor">
          <CircleArrowRight
            size={20}
            strokeWidth={3}
            className="hidden md:block"
          />
          <p className=" font-Inter font-[700] text-base hidden md:block">
            Rejoindre cet évènement
          </p>
        </Button>
        <Button
          className="w-full space-x-2    border border-[#2D3A3A] hover:bg-[#2D3A3A] group "
          variant={"outline"}
        >
          <Share size={20} strokeWidth={3} className="hidden md:block group-hover:text-white" />

          <p className=" group-hover:text-white font-Inter font-[700] text-base hidden md:block">
            Partager cet l'évènement
          </p>
        </Button>
      </div>
    </Card>
  );
};

export default SingleEvent;
