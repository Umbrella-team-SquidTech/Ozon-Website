import axios from "@/config/axios";
import { Search } from "lucide-react";
import { useState } from "react";
import SearchResult from "../SearchResult";




export default function SearchBox() {
  const [search, setSearch] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    axios.get(`/search/${e.target.value}`,
    {headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    }}
    )
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
  };
  return (
    <div className="group bg-gray-200 rounded-3xl  h-11 w-[20rem] duration-500 justify-start px-3 transition-all md:flex  items-center cursor-pointer hidden gap-2">
      <Search />
      <input
      value={search}
      onChange={handleChange}
        type="text"
        placeholder="Recherecher..."
        className="w-full bg-transparent block focus:outline-none"
      />
      {search && <SearchResult />}





    </div>
  );
}
