import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chart = () => {
  // Sample data for categories (you can fetch this data from your backend)
  const data = [
    { name: "Pizza", value: 40 },
    { name: "Burgers", value: 30 },
    { name: "Drinks", value: 20 },
    { name: "Desserts", value: 10 },
  ];

  // Define colors for each slice of the pie chart
  const COLORS = ["#ff5733", "#33ff57", "#3357ff", "#f5a623"];

  return (
    <div style={{ width: "100%", height: 400 }}>
      <h4>Orders by Category</h4>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
