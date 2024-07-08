import { Share } from "lucide-react";
import { CircleArrowRight } from 'lucide-react';

const SHareandJoin = () => {
  return (
    <div className="hidden  absolute bottom-3 left-2  md:flex flex-row gap-4  ">
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
  )
}

export default SHareandJoin