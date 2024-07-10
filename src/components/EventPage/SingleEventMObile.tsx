import CheckIcon from "@/assets/checkCircle.svg";
import { Card } from "../ui/card";
import EventImage from "@/assets/EventPage/EventImage.png";
import { Button } from "../ui/button";
import { CircleArrowRight, Share } from "lucide-react";
import { useEffect, useState } from "react";

const SingleEventMObile = () => {
  const [width] = useState(window.innerWidth);
  const [breakpoint, setBreakpoint] = useState("");
  useEffect(() => {
    const width = window.innerWidth;
    setBreakpoint(width + "px");
    window.addEventListener("resize", () => {
      const width = window.innerWidth;
      setBreakpoint(width + "px");
      //   console.log(breakpoint);
    });
  }, [width]);

  return (
    <Card className={`p-4 w-4/6  shrink-0 flex flex-col items-center justify-center  `}>
      <img src={EventImage} alt="event image" />
      <div className="pt-3">
        <p className="text-[#130E0A]/50 font-[700] text-[12px] md:text-base  ">
          Lundi, 21 Juillet 2024 · 14:00
        </p>
        <h3 className="text-TypoColor text-[14px]  md:text-xl font-[600] ">
          Plantation d’arbres pour créer une forêt
        </h3>
        <div className="flex flex-row gap-1 items-center pt-2 ">
          <img src={CheckIcon} alt="CheckIcon" width={16} />
          <p className="text-[#130E0A]/50 font-[400] text-xs md:text-base">
            81 présents{" "}
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col items-center pt-2 space-y-2">
        <Button className=" space-x-2 bg-SecondaryColor hover:bg-PrimaryColor">
          <CircleArrowRight
            size={20}
            strokeWidth={3}
            className="hidden md:block"
          />
            Rejoindre l'évènement
        </Button>
        {/* <Button
          className=" self-center space-x-2    border border-[#2D3A3A] hover:bg-[#2D3A3A] group "
          variant={"outline"}
        >
          <Share
            size={20}
            strokeWidth={3}
            className="hidden md:block group-hover:text-white"
          />

            Partager l'évènement
        </Button> */}
      </div>
    </Card>
  );
};

export default SingleEventMObile;
