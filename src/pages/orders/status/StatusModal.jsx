import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { DARK_GREEN } from "../../../utils/colors/Colors";
import styles from "./StatusModal.module.css";
import BorderButton from "../../../components/modalBtn/borderButton/BorderButton";
import BgButton from "../../../components/modalBtn/bg/BgButton";
import toast from "react-hot-toast";

function StatusModal({ statusModal, setStatusModal, item, getOrders }) {
  const [currentStatus, setCurrentStatus] = useState("");

  useEffect(() => {
    if (item && statusModal) {
      setCurrentStatus(
        item.status == "Pending"
          ? 0
          : item.status == "Processing"
          ? 1
          : item.status == "Shipped"
          ? 2
          : item.status == "Delivered"
          ? 3
          : item.status == "Cancelled"
          ? 4
          : null
      );
    }
  }, [item, statusModal]);

  const handleStatus = async () => {
    try {
      const response = await fetch(
        `https://zaykaapi.vercel.app/order/${item._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status:
              currentStatus == 0
                ? "Pending"
                : currentStatus == 1
                ? "Processing"
                : currentStatus == 2
                ? "Shipped"
                : currentStatus == 3
                ? "Delivered"
                : currentStatus == 4
                ? "Cancelled"
                : null,
          }),
        }
      );

      const result = await response.json();
      const { success, message } = result;

      if (success) {
        getOrders();
        setTimeout(() => {
          toast.success("Status Updated.");
        }, 500);
      } else {
        toast.success("Failed to update status.");
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <Modal
      show={statusModal}
      centered
      onHide={() => {
        setStatusModal(false);
        setCurrentStatus(item.currentStatus);
      }}
      keyboard={true}
      backdrop="static"
      size="sm"
    >
      <Modal.Header
        style={{
          background: "#f0f8f0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Modal.Title
          style={{
            fontSize: "18px",
            fontFamily: "Quicksand, sans-serif",
            color: DARK_GREEN,
          }}
        >
          {"Update Order Status"}
        </Modal.Title>
        <img
          onClick={() => setStatusModal(false)}
          style={{ width: "20px", height: "20px", cursor: "pointer" }}
          src="/images/close.png"
          alt="close"
        />
      </Modal.Header>

      <Modal.Body
        style={{
          backgroundColor: "#f0f8f0",
          fontFamily: "Quicksand, sans-serif",
        }}
      >
        <p className="mb-0" style={{ fontWeight: "500" }}>
          Select the new order status:
        </p>

        <div className="container d-flex flex-column">
          <div
            style={{
              borderBottom: "1px dashed rgba(1, 68, 33, 0.3)",
              paddingBottom: "10px",
            }}
            className={`${styles["radio-container"]} form-check form-check-inline`}
          >
            <input
              type="radio"
              className="form-check-input"
              name="currentStatus"
              id="stagePlaced"
              value={0}
              checked={parseInt(currentStatus, 10) === 0}
              onChange={(event) =>
                setCurrentStatus(parseInt(event.target.value, 10))
              }
            />
            <label className={styles["radio-label"]} htmlFor="stagePlaced">
              Pending
            </label>
          </div>

          <div
            className={`${styles["radio-container"]} form-check form-check-inline`}
            style={{
              borderBottom: "1px dashed rgba(1, 68, 33, 0.3)",
              paddingBottom: "10px",
            }}
          >
            <input
              type="radio"
              className="form-check-input"
              name="currentStatus"
              id="stageProgressing"
              value={1}
              checked={parseInt(currentStatus, 10) === 1}
              onChange={(event) =>
                setCurrentStatus(parseInt(event.target.value, 10))
              }
            />
            <label className={styles["radio-label"]} htmlFor="stageProgressing">
              Processing
            </label>
          </div>

          <div
            className={`${styles["radio-container"]} form-check form-check-inline`}
            style={{
              borderBottom: "1px dashed rgba(1, 68, 33, 0.3)",
              paddingBottom: "10px",
            }}
          >
            <input
              type="radio"
              className="form-check-input"
              name="currentStatus"
              id="stageShipping"
              value={2}
              checked={parseInt(currentStatus, 10) === 2}
              onChange={(event) =>
                setCurrentStatus(parseInt(event.target.value, 10))
              }
            />
            <label className={styles["radio-label"]} htmlFor="stageShipping">
              Shipped
            </label>
          </div>

          <div
            className={`${styles["radio-container"]} form-check form-check-inline`}
            style={{
              borderBottom: "1px dashed rgba(1, 68, 33, 0.3)",
              paddingBottom: "10px",
            }}
          >
            <input
              type="radio"
              className="form-check-input"
              name="currentStatus"
              id="stageDelivered"
              value={3}
              checked={parseInt(currentStatus, 10) === 3}
              onChange={(event) =>
                setCurrentStatus(parseInt(event.target.value, 10))
              }
            />
            <label className={styles["radio-label"]} htmlFor="stageDelivered">
              Delivered
            </label>
          </div>

          <div
            className={`${styles["radio-container"]} form-check form-check-inline`}
          >
            <input
              type="radio"
              className="form-check-input"
              name="currentStatus"
              id="stageCancelled"
              value={4}
              checked={parseInt(currentStatus, 10) === 4}
              onChange={(event) =>
                setCurrentStatus(parseInt(event.target.value, 10))
              }
            />
            <label className={styles["radio-label"]} htmlFor="stageCancelled">
              Cancelled
            </label>
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer style={{ backgroundColor: "#f0f8f0" }}>
        <BorderButton
          title={"Close"}
          onClick={() => {
            setStatusModal(false);
            setCurrentStatus(item.currentStatus);
          }}
        />

        <BgButton
          title={"Save Changes"}
          onClick={() => {
            handleStatus();
            setStatusModal(false);
            setCurrentStatus(item.currentStatus);
          }}
        />
      </Modal.Footer>
    </Modal>
  );
}

export default StatusModal;
