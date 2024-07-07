
import { Link } from "react-router-dom";
export default function LoginHeader({
  register = false,
}: {
  register?: boolean;
}) {
  return (
    <>
    <div className=" flex-col justify-center items-center gap-4 hidden md:flex">
      <h1 className=" font-bold text-3xl">Bienvenue !</h1>
      <p className=" text-gray-500">
        {!register ? (
          <>
            Vous n'avez pas de compte ?{" "}
            <span className="font-bold text-black">
              {" "}
              <Link to="/register">S'inscrire</Link>
            </span>
          </>
        ) : (
          <>
            Vous avez déjà un compte ?{" "}
            <span className="font-bold text-black">
              <Link to="/login">Connexion</Link>
            </span>
          </>
        )}
      </p>
    </div>
    <div className=" flex md:hidden flex-col items-center gap-2 ">
      <img src={Loginheader} alt="cat icon" width={74}  />
      <h3 className=" font-Outfit text-PrimaryColor text-[28px] font-bold">Se connecter</h3>
    </div>
    </>
  );
}
