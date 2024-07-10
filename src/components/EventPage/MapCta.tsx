
import mapCta from "@/assets/EventPage/eventMapCTA.svg"
const MapCta = () => {
  return (
    <div className="mt-4  w-full mx-auto border border-[#BAB8B8] rounded-xl flex flex-row justify-between ">
      <div className="w-4/6 md:w-1/2 p-4 md:p-7 font-Inter flex flex-col justify-between gap-2 md:gap-0">
        <div className="space-y-1">
          <h3 className=" bg-gradient-to-r from-[#11998E]  to-[#38EF7D] bg-clip-text text-transparent  md:text-2xl font-[700]">
            Découvrez maintenant nos evenements via la map interactive
          </h3>
        </div>
        <button
        className="select-none self-start rounded-lg bg-gradient-to-tr from-[#11998E]  to-[#38EF7D] md:py-4 md:px-8 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-sm transition-all hover:shadow-md hover:shadow-gray-900/20 active:opacity-[0.85] "
        type="button"
      >
        Visiter la map
      </button>

      </div>
      <div className="w-3/6 md:w-2/6 relative">
        <img
          src={mapCta}
          alt="eventBackground"
          className="rounded-r-xl w-full h-full object-cover  "
        />
        
      </div>
    </div>
  );
};

export default MapCta;
