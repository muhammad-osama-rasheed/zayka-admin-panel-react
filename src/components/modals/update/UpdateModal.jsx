import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { DARK_GREEN } from "../../../utils/colors/Colors";
import BorderButton from "../../modalBtn/borderButton/BorderButton";
import BgButton from "../../modalBtn/bg/BgButton";
import styles from "./UpdateModal.module.css";
import CustomInput from "../../input/CustomInput";
import {
  MdWidgets,
  MdOutlineWidgets,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";
import { useRef } from "react";

function UpdateModal({
  headerTitle,
  borderBtnTitle,
  bgBtnTitle,
  showUpdateModal,
  setShowUpdateModal,
  updateItem,
}) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [newImg, setNewImg] = useState("");
  const [tempImage, setTempImage] = useState("");

  const fileInputRef = useRef(null);

  const [showDropDown, setShowDropDown] = useState(false);

  const categories = ["burger", "pizza", "seafood", "sweets", "drinks"];

  useEffect(() => {
    if (showUpdateModal) {
      setName(updateItem.name);
      setPrice(updateItem.price);
      setCategory(updateItem.category);
      setImage(updateItem.image);
    } else {
      setName("");
      setPrice("");
      setCategory("");
      setImage("");
    }
  }, [showUpdateModal, updateItem]);

  const handleRemoveImage = () => {
    setNewImg("");
    setTempImage("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const stateEmpty = () => {
    setName("");
    setPrice("");
    setCategory("");
    setImage("");
    setNewImg("");
    setTempImage("");
  };

  return (
    <Modal
      show={showUpdateModal}
      onHide={() => {
        setShowUpdateModal(false);
        stateEmpty();
      }}
      keyboard={true}
      backdrop="static"
      centered
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
          {headerTitle || "Update Product"}
        </Modal.Title>
        <img
          onClick={() => {
            setShowUpdateModal(false);
            stateEmpty();
          }}
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
            {image != "" && image && (
              <div className="col-12 mb-2">
                <div className="d-flex justify-content-between">
                  <img
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "contain",
                    }}
                    src={image}
                    alt="image"
                  />

                  <img
                    className={styles.deleteIcon}
                    onClick={() => setImage("")}
                    src="/images/delete.png"
                    alt="delete"
                  />
                </div>
              </div>
            )}

            {tempImage != "" && tempImage && (
              <div className="col-12 mb-2">
                <div className="d-flex justify-content-between">
                  <img
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "contain",
                    }}
                    src={tempImage}
                    alt="icon"
                  />
                  <img
                    onClick={handleRemoveImage}
                    className={styles.deleteIcon}
                    src="/images/delete.png"
                    alt="delete"
                  />
                </div>
              </div>
            )}

            <div className="col-12">
              <CustomInput
                value={name}
                title={"Name"}
                labelColor={true}
                placeholder={"ex. Classic Burger"}
                icon={"MdFastfood"}
                iconOutline={"MdOutlineFastfood"}
              />
            </div>

            <div className="col-12">
              <CustomInput
                value={price}
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
                ref={fileInputRef}
                onChange={(event) => {
                  setNewImg(event.target.files[0]);
                  setTempImage(URL.createObjectURL(event.target.files[0]));
                  setImage("");
                }}
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
          onClick={() => {
            setShowUpdateModal(false);
            stateEmpty();
          }}
        />
        <BgButton title={bgBtnTitle || "Update"} />
      </Modal.Footer>
    </Modal>
  );
}

export default UpdateModal;
