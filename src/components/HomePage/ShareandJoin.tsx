import { Share } from "lucide-react";
import { CircleArrowRight } from "lucide-react";

const SHareandJoin = () => {
  return (
    <div
      className="  absolute bottom-3 right-2 md:left-2  flex md:flex-row  md:gap-4 bg-[#BAB8B859]/35 
      md:bg-inherit
    rounded-full md:rounded-none "
    >
      <button className="md:bg-white/35 flex flex-row items-center justify-center gap-2 rounded-xl py-1 md:px-3 px-1">
        <Share size={20} strokeWidth={3} className="hidden md:block" />
        <Share
          size={16}
          strokeWidth={2}
          className="md:hidden block text-white"
        />

        <p className=" font-Inter font-[700] text-base hidden md:block">
          Partager l'évènement
        </p>
      </button>
      <button className="md:bg-white/35 flex flex-row items-center justify-center gap-2 rounded-xl py-1 md:px-3  px-1">
        <CircleArrowRight
          size={20}
          strokeWidth={3}
          className="hidden md:block"
        />
        <CircleArrowRight
          size={16}
          strokeWidth={2}
          className="md:hidden block text-white"
        />
        <p className=" font-Inter font-[700] text-base hidden md:block">
          Voir les détails
        </p>
      </button>
    </div>
  );
};

export default SHareandJoin;
