import CheckIcon from "@/assets/checkCircle.svg";
import { Card } from "../ui/card";
import placeholderImage from "@/assets/placeholder.png";
import { Button } from "../ui/button";
import { CircleArrowRight, Share } from "lucide-react";
import { Link } from "react-router-dom";

interface prop {
  event: EventI;
}

const EventROw = ({ event }: prop) => {
  return (
    <Link to={`/events/${event.id}`}>
      <div className="mt-4">
        <Card className="p-4 w-full h-full flex flex-row-reverse gap-4  justify-center">
          <div className="w-full h-72">
            <img
              src={event.images[0] ? event.images[0] : placeholderImage}
              alt="event image"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="w-1/2 flex flex-col items-start justify-evenly  ">
            <div className="pt-3">
              <p className="text-[#130E0A]/50 font-[700] text-xs md:text-base  ">
                {event.start}
              </p>
              <h3 className="text-TypoColor  md:text-xl font-[600] h-16">
                {event.name}
              </h3>
            </div>
            <div className="flex flex-row gap-1 items-center pt-2 ">
              <img src={CheckIcon} alt="CheckIcon" width={16} />
              <p className="text-[#130E0A]/50 font-[400] text-xs md:text-base">
                {event.participations > 1
                  ? `${event.participations} présents`
                  : `${event.participations} présent`}
                . Evenement disponible hard coded
              </p>
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
                <Share
                  size={20}
                  strokeWidth={3}
                  className="hidden md:block group-hover:text-white"
                />

                <p className=" group-hover:text-white font-Inter font-[700] text-base hidden md:block">
                  Partager cet l'évènement
                </p>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </Link>
  );
};

export default EventROw;
