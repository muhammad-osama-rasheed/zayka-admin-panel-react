import React from "react";
import { Modal } from "react-bootstrap";
import BorderButton from "../../modalBtn/borderButton/BorderButton";
import BgButton from "../../modalBtn/bg/BgButton";
import { DARK_GREEN } from "../../../utils/colors/Colors";
import toast from "react-hot-toast";
function DeleteModal({
  showDeleteModal,
  setShowDeleteModal,
  borderBtnTitle,
  bgBtnTitle,
  headerTitle,
  title,
  id,
  url,
  method,
}) {
  const handleDelete = async () => {
    try {
      // setLoading(true);

      const response = await fetch(`${url}/${id}`, {
        method: "DELETE",
        // headers: {
        //   Authorization: localStorage.getItem("jwtToken"),
        // },
      });

      const result = await response.json();
      const { success, message } = result;

      if (success) {
        method();
        toast.success(message || "Deleted successfully.");

        setShowDeleteModal(false);
      } else {
        toast.error(message || "Failed to delete.");
        setShowDeleteModal(false);
      }
    } catch (error) {
      toast.error("Failed to delete record.");
      console.log(error);
    } finally {
      // setLoading(false);
    }
  };

  return (
    <Modal
      show={showDeleteModal}
      onHide={() => setShowDeleteModal(false)}
      centered
      backdrop="static"
      keyboard={true}
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
          {headerTitle || "Delete Product"}
        </Modal.Title>
        <img
          onClick={() => setShowDeleteModal(false)}
          style={{ width: "20px", height: "20px", cursor: "pointer" }}
          src="/images/close.png"
          alt="close"
        />
      </Modal.Header>

      <Modal.Body
        style={{
          background: "#f0f8f0",
          fontFamily: "Quicksand, sans-serif",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              Are you sure you want to delete this {title || "product"}?
            </div>
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer style={{ background: "#f0f8f0" }}>
        <BorderButton
          title={borderBtnTitle || "Cancel"}
          onClick={() => setShowDeleteModal(false)}
        />
        <BgButton
          title={bgBtnTitle || "Delete"}
          onClick={() => handleDelete()}
        />
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteModal;
