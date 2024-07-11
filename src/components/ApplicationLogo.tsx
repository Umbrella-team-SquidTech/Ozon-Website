import Ozon from "@/assets/Logo.svg";
import { Link } from "react-router-dom";
export default function ApplicationLogo() {
  return (
    <Link to="/home">
      <div className="flex gap-3 w-[8rem] items-center justify-center">
        <img src={Ozon} alt="Ozon" className="w-24" />
      </div>
    </Link>
  );
}
