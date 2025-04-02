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
    <div
      style={{
        width: "100%",
        height: 300,
      }}
    >
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

// import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   CartesianGrid,
// } from "recharts";

// const Chart = () => {
//   const data = [
//     { name: "Pizza", value: 1 },
//     { name: "Burgers", value: 3 },
//     { name: "Drinks", value: 2 },
//     { name: "Desserts", value: 1 },
//   ];

//   return (
//     <div style={{ width: "100%", height: 300 }}>
//       <h4>Orders by Category</h4>
//       <ResponsiveContainer width="100%" height="100%">
//         <BarChart data={data}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="value" fill="#8884d8" />
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default Chart;

// import React from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   CartesianGrid,
// } from "recharts";

// const Chart = () => {
//   // Sample data for sales trends
//   const data = [
//     { day: "Mon", sales: 30 },
//     { day: "Tue", sales: 45 },
//     { day: "Wed", sales: 20 },
//     { day: "Thu", sales: 50 },
//     { day: "Fri", sales: 40 },
//     { day: "Sat", sales: 60 },
//     { day: "Sun", sales: 70 },
//   ];

//   return (
//     <div style={{ width: "100%", height: 250 }}>
//       <h4>Sales Trends Over the Week</h4>
//       <ResponsiveContainer width="100%" height="100%">
//         <LineChart data={data} margin={{ left: -25, right: 15 }}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="day" />
//           <YAxis />
//           <Tooltip />
//           <Legend wrapperStyle={{ fontSize: "18px", left: 5 }} />
//           <Line
//             type="monotone"
//             dataKey="sales"
//             stroke="#014421"
//             strokeWidth={2}
//           />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default Chart;
