import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import BgButton from "../modalBtn/bg/BgButton";
import BorderButton from "../modalBtn/borderButton/BorderButton";
import { DARK_GREEN } from "../../utils/colors/Colors";
import CustomInput from "../input/CustomInput";
import styles from "./AddModal.module.css";
import {
  MdWidgets,
  MdOutlineWidgets,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";

function AddModal({
  borderBtnTitle,
  bgBtnTitle,
  headerTitle,
  showAddModal,
  setShowAddModal,
}) {
  const [category, setCategory] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);

  const categories = ["burger", "pizza", "seafood", "sweets", "drinks"];

  return (
    <Modal
      show={showAddModal}
      onHide={() => setShowAddModal(false)}
      keyboard={true}
      centered
      backdrop="static"
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
          {headerTitle}
        </Modal.Title>
        <img
          onClick={() => setShowAddModal(false)}
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
          <div className="row mb-3">
            <div className="col-12">
              <CustomInput
                title={"Name"}
                labelColor={true}
                placeholder={"ex. Classic Burger"}
                icon={"MdFastfood"}
                iconOutline={"MdOutlineFastfood"}
              />
            </div>

            <div className="col-12">
              <CustomInput
                title={"Price"}
                labelColor={true}
                placeholder={"ex. 800"}
                icon={"MdAttachMoney"}
                iconOutline={"MdOutlineAttachMoney"}
              />
            </div>

            <div className="col-12">
              <div
                className={styles.categoryContainer}
                onClick={() => setShowDropDown(!showDropDown)}
              >
                <div className="d-flex align-items-center">
                  {showDropDown ? (
                    <MdWidgets color={DARK_GREEN} size={16} />
                  ) : (
                    <MdOutlineWidgets color={"#666666"} size={16} />
                  )}
                  <span className="ms-3 text-muted">
                    {category ? (
                      <span style={{ color: "#000", fontSize: "14px" }}>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </span>
                    ) : (
                      "Choose Category"
                    )}
                  </span>
                </div>
                {showDropDown ? (
                  <MdKeyboardArrowUp color={"#666666"} size={18} />
                ) : (
                  <MdKeyboardArrowDown color={"#666666"} size={18} />
                )}
              </div>

              {showDropDown && (
                <div className={styles.dropdownContainer}>
                  {categories.map((item, index) => (
                    <div
                      style={{
                        backgroundColor: category === item ? "#014421" : "",
                        color: category === item ? "#fff" : "",
                      }}
                      onClick={() => {
                        setCategory(item);
                        setShowDropDown(false);
                      }}
                      key={index}
                      className={
                        index === 0
                          ? styles.option1
                          : index === 4
                          ? styles.option5
                          : styles.options
                      }
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="col-12">
              <input
                type="file"
                onChange={(event) => {}}
                className={styles["file-input"]}
                placeholder="Upload Product Image"
                name="image"
                required={true}
              />
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer style={{ background: "#f0f8f0" }}>
        <BorderButton
          title={borderBtnTitle || "Cancel"}
          onClick={() => setShowAddModal(false)}
        />
        <BgButton title={bgBtnTitle || "Add"} />
      </Modal.Footer>
    </Modal>
  );
}

export default AddModal;
