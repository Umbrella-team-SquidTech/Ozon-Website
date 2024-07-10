import ImageBackground from "@/assets/HomePage/EventBackground.png";

import { Card } from "../ui/card";
import { X } from "lucide-react";

const EventPopup = ({
  event,
  onClose,
}: {
  event: {
    id: number;
    name: string;
    description: string;
    address: string;
    start: string;
    organizer: UserI;
    event_type: string;
    images: string[];
    participations: number;
  };
  onClose: () => void;
}) => {
  const handleRedirect = () => {
    window.location.href = `/events/${event.id}`;
  };
  console.log(event);
  return (
    <div className="w-full flex flex-row items-center justify-center  fixed top-24 md:top-auto md:bottom-2   ">
        
      <Card className=" rounded-2xl flex flex-row  items-center w-3/4 md:w-1/2 py-2 md:py-0  ">
        <div className="w-3/4 h-full pl-2 flex flex-col justify-between">
          <h3 className=" bg-gradient-to-r from-[#11998E]  to-[#38EF7D] bg-clip-text text-transparent  md:text-xl font-[700] ">
            {event.name}
          </h3>
          <p className="text-[#130E0A]/50 font-[700] text-xs md:text-base  ">
            {event.start}
          </p>
          <div className="flex flex-col gap-2 self-start">
            <button
              className="select-none self-start rounded-lg bg-gradient-to-tr from-[#11998E]  to-[#38EF7D] md:py-3 md:px-6 py-2 px-3 mt-2 md:mt-0 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-sm transition-all hover:shadow-md hover:shadow-gray-900/20 active:opacity-[0.85] "
              onClick={handleRedirect}
            >
              View Details
            </button>
          </div>
        </div>
        <div className="w-1/4 h-full relative">
        <button onClick={onClose} className="absolute top-2 right-2">
            <X size={20} strokeWidth={2} className="text-white " />
        </button>
          <img
            src={event.images[0] ? event.images[0] : ImageBackground}
            className="w-full h-full object-contain rounded-r-2xl"
            alt=""
          />
        </div>
      </Card>
    </div>
  );
};

export default EventPopup;

{
  /* <div className="fixed rounded-3xl bottom-0 left-1/2 transform -translate-x-1/2 bg-white p-4 shadow-lg z-50 max-w-md w-full">
<div className="flex flex-col space-y-2">
  <h2 className="text-xl font-bold">{event.name}</h2>
  <p>{event.description}</p>
  <p><strong>Organizer:</strong> {event.organizer.name} {event.organizer.lastName}</p>
  <div className="flex space-x-2">
    <button onClick={handleRedirect} className="bg-blue-500 text-white px-4 py-2 rounded">View Details</button>
    <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">Close</button>
  </div>
</div>
</div> */
}

// suggested event component
// <div className="mt-4   border border-[#BAB8B8] rounded-xl flex flex-row fixed bottom-0 z-50 bg-white w-1/2 ">
// <div className="w-4/6 md:w-1/2 p-4 md:p-7 font-Inter flex flex-col justify-between gap-2 md:gap-0">
//   <div className="space-y-1">
//     <p className="text-[#130E0A]/50 font-[700] text-xs md:text-base  ">
//       {event.start}
//     </p>
//     <h3 className=" bg-gradient-to-r from-[#11998E]  to-[#38EF7D] bg-clip-text text-transparent  md:text-2xl font-[700]">
//       {event.name}
//     </h3>
//   </div>
//   <div className="flex flex-row gap-1 items-center ">
//     <img src={CheckIcon} alt="CheckIcon" width={16} />
//     <p className="text-[#130E0A]/50 font-[400] text-xs md:text-base">
//       {event.participations}
//     </p>
//   </div>
// </div>
// <div className="w-2/6 md:w-1/2 relative">
//   <img
//     src={ImageBackground}
//     alt="eventBackground"
//     className="rounded-r-xl w-full h-full object-cover  "
//   />
//   <div
//     className="  absolute bottom-3 right-2 md:left-2  flex md:flex-row  md:gap-4 bg-[#BAB8B859]/35
// md:bg-inherit
// rounded-full md:rounded-none "
//   >
//     <button
//       onClick={onClose}
//       className="md:bg-white/35 flex flex-row items-center justify-center gap-2 rounded-xl py-1 md:px-3 px-1"
//     >
//       <Share size={20} strokeWidth={3} className="hidden md:block" />
//       <Share
//         size={16}
//         strokeWidth={2}
//         className="md:hidden block text-white"
//       />

//       <p className=" font-Inter font-[700] text-base hidden md:block">
//         Fermer
//       </p>
//     </button>
//     <button
//       onClick={handleRedirect}
//       className="md:bg-white/35 flex flex-row items-center justify-center gap-2 rounded-xl py-1 md:px-3  px-1"
//     >
//       <CircleArrowRight
//         size={20}
//         strokeWidth={3}
//         className="hidden md:block"
//       />
//       <CircleArrowRight
//         size={16}
//         strokeWidth={2}
//         className="md:hidden block text-white"
//       />
//       <p className=" font-Inter font-[700] text-base hidden md:block">
//         Rejoindre cet évènement
//       </p>
//     </button>
//   </div>
// </div>
// </div>
