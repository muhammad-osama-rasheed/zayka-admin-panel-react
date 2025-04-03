import React from "react";
import { MdAccountCircle } from "react-icons/md";
import { DARK_GREEN } from "../../utils/colors/Colors";
import styles from "./Header.module.css";

function Header({ showMenu, setShowMenu }) {
  return (
    <div className={styles.headerContainer}>
      <div className="d-flex justify-content-between align-items-center">
        <img
          onClick={() => setShowMenu(!showMenu)}
          style={{
            width: "20px",
            height: "20px",
            zIndex: 999,
            cursor: "pointer",
            margin: "15px 25px",
          }}
          className={styles.smBurger}
          src={"/images/burger.png"}
          alt="hamburger"
        />

        <div
          style={{ margin: "15px 25px" }}
          className="d-flex align-items-center"
        >
          <MdAccountCircle size={20} color={DARK_GREEN} />
          <span
            style={{ fontSize: "14px", fontWeight: "500" }}
            className="ms-1"
          >
            Muhammad Osama
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
