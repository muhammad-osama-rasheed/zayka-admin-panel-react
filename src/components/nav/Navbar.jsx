import React, { useContext, useState } from "react";
import { MdAccountCircle, MdLightMode, MdDarkMode } from "react-icons/md";
import { DARK_GREEN } from "../../utils/colors/Colors";
import styles from "./Navbar.module.css";
import MyContext from "../../context/MyContext";
// import { Switch } from "@mui/material";

function Navbar({ showMenu, setShowMenu }) {
  const context = useContext(MyContext);
  const { theme, toggleTheme } = context;
  // const [checked, setChecked] = useState(false);

  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "#000" : "#fff",
        borderBottom: theme === "dark" ? "1px dotted #014421" : "",
        color: theme === "dark" ? "#fff" : "",
      }}
      className={showMenu ? styles.navContainer : styles.navbarContainer}
    >
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
          <MdAccountCircle
            size={16}
            color={theme === "dark" ? "#fff" : DARK_GREEN}
          />
          <span
            style={{ fontSize: "14px", fontWeight: "500" }}
            className="ms-1"
          >
            Osama
          </span>

          {/* <div>
            <Switch
              checked={checked}
              onChange={() => {
                setChecked(!checked);
                toggleTheme();
              }}
              color="success"
              icon={
                <img
                  src="/images/light.png"
                  alt="light"
                  style={{ width: "20px", height: "20px" }}
                />
              }
              checkedIcon={
                <img
                  src="/images/dark.png"
                  alt="dark"
                  style={{ width: "20px", height: "20px" }}
                />
              }
            />
          </div> */}
          {theme === "light" ? (
            <MdLightMode
              style={{
                cursor: "pointer",
                transition: "all 0.5s",
                marginLeft: "8px",
              }}
              onClick={() => toggleTheme()}
              size={16}
              color={theme === "dark" ? "#fff" : DARK_GREEN}
            />
          ) : (
            <MdDarkMode
              style={{
                cursor: "pointer",
                transition: "all 0.5s",
                marginLeft: "8px",
              }}
              onClick={() => toggleTheme()}
              size={16}
              color={theme === "dark" ? "#fff" : DARK_GREEN}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
