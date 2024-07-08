import CheckIcon from "@/assets/HomePage/checkCircle.svg";
import ImageBackground from "@/assets/HomePage/EventBackground.png";
import SHareandJoin from "@/components/HomePage/ShareandJoin"

const SuggestedEvent = () => {
  return (
    <div className="mt-4 w-full  border border-[#BAB8B8] rounded-xl flex flex-row ">
      <div className="w-4/6 md:w-1/2 p-4 md:p-7 font-Inter flex flex-col justify-between gap-2 md:gap-0">
        <div className="space-y-1">
          <p className="text-[#130E0A]/50 font-[700] text-xs md:text-base  ">
            Lundi, 21 Juillet 2024 · 14:00
          </p>
          <h3 className="text-PrimaryColor  md:text-2xl font-[700]">
            Plantation d’arbres pour créer une forêt
          </h3>
        </div>
        <div className="flex flex-row gap-1 items-center ">
          <img src={CheckIcon} alt="CheckIcon" width={16}  />
          <p className="text-[#130E0A]/50 font-[400] text-xs md:text-base">81 présents </p>
        </div>
      </div>
      <div className="w-2/6 md:w-1/2 relative">
        <img
          src={ImageBackground}
          alt="eventBackground"
          className="rounded-r-xl w-full h-full object-cover  "
        />
          <SHareandJoin />
      </div>
    </div>
  );
};

export default SuggestedEvent;
