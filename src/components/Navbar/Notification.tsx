import { Bell, X } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
export default function Notification() {
  return (
    <Popover>
      <PopoverTrigger>
        <div className="md:bg-gray-200 rounded-3xl w-12 h-11 flex justify-center items-center cursor-pointer">
          <Bell />
        </div>
      </PopoverTrigger>
      <PopoverContent className=" min-w-[20rem] min-h-[30rem] p-5 flex flex-col justify-between font-Outfit">
        <div className="w-full flex justify-between">
          <h1 className="text-xl font-[600]">Notifications</h1>
          <X className="bg-gray-100 rounded-xl w-7 h-7 p-1 cursor-pointer" />
        </div>
      </PopoverContent>
    </Popover>
  );
}
