import facebook from "@/assets/Register/facebook.svg"
import google from "@/assets/Register/Google.svg"
import apple from "@/assets/Register/Apple.svg"
const OauthLinks = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4">
    <div className="flex justify-between items-center w-full px-6 ">
      <hr className="w-full h-1 rounded-md bg-[#130E0A1A]" />
      <p className="w-[26rem] px-2 text-sm text-gray-700 text-center">
        Ou continuer avec
      </p>
      <hr className=" w-full h-1 rounded-md bg-[#130E0A1A]" />
    </div>
    <div className="flex flex-row gap-10">
      <div className="border border-[#F6F6F6] p-3 rounded-full shadow-lg">
        <img src={facebook} alt="" width={32}/>
      </div>
      <div className="border border-[#F6F6F6] p-3 rounded-full shadow-lg">
        <img src={google} alt="" width={32}/>
      </div>
      <div className="border border-[#F6F6F6] p-3 rounded-full shadow-lg">
        <img src={apple} alt="" width={32}/>
      </div>
    </div>
    </div>
  );
};

export default OauthLinks;
