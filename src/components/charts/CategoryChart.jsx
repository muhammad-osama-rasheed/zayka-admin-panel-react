import React from "react";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";
import { PieChart } from "@mui/x-charts/PieChart";
import { useContext } from "react";
import MyContext from "../../context/MyContext";

const CategoryChart = ({ burger, pizza, seafood, sweets, drinks }) => {
  const context = useContext(MyContext);
  const { theme } = context;

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
    // <div
    //   style={{
    //     width: "100%",
    //     height: 320,
    //   }}
    // >
    //   <h4 style={{ color: "#014421", fontSize: "20px" }}>
    //     Products Distribution by Category
    //   </h4>
    //   <ResponsiveContainer width="100%" height="100%">
    //     <PieChart style={{ zIndex: -1 }}>
    //       <Pie
    //         data={data}
    //         dataKey="Total"
    //         nameKey="name"
    //         cx="50%"
    //         cy="50%"
    //         outerRadius={100}
    //         fill="#014421"
    //         label
    //       >
    //         {data.map((entry, index) => (
    //           <Cell
    //             key={`cell-${index}`}
    //             fill={COLORS[index % COLORS.length]}
    //           />
    //         ))}
    //       </Pie>
    //       <Tooltip
    //         contentStyle={{
    //           color: "#014421",
    //           borderRadius: "5px",
    //         }}
    //       />
    //       {/* <Legend
    //         wrapperStyle={{
    //           color: "#014421",
    //           fontSize: "10px",
    //           textAlign: "center",
    //         }}
    //       /> */}
    //     </PieChart>
    //   </ResponsiveContainer>
    // </div>
    <>
      <h4
        style={{
          color: theme === "dark" ? "#fff" : "#014421",
          fontSize: "20px",
          transition: "color 0.5s",
        }}
      >
        Products Category Breakdown
      </h4>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: burger, label: "Burgers", color: "#014421" },
                { id: 1, value: pizza, label: "Pizza", color: "#014421cc" },
                {
                  id: 2,
                  value: seafood,
                  label: "Sea Food",
                  color: "#01442199",
                },
                { id: 3, value: sweets, label: "Sweets", color: "#01442166" },
                { id: 4, value: drinks, label: "Drinks", color: "#01442133" },
              ],

              innerRadius: 20,
              outerRadius: 90,
              paddingAngle: 4,
              cornerRadius: 3,
              animation: { duration: 1000, easing: "ease-in-out" },
              label: true,
              labelColor: "#fff",
            },
          ]}
          width={370}
          height={250}
          tooltip={{ trigger: "item" }}
          slotProps={{
            legend: {
              labelStyle: {
                fill: theme === "dark" ? "#fff" : "#000000B3",
                // fontSize: 14,
              },
            },
          }}
        />
      </div>
    </>
  );
};

export default CategoryChart;
