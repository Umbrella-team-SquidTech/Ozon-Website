import { Search, Bell, MessageCircleMore } from "lucide-react";
import UserProfile from "@/assets/UserProfile.png";
export default function NavSideLinks() {
  return (
    <div className="flex md:gap-3">
      <div className="bg-gray-200 rounded-3xl w-12 h-11 md:flex justify-center items-center cursor-pointer hidden">
        <Search />
      </div>
      <div className="md:bg-gray-200 rounded-3xl w-12 h-11 flex justify-center items-center cursor-pointer">
        <Bell />
      </div>
      <div className=" rounded-3xl w-12 h-11 flex justify-center items-center cursor-pointer md:hidden">
        <MessageCircleMore />
      </div>
      <img
        src={UserProfile}
        className=" rounded-3xl w-12 h-11 md:flex justify-center items-center cursor-pointer hidden "
      />
    </div>
  );
}
