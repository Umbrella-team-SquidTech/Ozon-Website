import Ozon from "@/assets/Logo.svg";
export default function ApplicationLogo() {
  return (
    <div className="flex gap-3 w-[8rem] items-center justify-center">
      <img
        src={Ozon}
        alt="Ozon"
        className="w-24"
      />
    </div>
  );
}
