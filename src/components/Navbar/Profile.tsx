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
import useToken from "@/hooks/useToken";
import useUser from "@/hooks/useUser";
import { formatMemberSince } from "@/utils/formatDate";
import { useEffect, useState } from "react";
import customAxios from "@/config/axios";
export default function Profile() {
  const { removeUser } = useUserStore();
  const navigate = useNavigate();
  const { toast } = useToast();
  const token = useToken();
  const { user } = useUser(token);

  const [location, setLocation] = useState("Home");

  useEffect(() => {
    customAxios
      .get("/location", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        setLocation(
          `${res.data.data.geoplugin_region}, ${res.data.data.geoplugin_countryName}`
        );
      });
  }, []);

  function handleLogout() {
    axios
      .post(
        "/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        removeUser();
        toast({
          title: "Deconnecter avec success",
          className: "bg-PrimaryColor text-white",
        });
      })
      .catch(() => {})
      .finally(() => {
        navigate("/login");
      });
  }
  return (
    <Popover>
      <PopoverTrigger>
        <img
          src={user?.profile_pic}
          className=" rounded-3xl w-12 h-11 md:flex justify-center items-center cursor-pointer hidden"
        />
      </PopoverTrigger>
      <PopoverContent className=" min-w-56 min-h-56 p-7 flex flex-col justify-between">
        <div className="flex gap-2 w-full">
          <img
            src={user?.profile_pic}
            className=" rounded-3xl w-16 h-14 md:flex justify-center items-center cursor-pointer hidden "
          />
          <div className=" w-[20rem] flex flex-col gap-1">
            <h2 className="w-full font-[600]">
              {user?.name} {user?.last_name}
            </h2>
            <p className="text-[12px] flex gap-1 items-center">
              <MapPin className="w-4 h-4" />
              {location}
            </p>
            <p className="text-[10px]">
              Membre depuis {formatMemberSince(user?.created_at as string)}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Link
            to={"/users/" + user?.id}
            className="hover:bg-gray-200 p-2 rounded-lg"
          >
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
