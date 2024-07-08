import { House, Search, Plus, TreeDeciduous, User } from "lucide-react";
import { useLocation } from "react-router-dom";
export default function ApplicationFooter() {
  const location = useLocation().pathname;

  return (
    <footer className="md:hidden sticky bottom-0 z-40 w-full pb-3 pt-3 px-3 border-t flex justify-between items-center bg-white">
      <div
        className={`flex flex-col items-center justify-ceneter text-sm ${
          location === "/home"
            ? "text-PrimaryColor font-semibold"
            : "text-gray-900 opacity-50"
        }`}
      >
        <House />
        Accueil
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
        <Plus className="w-7 h-6" />
      </div>
      <div
        className={`flex flex-col items-center justify-ceneter text-sm ${
          location === "/events"
            ? "text-PrimaryColor font-semibold"
            : "text-gray-900 opacity-50"
        }`}
      >
        <TreeDeciduous />
        Évènements
      </div>
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
    </footer>
  );
}
