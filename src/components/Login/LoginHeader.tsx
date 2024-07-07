export default function LoginHeader() {
  return (
    <div className="flex flex-col justify-center items-center font-inter gap-4">
      <h1 className=" font-bold font-inter text-3xl">Bienvenue !</h1>
      <p className=" text-gray-500">
        Vous n'avez pas de compte ?{" "}
        <span className="font-bold text-black">S'inscrire</span>
      </p>
    </div>
  );
}
