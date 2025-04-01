import React from "react";
import styles from "./Products.module.css";
import { IoSearchOutline } from "react-icons/io5";
import DarkBgButton from "../../components/buttons/bgBtn/DarkBgButton";
import {
  IoTrashOutline,
  IoCreateOutline,
  IoInformationCircleOutline,
} from "react-icons/io5";
function Products() {
  const products = [
    {
      id: 1,
      name: "Classic Burger",
      image: "image_url",
      price: 1200,
      category: "Burger",
      subcategory: "Burger",
    },
    {
      id: 2,
      name: "Classic Burger",
      image: "image_url",
      price: 1200,
      category: "Burger",
      subcategory: "Burger",
    },
    {
      id: 3,
      name: "Classic Burger",
      image: "image_url",
      price: 1200,
      category: "Burger",
      subcategory: "Burger",
    },
  ];

  console.log(products.length);

  return (
    <div className="container">
      <div className={styles.searchContainer}>
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
          <h4 className={styles.heading}>All Products</h4>
        </div>
      </div>

      <div className="row px-1 d-flex justify-content-end align-items-center">
        <div className="col-lg-2 col-md-3 col-4">
          <DarkBgButton title={"Add Item"} />
        </div>
      </div>

      <div className={styles["table-container"]}>
        <table className={styles["table"]}>
          <thead>
            <tr>
              <th className={styles["table-heading"]}>S.No</th>
              <th className={styles["table-heading"]}>Name</th>
              <th className={styles["table-heading"]}>Image</th>
              <th className={styles["table-heading"]}>Price</th>
              <th className={styles["table-heading"]}>Category</th>
              <th className={styles["table-heading"]}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.length > 0 &&
              products.map((item, index) => (
                <tr
                  key={index}
                  className={
                    products.length !== index + 1 ? styles.valueRow : ""
                  }
                >
                  <td className={styles["table-value"]}>{index + 1}</td>
                  <td className={styles["table-value"]}>{item.name}</td>
                  <td className={styles["table-value"]}>{item.image}</td>
                  <td className={styles["table-value"]}>{item.price}</td>
                  <td className={styles["table-value"]}>{item.category}</td>
                  <td className={styles["table-value"]}>
                    <div className="d-flex align-items-center justify-content-evenly">
                      <IoInformationCircleOutline className={styles.icon} />
                      <IoCreateOutline className={styles.icon} />
                      <IoTrashOutline className={styles.icon} />
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Products;
