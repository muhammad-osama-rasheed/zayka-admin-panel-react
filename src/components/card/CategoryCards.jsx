import React from "react";
import styles from "./Cards.module.css";
import * as Icon from "react-icons/fa";

function CategoryCards({ count, title, icon, category, setCategory }) {
  const IconComponent = Icon[icon];
  return (
    <div
      onClick={() => {
        setCategory(title);
      }}
      className={styles.cardContainer}
      style={{
        transform: title === category && "scale(1.07)",
        backgroundColor: title === category && "rgba(1, 68, 33, 0.07)",
      }}
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

export default CategoryCards;
