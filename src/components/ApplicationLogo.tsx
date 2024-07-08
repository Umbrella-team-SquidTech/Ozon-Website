import Ecolink from "@/assets/Logo.svg";
export default function ApplicationLogo() {
  return (
    <div className="flex gap-3 w-[8rem] items-center justify-center">
      <img src={Ecolink} alt="Ecolink" className="w-8" />
      <h2 className="font-semibold text-2xl">EcoLink</h2>
    </div>
  );
}
