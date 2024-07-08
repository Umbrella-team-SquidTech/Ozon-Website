import CheckIcon from "@/assets/HomePage/checkCircle.svg";
import ImageBackground from "@/assets/HomePage/EventBackground.png";
import { Share } from "lucide-react";
import { CircleArrowRight } from 'lucide-react';


const SuggestedEvent = () => {
  return (
    <div className="mt-4 w-full  border border-[#BAB8B8] rounded-xl flex flex-row ">
      <div className="w-1/2 p-7 font-Inter flex flex-col justify-between ">
        <div className="space-y-1">
          <p className="text-[#130E0A]/50 font-[700] ">
            Lundi, 21 Juillet 2024 · 14:00
          </p>
          <h3 className="text-PrimaryColor text-2xl font-[700]">
            Plantation d’arbres pour créer une forêt
          </h3>
        </div>
        <div className="flex flex-row gap-1 items-center ">
          <img src={CheckIcon} alt="CheckIcon" width={16} />
          <p className="text-[#130E0A]/50 font-[400]">81 présents </p>
        </div>
      </div>
      <div className="w-1/2 relative">
        <img
          src={ImageBackground}
          alt="eventBackground"
          className="rounded-r-xl w-full h-full object-cover  "
        />
        <div className="absolute bottom-3 left-2  flex flex-row gap-4  ">
          <button className="bg-[#BAB8B859]/35 flex flex-row items-center justify-center gap-2 rounded-xl py-1 px-3">
            <Share size={20} strokeWidth={3} />
            <p className=" font-Inter font-[700] text-base">
              Partager l'évènement
            </p>
          </button>
          <button className="bg-[#BAB8B859]/35 flex flex-row items-center justify-center gap-2 rounded-xl py-1 px-3">
            <CircleArrowRight size={20} strokeWidth={3} />
            <p className=" font-Inter font-[700] text-base">
            Rejoindre cet évènement
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuggestedEvent;
