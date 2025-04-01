import React from "react";
import styles from "./Layout.module.css";
import Home from "../../pages/home/Home";
import Products from "../../pages/products/Products";
import Orders from "../../pages/orders/Orders";
import Reviews from "../../pages/reviews/Reviews";
import Logout from "../../pages/logout/Logout";
import Categories from "../../pages/categories/Categories";
import Users from "../../pages/users/Users";
function Layout({
  activeIndex,
  setActiveIndex,
  showMenu,
  showLogout,
  setShowLogout,
}) {
  return (
    <div
      className={`${showMenu ? styles.smMainContent : styles.lgMainContent}`}
    >
      {activeIndex === 0 && <Home />}
      {activeIndex === 1 && <Products />}
      {activeIndex === 2 && <Orders />}
      {activeIndex === 3 && <Categories />}
      {activeIndex === 4 && <Users />}
      {activeIndex === 5 && <Reviews />}
      {activeIndex === 6 && (
        <Logout
          showLogout={showLogout}
          setShowLogout={setShowLogout}
          setActiveIndex={setActiveIndex}
        />
      )}
    </div>
  );
}

export default Layout;
