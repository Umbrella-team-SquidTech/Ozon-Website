import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "@/config/axios";
import { useEffect, useState } from "react";

interface SelectorsProps {
  settype: (value: string) => void;
  type: string;
}
// @ts-expect-error unused variable
const Selectors = ({ settype, type }: SelectorsProps) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/event_types", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (value: string) => {
    console.log(value);
    settype(value);
  };

  return (
    <div className="w-full md:w-auto">
      {data && (
        <Select onValueChange={handleChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Unite" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {data.map((item: EventTypeI) => (
                <SelectItem key={item.id} value={item.id.toString()}>
                  {item.unit}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      )}
    </div>
  );
};

export default Selectors;
