import React from "react";
import { DARK_GREEN } from "../../../utils/colors/Colors";
import styles from "./BorderButton.module.css";
function BorderButton({ title, onClick }) {
  return (
    <div onClick={onClick} className={styles.container}>
      <span className={styles.titleText}>{title}</span>
    </div>
  );
}

export default BorderButton;
