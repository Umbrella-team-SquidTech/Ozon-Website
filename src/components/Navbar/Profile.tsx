import UserProfile from "@/assets/UserProfile.png";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MapPin } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "@/config/axios";
import useUserStore from "@/stores/useUser";
import { useToast } from "../ui/use-toast";
export default function Profile() {
  const { removeUser } = useUserStore();
  const navigate = useNavigate();
  const { toast } = useToast();
  function handleLogout() {
    axios
      .post("/logout")
      .then(() => {
        removeUser();
        navigate("/login");
      })
      .catch(() => {
        toast({
          title: "Erreur",
          description: "Une erreur s'est produite lors de la déconnexion",
          variant: "destructive",
        });
      });
  }
  return (
    <Popover>
      <PopoverTrigger>
        <img
          src={UserProfile}
          className=" rounded-3xl w-12 h-11 md:flex justify-center items-center cursor-pointer hidden "
        />
      </PopoverTrigger>
      <PopoverContent className=" min-w-56 min-h-56 p-7 flex flex-col justify-between">
        <div className="flex gap-2 w-full">
          <img
            src={UserProfile}
            className=" rounded-3xl w-16 h-14 md:flex justify-center items-center cursor-pointer hidden "
          />
          <div className=" w-[20rem] flex flex-col gap-1">
            <h2 className="w-full font-[600]">Karim Younes</h2>
            <p className="text-[12px] flex gap-1 items-center">
              <MapPin className="w-4 h-4" />
              Paris, France
            </p>
            <p className="text-[10px]">Membre depuis 7 mai 2024</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Link to="/profile" className="hover:bg-gray-200 p-2 rounded-lg">
            Profile
          </Link>
          <button
            className="bg-transparent text-start text-black hover:bg-gray-200 p-2 rounded-lg"
            onClick={handleLogout}
          >
            Se déconnecter
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
