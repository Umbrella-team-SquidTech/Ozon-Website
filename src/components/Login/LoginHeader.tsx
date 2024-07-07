export default function LoginHeader() {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h1 className=" font-bold text-3xl">Bienvenue !</h1>
      <p className=" text-gray-500">
        Vous n'avez pas de compte ?{" "}
        <span className="font-bold text-black">S'inscrire</span>
      </p>
    </div>
  );
}
