import { Card } from "../ui/card";
import { X } from "lucide-react";
import placeholder from "@/assets/placeholder.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const EventPopup = ({
  event,
  onClose,
}: {
  event: EventI;
  onClose: () => void;
}) => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate(`/events/${event.id}`);
  };
  return (
    <motion.div
      initial={{ y: 200 }}
      animate={{ y: 0 }}
      transition={{
        delay: 0.1,
      }}
    >
      <div className="w-full flex flex-row items-center justify-center absolute bottom-0 mb-[72px] md:mb-0 mx-auto md:top-auto md:bottom-2 ">
        <Card className=" rounded-2xl flex flex-row  items-center w-[90%] md:w-1/2 py-0 h-36 md:h-44">
          <div className="w-3/4 h-full pl-2 flex flex-col justify-between py-2">
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
              src={event.images[0] ? event.images[0] : placeholder}
              className="w-full h-full object-cover rounded-r-2xl"
              alt=""
            />
          </div>
        </Card>
      </div>
    </motion.div>
  );
};

export default EventPopup;
