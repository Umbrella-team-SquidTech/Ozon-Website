import axios from "@/config/axios";
import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Selectors from "./Selectors";
import DatePick from "./DatePick";


const LineGraph = () => {
  const [formattedDate, setFormattedDate] = useState("2000-12");
  const [data, setData] = useState([]);
  const [type, setType] = useState("1");
  useEffect(() => {
  
    axios
      .get(`/ecological-stats/graph?date=2000-12&type=${type}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
      
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [formattedDate,type]);
  return (
    <div className="w-full h-[400px] p-4  pb-7space-y-3 ">
      <div className="flex flex-col md:flex-row gap-2 w-full  justify-end">
       
          <Selectors 
          type={type}
          settype={setType}
          />
          <DatePick
            formattedDate={formattedDate}
            setFormattedDate={setFormattedDate}
          />
      
      </div>
      <ResponsiveContainer>
        <LineChart data={data} className="">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="amount"
            strokeWidth={4}
            stroke="#8DFCAC"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineGraph;
