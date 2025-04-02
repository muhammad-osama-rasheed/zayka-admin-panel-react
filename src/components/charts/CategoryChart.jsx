import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const CategoryChart = ({ burger, pizza, seafood, sweets, drinks }) => {
  const data = [
    { name: "Burgers", Total: burger },
    { name: "Pizza", Total: pizza },
    { name: "Sea Food", Total: seafood },
    { name: "Sweets", Total: sweets },
    { name: "Drinks", Total: drinks },
  ];

  return (
    <div style={{ width: "100%", height: 250 }}>
      <h4
        style={{
          fontSize: "24px",
          color: "rgba(1, 68, 33, 0.8)",
          marginTop: "30px",
          marginBottom: "40px",
        }}
      >
        Product Distribution by Category
      </h4>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ left: -15, right: 15 }}>
          <CartesianGrid stroke="#e0e0e0" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              color: "#014421",
              fontSize: "14px",
              borderRadius: "5px",
            }}
          />
          {/* <Legend wrapperStyle={{ fontSize: "18px", left: 5, bottom: -5 }} /> */}
          <Bar dataKey="Total" fill=" #3b7d58" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CategoryChart;
