import React, { useContext, useEffect, useState } from "react";
import styles from "./Orders.module.css";
import { Link, useNavigate } from "react-router-dom";
import MyContext from "../../context/MyContext";
import {
  IoDocumentText,
  IoCreate,
  IoBan,
  IoHourglassOutline,
} from "react-icons/io5";
import { HiTruck } from "react-icons/hi";
import { MdAutorenew, MdDoneAll } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import { DARK_GREEN } from "../../utils/colors/Colors";
import DeleteModal from "../../components/modals/delete/DeleteModal";
import StatusModal from "./status/StatusModal";

function Orders() {
  const context = useContext(MyContext);
  const { theme } = context;

  const [orders, setOrders] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState("");
  const [deleteId, setDeleteId] = useState("");

  const [statusModal, setStatusModal] = useState(false);
  const [item, setItem] = useState("");

  const [detailItem, setDetailItem] = useState("");

  const navigate = useNavigate();

  const getOrders = async () => {
    try {
      const response = await fetch("https://zaykaapi.vercel.app/order", {
        method: "GET",
      });

      const result = await response.json();
      const { success, message, data } = result;

      if (success) {
        setOrders(data);
      } else {
        setOrders("");
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <span
            style={{ color: theme === "dark" ? "#fff" : "#014421" }}
            className={styles.heading}
          >
            All Orders
          </span>
        </div>
      </div>

      <div className="container">
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
                <th className={styles["table-heading"]}>#</th>
                <th className={styles["table-heading"]}>User Details</th>
                <th className={styles["table-heading"]}>Product Details</th>
                <th className={styles["table-heading"]}>Shipping Address</th>
                <th className={styles["table-heading"]}>Total Amount</th>
                <th className={styles["table-heading"]}>Order Date & Time</th>
                <th className={styles["table-heading"]}>Order Details</th>
                <th className={styles["table-heading"]}>Stage</th>
                <th className={styles["table-heading"]}>Actions</th>
              </tr>
            </thead>

            {orders && orders.length > 0 ? (
              orders.map((item, index) => (
                <tbody key={index}>
                  <tr
                    key={index}
                    style={{
                      borderBottom:
                        index !== orders.length - 1
                          ? "1px dashed rgba(1, 68, 33, 0.2)"
                          : "none",
                    }}
                  >
                    <td className={styles["table-value"]}>{index + 1}</td>

                    <td className={styles["table-value"]}>
                      (Id: <strong>{item.user._id}</strong> <br />) (Name:{" "}
                      <strong>{item.user.name}</strong> )
                    </td>

                    <td
                      className={styles["table-value"]}
                      style={{ wordBreak: "break-word" }}
                    >
                      {item.products &&
                        item.products.map((product, index) => (
                          <div key={index}>
                            (#: <strong>{index + 1}</strong>){" "}
                            <strong>{product.product.name}</strong> (Qty:{" "}
                            <strong>{product.quantity}</strong>)
                            <br />
                          </div>
                        ))}
                    </td>

                    <td
                      className={styles["table-value"]}
                      style={{ wordBreak: "break-word" }}
                    >
                      (Address: <strong>{item.address}</strong>)
                    </td>

                    <td className={styles["table-value"]}>
                      Rs. {item.totalPrice}/-
                    </td>

                    <td className={styles["table-value"]}>
                      {new Date(item.orderedAt).toLocaleString("en-GB", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                      })}
                    </td>

                    <td className={styles["table-value"]}>
                      <div
                        onClick={() =>
                          navigate(`/details/${item._id}`, {
                            state: { order: item },
                          })
                        }
                        style={{ cursor: "pointer" }}
                        className="d-flex align-items-center justify-content-center"
                      >
                        <IoDocumentText
                          size={20}
                          color={theme === "dark" ? "#fff" : DARK_GREEN}
                        />
                      </div>
                    </td>

                    <td className={styles["table-value"]}>
                      <IoCreate
                        size={20}
                        color={theme === "dark" ? "#fff" : DARK_GREEN}
                        onClick={() => {
                          setItem(item);
                          setStatusModal(true);
                        }}
                      />
                      <div className="d-flex justify-content-center align-items-center mt-1">
                        {item.status === "Pending" ? (
                          <IoHourglassOutline
                            size={14}
                            color={theme === "dark" ? "#fff" : DARK_GREEN}
                          />
                        ) : item.status === "Processing" ? (
                          <MdAutorenew
                            size={14}
                            color={theme === "dark" ? "#fff" : DARK_GREEN}
                          />
                        ) : item.status === "Shipped" ? (
                          <HiTruck
                            size={14}
                            color={theme === "dark" ? "#fff" : DARK_GREEN}
                          />
                        ) : item.status === "Delivered" ? (
                          <MdDoneAll
                            size={14}
                            color={theme === "dark" ? "#fff" : DARK_GREEN}
                          />
                        ) : item.status === "Cancelled" ? (
                          <IoBan
                            size={14}
                            color={theme === "dark" ? "#fff" : DARK_GREEN}
                          />
                        ) : (
                          "N/A"
                        )}
                        <span
                          style={{
                            fontSize: "13px",
                            marginLeft: "4px",
                            fontWeight: "600",
                          }}
                        >
                          {item.status}
                        </span>
                      </div>
                    </td>

                    <td className={styles["table-value"]}>
                      <FaTrashAlt
                        onClick={() => {
                          setDeleteId(item._id);
                          setShowDeleteModal(true);
                        }}
                        size={16}
                        color={theme === "dark" ? "#fff" : DARK_GREEN}
                      />
                    </td>
                  </tr>
                </tbody>
              ))
            ) : (
              <tr>
                <td colSpan={"9"} className={styles["table-value"]}>
                  No data available
                </td>
              </tr>
            )}
          </table>
        </div>
      </div>

      <DeleteModal
        showDeleteModal={showDeleteModal}
        setShowDeleteModal={setShowDeleteModal}
        borderBtnTitle={"Cancel"}
        bgBtnTitle={"Delete Order"}
        headerTitle={"Delete Order"}
        title={"Order"}
        id={deleteId}
        method={getOrders}
        url={"http://localhost:3000/order"}
      />

      <StatusModal
        statusModal={statusModal}
        setStatusModal={setStatusModal}
        item={item}
        getOrders={getOrders}
      />
    </div>
  );
}

export default Orders;
