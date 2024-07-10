import CheckIcon from "@/assets/checkCircle.svg";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { CircleArrowRight, Share } from "lucide-react";
import { useEffect, useState } from "react";
import placeholderImage from "@/assets/placeholder.png";

interface props {
  event: EventI;
}

const SingleEventMObile = ({ event }: props) => {
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
    <Card
      className={`p-4 w-4/6  shrink-0 flex flex-col items-center justify-center  `}
    >
      <img
        src={event.images[0] ? event.images[0] : placeholderImage}
        className="h-full w-full object-cover"
        alt="event image"
      />
      <div className="pt-3">
        <p className="text-[#130E0A]/50 font-[700] text-[12px] md:text-base  ">
          {event.start}
        </p>
        <h3 className="text-TypoColor text-[14px]  md:text-xl font-[600] h-16">
          {event.name}
        </h3>
        <div className="flex flex-row gap-1 items-center pt-2 ">
          <img src={CheckIcon} alt="CheckIcon" width={16} />
          <p className="text-[#130E0A]/50 font-[400] text-xs md:text-base">
            {event.participations > 1
              ? `${event.participations} présents`
              : `${event.participations} présent`}
            . Evenement disponible hard coded
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
      </div>
    </Card>
  );
};

export default SingleEventMObile;
