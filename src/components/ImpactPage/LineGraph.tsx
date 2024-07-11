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

// const data = [
//   { date: "2000-12-01", amount: 25 },
//   { date: "2000-12-02", amount: 23 },
//   { date: "2000-12-03", amount: 80 },
//   { date: "2000-12-04", amount: 82 },
//   { date: "2000-12-05", amount: 136 },
//   { date: "2000-12-06", amount: 52 },
//   { date: "2000-12-07", amount: 81 },
//   { date: "2000-12-08", amount: 57 },
//   { date: "2000-12-09", amount: 0 },
//   { date: "2000-12-10", amount: 92 },
//   { date: "2000-12-11", amount: 70 },
//   { date: "2000-12-12", amount: 16 },
//   { date: "2000-12-13", amount: 91 },
//   { date: "2000-12-14", amount: 64 },
//   { date: "2000-12-15", amount: 52 },
//   { date: "2000-12-16", amount: 17 },
//   { date: "2000-12-17", amount: 63 },
//   { date: "2000-12-18", amount: 14 },
//   { date: "2000-12-19", amount: 69 },
//   { date: "2000-12-20", amount: 96 },
//   { date: "2000-12-21", amount: 5 },
//   { date: "2000-12-22", amount: 7 },
//   { date: "2000-12-23", amount: 97 },
//   { date: "2000-12-24", amount: 8 },
//   { date: "2000-12-25", amount: 7 },
//   { date: "2000-12-26", amount: 85 },
//   { date: "2000-12-27", amount: 62 },
//   { date: "2000-12-28", amount: 78 },
//   { date: "2000-12-29", amount: 73 },
//   { date: "2000-12-30", amount: 27 },
//   { date: "2000-12-31", amount: 50 },
// ];

const LineGraph = () => {
  const [formattedDate, setFormattedDate] = useState("2000-12");
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log(formattedDate, "Am passed ");
    axios
      .get(`/ecological-stats/graph?date=2000-12&type=1`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [formattedDate]);
  return (
    <div className="w-full h-[400px] p-4  pb-7space-y-3 ">
      <div className="flex flex-col md:flex-row gap-2 w-full  justify-end">
       
          <Selectors />
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
