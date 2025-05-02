import React, { useContext, useState } from "react";
import styles from "./CustomTable.module.css";
import {
  IoTrashOutline,
  IoCreateOutline,
  IoInformationCircleOutline,
} from "react-icons/io5";
import MyContext from "../../context/MyContext";

function CustomTable({
  tableHeading,
  tableValue,
  showInfoIcon,
  showEditIcon,
  showDeleteIcon,
  setShowDeleteModal,
  setShowUpdateModal,
  setUpdateItem,
}) {
  const context = useContext(MyContext);
  const { theme } = context;

  return (
    <div
      className={
        theme === "dark"
          ? styles["dark-table-container"]
          : styles["light-table-container"]
      }
    >
      <table className={styles["table"]}>
        <thead>
          <tr>
            {tableHeading?.map((item, index) => (
              <th key={index} className={styles["table-heading"]}>
                {item.label}
              </th>
            ))}
            {(showInfoIcon || showEditIcon || showDeleteIcon) && (
              <th className={styles["table-heading"]}>Actions</th>
            )}
          </tr>
        </thead>
        <tbody>
          {tableValue?.length > 0 ? (
            tableValue.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={
                  tableValue?.length !== rowIndex + 1 ? styles.valueRow : ""
                }
              >
                {tableHeading?.map((col, colIndex) => (
                  <td key={colIndex} className={styles["table-value"]}>
                    {col.key === "s.no" ? (
                      rowIndex + 1
                    ) : col.key === "image" ? (
                      <img
                        className={styles.tableImage}
                        src={row[col.key]}
                        alt="image"
                        style={{
                          width: "40px",
                          height: "40px",
                          objectFit: "contain",
                        }}
                      />
                    ) : (
                      row[col.key] || "—"
                    )}
                  </td>
                ))}
                {(showInfoIcon || showEditIcon || showDeleteIcon) && (
                  <td className={styles["table-value"]}>
                    <div className="d-flex align-items-center justify-content-evenly">
                      {showInfoIcon && (
                        <IoInformationCircleOutline className={styles.icon} />
                      )}
                      {showEditIcon && (
                        <IoCreateOutline
                          className={styles.icon}
                          onClick={() => {
                            setShowUpdateModal(true);
                            setUpdateItem(row);
                          }}
                        />
                      )}
                      {showDeleteIcon && (
                        <IoTrashOutline
                          className={styles.icon}
                          onClick={() => setShowDeleteModal(true)}
                        />
                      )}
                    </div>
                  </td>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={(tableHeading?.length + 1).toString()}
                className={styles["table-value"]}
              >
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CustomTable;
