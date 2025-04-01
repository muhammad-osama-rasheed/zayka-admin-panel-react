import React, { useState } from "react";
import CustomInput from "../../components/input/CustomInput";
import styles from "./ResetPassword.module.css";
import DarkBgButton from "../../components/buttons/bgBtn/DarkBgButton";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/loader/Loader";

function ResetPassword() {
  const { token } = useParams();

  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [badPassword, setBadPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [badConfirmPassword, setBadConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const validation = () => {
    let validPassword = true;
    let validConfirmPassword = true;

    if (password === "") {
      setBadPassword("Please enter new password.");
      validPassword = false;
    } else if (password.length < 6) {
      setBadPassword("Password should be at least 6 characters long.");
      validPassword = false;
    } else {
      setBadPassword("");
      validPassword = true;
    }

    if (confirmPassword === "") {
      setBadConfirmPassword("Please enter password.");
      validPassword = false;
    } else if (confirmPassword !== password) {
      setBadConfirmPassword("Passwords do not match.");
      validConfirmPassword = false;
    } else if (confirmPassword === password) {
      setBadConfirmPassword("");
      validConfirmPassword = true;
    }

    return validPassword && validConfirmPassword;
  };

  const emptyState = () => {
    setPassword("");
    setBadPassword("");
    setConfirmPassword("");
    setBadConfirmPassword("");
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_API_URL_RESET_PASSWORD}/${token}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            newPassword: password,
          }),
        }
      );

      const result = await response.json();

      const { success, message } = result;

      if (success) {
        toast.success(message || "Password reset successfully.");

        setTimeout(() => {
          navigate("/login", { replace: true });
        }, 500);
      } else {
        toast.error(message || "Failed to reset password");

        setTimeout(() => {
          navigate("/login", { replace: true });
        }, 300);
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
      <div className={`container my-5 ${styles.container}`}>
        <h2 className={styles.heading}>Reset your Password</h2>

        <div className="row">
          <div className="col-12">
            <CustomInput
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type={"password"}
              title={"Password"}
              placeholder={"Enter new password"}
              icon={"MdLock"}
              iconOutline={"MdOutlineLock"}
              name={"password"}
              bad={badPassword !== ""}
            />
            {badPassword && (
              <div className="d-flex align-items-center mb-2">
                <div className="me-1">
                  <img
                    src="/images/error.png"
                    alt="error-image"
                    style={{ width: "12px", height: "12px" }}
                  />
                </div>
                <div className={styles.errorMessage}>{badPassword}</div>
              </div>
            )}
          </div>
          <div className="col-12">
            <CustomInput
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              type={"password"}
              title={"Confirm Password"}
              placeholder={"Enter password again"}
              icon={"MdCheckCircle"}
              iconOutline={"MdOutlineCheckCircle"}
              name={"password"}
              bad={badConfirmPassword !== ""}
            />
            {badConfirmPassword && (
              <div className="d-flex align-items-center mb-2">
                <div className="me-1">
                  <img
                    src="/images/error.png"
                    alt="error-image"
                    style={{ width: "12px", height: "12px" }}
                  />
                </div>
                <div className={styles.errorMessage}>{badConfirmPassword}</div>
              </div>
            )}
          </div>
          <div className="col-12">
            <DarkBgButton
              title={"Reset Password"}
              onClick={() => {
                if (validation()) {
                  handleSubmit();
                  emptyState();
                }
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
