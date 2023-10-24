import React from "react";
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
import "./Profit.css";

const Profit = () => {
  const data = [
    {
      name: " 1",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: " 2",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: " 3",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: " 4",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: " 5",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: " 6",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "7",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className="profitcard">
      <h1 className="profitcardhead">Sales</h1>
      <LineChart
        width={410}
        height={180}
        data={data}
        margin={{
          top: 10,
          right: 10,
          left: 0,
          bottom: 0,
        }}
      >
        {/* <CartesianGrid strokeDasharray="" /> */}
        <XAxis
          dataKey="name"
          strokeWidth={2}
          axisLine={{ stroke: "blue" }}
          tick={{ fill: "blue" }}
          label={{
            value: "Order NO",
            position: "insideBottom",
            dy: 3,
            fill: "red",
          }}
        />
        <YAxis
          axisLine={{ stroke: "green" }}
          strokeWidth={2}
          tick={{ fill: "green" }}
        />
        <Tooltip />
        {/* <Legend /> */}
        <Line
          type="monotone"
          dataKey="pv"
          strokeWidth={2}
          stroke="#D2691E"
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="uv"
          strokeWidth={2}
          stroke="#FFA500"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
};

export default Profit;
