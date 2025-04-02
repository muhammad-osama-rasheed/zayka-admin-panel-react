import React, { useEffect, useState } from "react";
import CategoryCards from "../../components/card/CategoryCards";
import styles from "./Categories.module.css";
import { tableValue } from "../../utils/data/ProductData";
import CustomTable from "../../components/table/CustomTable";
import CategoryChart from "../../components/charts/CategoryChart";

function Categories() {
  const [category, setCategory] = useState("Burger");
  const [filteredData, setFilteredData] = useState([]);
  const [counts, setCounts] = useState({
    Burger: 0,
    Pizza: 0,
    "Sea Food": 0,
    Sweets: 0,
    Drinks: 0,
  });

  const cardItems = [
    {
      id: 1,
      category: "Burger",
      icon: "FaHamburger",
    },
    {
      id: 2,
      category: "Pizza",
      icon: "FaPizzaSlice",
    },
    {
      id: 3,
      category: "Sea Food",
      icon: "FaFish",
    },
    {
      id: 4,
      category: "Sweets",
      icon: "FaCookieBite",
    },
    {
      id: 5,
      category: "Drinks",
      icon: "FaGlassCheers",
    },
  ];

  const tableHeading = [
    {
      key: "s.no",
      label: "S.No",
    },
    {
      key: "name",
      label: "Name",
    },
    {
      key: "image",
      label: "Image",
    },
    {
      key: "price",
      label: "Price",
    },
    {
      key: "category",
      label: "Category",
    },
  ];

  const filterCategory = () => {
    const filtered = tableValue.filter((item) => item.category === category);
    setFilteredData(filtered);
  };

  const filterCount = () => {
    const newCounts = {
      Burger: tableValue.filter((item) => item.category === "Burger").length,
      Pizza: tableValue.filter((item) => item.category === "Pizza").length,
      "Sea Food": tableValue.filter((item) => item.category === "Sea Food")
        .length,
      Sweets: tableValue.filter((item) => item.category === "Sweets").length,
      Drinks: tableValue.filter((item) => item.category === "Drinks").length,
    };
    setCounts(newCounts);
  };

  useEffect(() => {
    filterCategory();
    filterCount();
  }, [category]);

  return (
    <div className="container py-4">
      <div className="row d-flex justify-content-center align-items-center">
        {cardItems.map((item) => (
          <div key={item.id} className="col-lg-3 col-md-4 col-6">
            <CategoryCards
              count={counts[item.category]}
              title={item.category}
              icon={item.icon}
              category={category}
              setCategory={setCategory}
            />
          </div>
        ))}
      </div>

      <div style={{ marginTop: "20px", marginBottom: "60px" }}>
        <CategoryChart
          burger={counts.Burger}
          pizza={counts.Pizza}
          seafood={counts["Sea Food"]}
          sweets={counts.Sweets}
          drinks={counts.Drinks}
        />
      </div>

      <div className="row my-3">
        <div className="col-12">
          <h2 className={`text-start ${styles.heading}`}>{category}</h2>
        </div>
      </div>

      <CustomTable
        tableHeading={tableHeading}
        tableValue={filteredData}
        showInfoIcon={true}
        showEditIcon={true}
        showDeleteIcon={true}
      />
    </div>
  );
}

export default Categories;
