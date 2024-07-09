import { Search } from "lucide-react";
export default function SearchBox() {
  return (
    <div className="group bg-gray-200 rounded-3xl w-12 h-11 hover:w-[20rem] duration-500 hover:justify-start hover:px-3 transition-all md:flex justify-center items-center cursor-pointer hidden gap-2">
      <Search />
      <input
        type="text"
        placeholder="Recherecher..."
        className="w-full bg-transparent hidden group-hover:block focus:outline-none"
      />
    </div>
  );
}
