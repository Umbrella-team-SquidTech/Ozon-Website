import Loginheader from "@/assets/Login/LoginHeader.svg"

export default function LoginHeader() {
  return (
    <>
    <div className=" flex-col justify-center items-center gap-4 hidden md:flex">
      <h1 className=" font-bold text-3xl">Bienvenue !</h1>
      <p className=" text-gray-500">
        Vous n'avez pas de compte ?{" "}
        <span className="font-bold text-black">S'inscrire</span>
      </p>
    </div>
    <div className=" flex md:hidden flex-col items-center gap-2 ">
      <img src={Loginheader} alt="cat icon" width={74}  />
      <h3 className=" font-Outfit text-PrimaryColor text-[28px] font-bold">Se connecter</h3>
    </div>
    </>
  );
}
