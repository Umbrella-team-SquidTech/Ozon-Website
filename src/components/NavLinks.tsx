import { Link, useLocation } from "react-router-dom";

export default function NavLinks() {
  const location = useLocation().pathname;
  return (
    <div className="md:flex justify-between w-auto gap-8 text-[18px] text-slate-800 h-8 hidden">
      <div
        className={`${
          location === "/home"
            ? "text-PrimaryColor border-b border-PrimaryColor font-semibold"
            : ""
        }`}
      >
        <Link to="/home">Accueil</Link>
      </div>
      <div
        className={`${
          location === "/events"
            ? "text-PrimaryColor border-b border-PrimaryColor font-semibold"
            : ""
        }`}
      >
        <Link to="/events">Évènements</Link>
      </div>
      <div
        className={`${
          location === "/status"
            ? "text-PrimaryColor border-b border-PrimaryColor font-semibold"
            : ""
        }`}
      >
        <Link to="/status">Suivi de l'impact écologique</Link>
      </div>
    </div>
  );
}
