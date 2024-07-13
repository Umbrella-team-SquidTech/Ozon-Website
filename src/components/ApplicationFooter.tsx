import useToken from "@/hooks/useToken";
import useUser from "@/hooks/useUser";
import { House, Search, Plus, TreeDeciduous, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
export default function ApplicationFooter() {
  const location = useLocation().pathname;
  const token = useToken();
  const user = useUser(token).user;
  return (
    <footer className="md:hidden fixed bottom-0 z-40 w-full pb-3 pt-3 px-3 border-t flex justify-between items-center bg-white">
      <div
        className={`flex flex-col items-center justify-ceneter text-sm ${
          location === "/home"
            ? "text-PrimaryColor font-semibold"
            : "text-gray-900 opacity-50"
        }`}
      >
        <Link to="/home" className=" flex flex-col items-center">
          <House />
          Accueil
        </Link>
      </div>
      <div
        className={`flex flex-col items-center justify-ceneter text-sm ${
          location === "/search"
            ? "text-PrimaryColor font-semibold"
            : "text-gray-900 opacity-50"
        }`}
      >
        <Search />
        Recherche
      </div>
      <div
        className={`bg-PrimaryColor justify-center text-white rounded-3xl flex items-center w-11 h-11 `}
      >
        <Link to="/createPost">
          <Plus className="w-7 h-6" />
        </Link>
      </div>
      <div
        className={`flex flex-col items-center justify-ceneter text-sm ${
          location === "/events"
            ? "text-PrimaryColor font-semibold"
            : "text-gray-900 opacity-50"
        }`}
      >
        <Link to="/events" className=" flex flex-col items-center">
          <TreeDeciduous />
          Évènements
        </Link>
      </div>
      <Link to={"/users/" + user?.id}>
        <div
          className={`flex flex-col items-center justify-ceneter text-sm ${
            location === "/profile"
              ? "text-PrimaryColor font-semibold"
              : "text-gray-900 opacity-50"
          }`}
        >
          <User />
          Profile
        </div>
      </Link>
    </footer>
  );
}
