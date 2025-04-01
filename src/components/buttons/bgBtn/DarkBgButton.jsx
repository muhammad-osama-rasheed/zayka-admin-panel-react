import React from "react";
import { DARK_GREEN } from "../../../utils/colors/Colors";
import styles from "./DarkBgButton.module.css";
function DarkBgButton({ title, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{ background: DARK_GREEN }}
      className={styles.container}
    >
      <span className={styles.titleText}>{title}</span>
    </div>
  );
}

export default DarkBgButton;
