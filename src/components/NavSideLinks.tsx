import { Search, Bell } from "lucide-react";
import UserProfile from "@/assets/UserProfile.png";
export default function NavSideLinks() {
  return (
    <div className="flex gap-3">
      <div className="bg-gray-200 rounded-3xl w-12 h-11 flex justify-center items-center cursor-pointer">
        <Search />
      </div>
      <div className="bg-gray-200 rounded-3xl w-12 h-11 flex justify-center items-center cursor-pointer">
        <Bell />
      </div>
      <img
        src={UserProfile}
        className=" rounded-3xl w-12 h-11 flex justify-center items-center cursor-pointer"
      />
    </div>
  );
}
