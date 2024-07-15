import axios from "@/config/axios";
import { Search } from "lucide-react";
import { useState } from "react";
import SearchResult from "../SearchResult";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const [events, setEvents] = useState<EventI[]>([]);
  const [users, setUsers] = useState<UserI[]>([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearch(query);

    if (query === "") {
      setEvents([]);
      setUsers([]);
      return;
    }
    setLoading(true);
    axios
      .get(`/search/${query}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        const data = res.data.data;

        if (data && Array.isArray(data)) {
          setEvents([]);
          setUsers([]);

          data.forEach((element: UserI | EventI) => {
            if ("event_type" in element) {
              setEvents((prevEvents) => [...prevEvents, element as EventI]);
            } else {
              setUsers((prevUsers) => [...prevUsers, element as UserI]);
            }
          });
        } else {
          console.error(
            "La réponse de l'API ne contient pas de clé 'events' ou ce n'est pas un tableau"
          );
        }
      })
      .catch((err) => {
        console.error("Erreur lors de la recherche:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="group bg-gray-200 py-3 gap-4 rounded-3xl h-11 w-[20rem] duration-500    transition-all md:flex flex-col items-center cursor-pointer hidden ">
      <div className="flex px-3 justify-center items-center gap-2 w-full h-full">
        <Search />
        <input
          value={search}
          onChange={handleChange}
          type="text"
          placeholder="Recherecher..."
          className="w-full bg-transparent block focus:outline-none"
        />
      </div>
      {search && (
        <SearchResult events={events} users={users} loading={loading} />
      )}
    </div>
  );
}
