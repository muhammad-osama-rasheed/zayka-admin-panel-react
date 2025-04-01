import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import CustomInput from "../../components/input/CustomInput";
import DarkBgButton from "../../components/buttons/bgBtn/DarkBgButton";
import toast from "react-hot-toast";
import styles from "../loginPage/Login.module.css";
import Loader from "../../components/loader/Loader";
function ForgotPasswordModal({
  showForgotPasswordModal,
  setShowForgotPasswordModal,
}) {
  const [email, setEmail] = useState("");
  const [badEmail, setBadEmail] = useState("");

  const [loading, setLoading] = useState(false);

  const validation = () => {
    let validEmail = true;

    if (email === "") {
      setBadEmail("Please enter your email.");
      validEmail = false;
    } else if (
      email !== "" &&
      !/^[a-z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com|hotmail\.com|aol\.com|szabist\.pk)$/.test(
        email
      )
    ) {
      setBadEmail("Please enter a valid email.");
      validEmail = false;
    } else {
      setBadEmail("");
      validEmail = true;
    }

    return validEmail;
  };

  const emptyState = () => {
    setEmail("");
    setBadEmail("");
  };

  const handleSubmit = async () => {
    try {
      setShowForgotPasswordModal(false);
      setLoading(true);
      const response = await fetch(
        import.meta.env.VITE_API_URL_FORGOT_PASSWORD,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
          }),
        }
      );

      const result = await response.json();

      const { success, message } = result;

      if (success) {
        toast.success(message || "Reset link sent.");
      } else {
        toast.error(message || "Failed to sent reset link.");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to reset password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loader />}
      <Modal
        show={showForgotPasswordModal}
        onHide={() => {
          setShowForgotPasswordModal(false);
          emptyState();
        }}
        size="sm"
        centered
      >
        <Modal.Body>
          <div className="row">
            <div className="col-12 text-end">
              <img
                onClick={() => {
                  setShowForgotPasswordModal(false);
                  emptyState();
                }}
                src="/images/cancel.png"
                alt="cancel-icon"
                style={{
                  width: "16px",
                  height: "16px",
                  marginBottom: "20px",
                  cursor: "pointer",
                }}
              />
            </div>

            <div className="col-12">
              <p
                className=""
                style={{
                  color: "#000000B3",
                  fontSize: "13px",
                  marginBottom: "5px",
                  textAlign: "center",
                }}
              >
                Please enter your email address to receive a password reset
                link.
              </p>
            </div>
            <div className="col-12">
              <CustomInput
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                type={"text"}
                title={"Email"}
                placeholder={"Enter your email"}
                icon={"MdEmail"}
                iconOutline={"MdOutlineEmail"}
                name={"email"}
                bad={badEmail !== ""}
              />
              {badEmail && (
                <div className="d-flex align-items-center mb-2 mx-1">
                  <div className="me-1">
                    <img
                      src="/images/error.png"
                      alt="error-image"
                      style={{ width: "12px", height: "12px" }}
                    />
                  </div>
                  <div className={styles.errorMessage}>{badEmail}</div>
                </div>
              )}
            </div>

            <div className="col-12">
              <DarkBgButton
                title={"Send Reset Link"}
                onClick={() => {
                  if (validation()) {
                    handleSubmit();
                    emptyState();
                  }
                }}
              />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ForgotPasswordModal;
