import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const CategoryChart = ({ burger, pizza, seafood, sweets, drinks }) => {
  const data = [
    { name: "Burgers", Total: burger },
    { name: "Pizza", Total: pizza },
    { name: "Sea Food", Total: seafood },
    { name: "Sweets", Total: sweets },
    { name: "Drinks", Total: drinks },
  ];

  const COLORS = [
    "rgba(1,68,33,1)",
    "rgba(1,68,33,0.8)",
    "rgba(1,68,33,0.6)",
    "rgba(1,68,33,0.4)",
    "rgba(1,68,33,0.2)",
  ];

  return (
    <div
      style={{
        width: "100%",
        height: 320,
        // backgroundColor: "#f0f8f5",
        // padding: "10px",
        // borderRadius: "10px",
      }}
    >
      <h4 style={{ color: "#014421", fontSize: "20px" }}>
        Prducts Distribution by Category
      </h4>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="Total"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#014421"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              color: "#014421",
              borderRadius: "5px",
            }}
          />
          <Legend
            wrapperStyle={{
              color: "#014421",
              fontSize: "12px",
              textAlign: "center",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CategoryChart;
