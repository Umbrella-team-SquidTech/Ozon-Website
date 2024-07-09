import { MessageCircleMore } from "lucide-react";
import Profile from "./Navbar/Profile";
import Notification from "./Navbar/Notification";
import SearchBox from "./Navbar/Search";
export default function NavSideLinks() {
  return (
    <div className="flex md:gap-3 ">
      <SearchBox />
      <Notification />
      <div className=" rounded-3xl w-12 h-11 flex justify-center items-center cursor-pointer md:hidden">
        <MessageCircleMore />
      </div>
      <Profile />
    </div>
  );
}
