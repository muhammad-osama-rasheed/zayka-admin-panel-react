import React from "react";
import { MdAccountCircle } from "react-icons/md";
import { DARK_GREEN } from "../../utils/colors/Colors";
import styles from "./Header.module.css";

function Header({ showMenu, setShowMenu }) {
  return (
    <div
      style={{
        backgroundColor: "#fff",
      }}
      className="container-fluid px-4 py-3"
    >
      <div className="d-flex justify-content-between align-items-center">
        <img
          onClick={() => setShowMenu(!showMenu)}
          className={styles.lightBurger}
          style={{
            width: "20px",
            height: "20px",
            zIndex: 999,
            marginLeft: "5px",
            cursor: "pointer",
          }}
          src="/images/hamburger.png"
          alt="hamburger"
        />

        <img
          onClick={() => setShowMenu(!showMenu)}
          style={{
            width: "20px",
            height: "20px",
            zIndex: 999,
            cursor: "pointer",
          }}
          className={styles.smBurger}
          src={showMenu ? "/images/burger.png" : "/images/hamburger.png"}
          alt="hamburger"
        />

        <div className="d-flex align-items-center">
          <MdAccountCircle size={22} color={DARK_GREEN} />
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
