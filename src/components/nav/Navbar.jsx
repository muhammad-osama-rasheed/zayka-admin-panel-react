import React from "react";
import { MdAccountCircle } from "react-icons/md";
import { DARK_GREEN } from "../../utils/colors/Colors";
import styles from "./Navbar.module.css";

function Navbar({ showMenu, setShowMenu }) {
  return (
    <div className={showMenu ? styles.navContainer : styles.navbarContainer}>
      <div className={`${styles.nav}`}>
        <img
          onClick={() => setShowMenu(!showMenu)}
          className={styles.burger}
          style={{
            width: "20px",
            height: "20px",
            cursor: "pointer",
          }}
          src="/images/burger.png"
          alt="hamburger"
        />

        <div className="d-flex align-items-center">
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

export default Navbar;
