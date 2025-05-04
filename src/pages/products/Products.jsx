import React, { useContext, useState } from "react";
import styles from "./Products.module.css";
import DarkBgButton from "../../components/buttons/bgBtn/DarkBgButton";
import { IoSearchOutline } from "react-icons/io5";
import CustomTable from "../../components/table/CustomTable";
import MyContext from "../../context/MyContext";
import { DARK_GREEN } from "../../utils/colors/Colors";
import AddModal from "../../components/modals/AddModal";
import DeleteModal from "../../components/modals/delete/DeleteModal";
import UpdateModal from "../../components/modals/update/UpdateModal";
function Products() {
  const context = useContext(MyContext);
  const { theme } = context;

  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const [updateItem, setUpdateItem] = useState("");

  let tableHeading = [
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

  // const tableValue = [];

  const tableValue = [
    {
      id: 1,
      name: "Zayka Burger",
      image: "/images/classicburger.png",
      price: "700",
      category: "burger",
    },
    {
      id: 2,
      name: "Classic Burger",
      image: "/images/biggiecheese.png",
      price: "300",
      category: "burger",
    },
    {
      id: 3,
      name: "Peri Peri Pizza",
      image: "/images/pizza.png",
      price: "1200",
      category: "pizza",
    },
  ];

  // tableValue.forEach((item) => {
  //   item.category =
  //     item.category.charAt(0).toUpperCase() + item.category.slice(1);
  // });

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
          <DarkBgButton
            title={"Add Item"}
            onClick={() => setShowAddModal(true)}
          />
        </div>
      </div>

      <CustomTable
        tableHeading={tableHeading}
        tableValue={tableValue}
        showInfoIcon={true}
        showEditIcon={true}
        showDeleteIcon={true}
        setShowDeleteModal={setShowDeleteModal}
        setShowUpdateModal={setShowUpdateModal}
        setUpdateItem={setUpdateItem}
      />

      <AddModal
        showAddModal={showAddModal}
        setShowAddModal={setShowAddModal}
        borderBtnTitle={"Cancel"}
        bgBtnTitle={"Add Product"}
        headerTitle={"Add Product"}
      />

      <DeleteModal
        showDeleteModal={showDeleteModal}
        setShowDeleteModal={setShowDeleteModal}
        borderBtnTitle={"Cancel"}
        bgBtnTitle={"Delete Product"}
        headerTitle={"Delete Product"}
      />

      <UpdateModal
        showUpdateModal={showUpdateModal}
        setShowUpdateModal={setShowUpdateModal}
        updateItem={updateItem}
      />
    </div>
  );
}

export default Products;
