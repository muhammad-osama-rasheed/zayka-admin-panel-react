import React from "react";
import Cards from "../../components/card/Cards";
import Chart from "../../components/charts/Chart";

function Home() {
  const cardItems = [
    {
      id: 1,
      title: "Products",
      count: 30,
      icon: "IoGrid",
    },
    {
      id: 2,
      title: "Total Orders",
      count: 10,
      icon: "IoBagCheck",
    },
    {
      id: 3,
      title: "Users",
      count: 30,
      icon: "IoPeople",
    },
    {
      id: 4,
      title: "Reviews",
      count: 100,
      icon: "IoBarChart",
    },
  ];
  return (
    <div className="container my-4">
      <div className="row d-flex justify-content-center align-items-center">
        {cardItems.map((item, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-6">
            <Cards count={item.count} title={item.title} icon={item.icon} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
