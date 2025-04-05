import React, { useContext } from "react";
import styles from "./Products.module.css";
import DarkBgButton from "../../components/buttons/bgBtn/DarkBgButton";
import { IoSearchOutline } from "react-icons/io5";
import CustomTable from "../../components/table/CustomTable";
import MyContext from "../../context/MyContext";
import { DARK_GREEN } from "../../utils/colors/Colors";
function Products() {
  const context = useContext(MyContext);
  const { theme } = context;
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

  const tableValue = [
    {
      id: 1,
      name: "Zayka Burger",
      image: "https://via.placeholder.com/150",
      price: "700",
      category: "Burger",
    },
    {
      id: 2,
      name: "Classic Burger",
      image: "https://via.placeholder.com/150",
      price: "300",
      category: "Burger",
    },
    {
      id: 3,
      name: "Peri Peri Pizza",
      image: "https://via.placeholder.com/150",
      price: "1200",
      category: "Pizza",
    },
  ];

  return (
    <div className="container">
      <div
        className={
          theme === "dark"
            ? styles.darkSearchContainer
            : styles.lightSearchContainer
        }
      >
        <div className={styles.searchBar}>
          <IoSearchOutline className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search products..."
            className={styles.searchInput}
          />
        </div>
      </div>

      <div className="row px-1">
        <div className="col-12">
          <h4
            style={{ color: theme === "dark" ? "#ffffff" : DARK_GREEN }}
            className={styles.heading}
          >
            All Products
          </h4>
        </div>
      </div>

      <div className="row px-1 d-flex justify-content-end align-items-center">
        <div className="col-lg-2 col-md-3 col-4">
          <DarkBgButton title={"Add Item"} />
        </div>
      </div>

      <CustomTable
        tableHeading={tableHeading}
        tableValue={tableValue}
        showInfoIcon={true}
        showEditIcon={true}
        showDeleteIcon={true}
      />
    </div>
  );
}

export default Products;
