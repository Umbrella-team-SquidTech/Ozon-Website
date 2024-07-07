import { Link } from "react-router-dom";
const LoginLink = () => {
  return (
    <div className="flex flex-row items-center gap-1 justify-center">
      <p className="font-Outfit text-[14px] text-[#130E0A80/50] font-[400]">Vous possédez déjà un compte ?</p>
      <Link to="/login" className="text-PrimaryColor font-[700]">
      Connexion
      </Link>
    </div>
  );
};

export default LoginLink;
