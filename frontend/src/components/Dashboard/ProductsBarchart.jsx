import React from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const ProductsBarchart = () => {
  const data = [
    {
      name: "Product A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Product B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Product B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Product C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Product D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Product E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Product E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Product F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Product G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Product G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
      y + height
    } ${x + width}, ${y + height}
        Z`;
  };
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  return (
    <div className="dashleftbot">
      <BarChart
        width={850}
        height={300}
        data={data}
        margin={{
          top: 30,
          right: 0,
          left: 10,
          bottom: 0,
        }}
      >
        {/* <CartesianGrid  /> */}
        <XAxis dataKey="name" />
        <YAxis />
        <Bar
          dataKey="uv"
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 7]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default ProductsBarchart;
