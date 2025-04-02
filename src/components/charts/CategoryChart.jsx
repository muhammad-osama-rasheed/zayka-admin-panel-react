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

  // Theme-based colors
  const COLORS = ["#014421", "#026b31", "#038f3b", "#05b24a", "#06d65a"];

  return (
    <div
      style={{
        width: "100%",
        height: 340,
        // backgroundColor: "#f0f8f5",
        // padding: "10px",
        // borderRadius: "10px",
      }}
    >
      <h4 style={{ color: "#014421", fontSize: "20px" }}>Orders by Category</h4>
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
              fontSize: "14px",
              textAlign: "center",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CategoryChart;
