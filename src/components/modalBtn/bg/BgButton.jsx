import React from "react";
import { DARK_GREEN } from "../../../utils/colors/Colors";
import styles from "./BgButton.module.css";
function BgButton({ title, onClick }) {
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

export default BgButton;
