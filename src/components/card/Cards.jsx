import React from "react";
import styles from "./Cards.module.css";
import * as Icon from "react-icons/io5";

function Cards({ count, title, icon, setActiveIndex }) {
  const IconComponent = Icon[icon];
  return (
    <div
      onClick={() => {
        if (
          title === "Products"
            ? setActiveIndex(1)
            : title === "Total Orders"
            ? setActiveIndex(2)
            : title === "Users"
            ? setActiveIndex(4)
            : title === "Reviews"
            ? setActiveIndex(5)
            : ""
        );
      }}
      className={styles.cardContainer}
    >
      <div className={styles.innerContainer}>
        <div className={styles.detailsContainer}>
          <span className={styles.count}>{count}</span>
          <span className={styles.title}>{title}</span>
        </div>

        {IconComponent && <IconComponent className={styles.icon} />}
      </div>
    </div>
  );
}

export default Cards;
