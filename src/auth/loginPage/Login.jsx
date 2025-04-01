import React, { useState } from "react";
import styles from "./Login.module.css";
import CustomInput from "../../components/input/CustomInput";
import { DARK_GREEN } from "../../utils/colors/Colors";
import DarkBgButton from "../../components/buttons/bgBtn/DarkBgButton";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import ForgotPasswordModal from "../forgotPassword/ForgotPasswordModal";
import Loader from "../../components/loader/Loader";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);

  const [badEmail, setBadEmail] = useState("");
  const [badPassword, setBadPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validation = () => {
    let validEmail = true;
    let validPassword = true;

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

    if (password === "") {
      setBadPassword("Please enter your password.");
      validPassword = false;
    } else if (password.length < 6) {
      setBadPassword("Password should be at least 6 characters long.");
      validPassword = false;
    } else {
      setBadPassword("");
      validPassword = true;
    }

    return validEmail && validPassword;
  };

  const emptyState = () => {
    setEmail("");
    setPassword("");
    setBadEmail("");
    setBadPassword("");
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const response = await fetch(import.meta.env.VITE_API_URL_LOGIN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const result = await response.json();

      const { success, message, jwtToken, name, error, role } = result;

      if (success) {
        if (role === "manager" || role === "admin") {
          toast.success("Login Successfully!");
        } else {
          toast.error("You are not authorized to access.");
          return navigate("/login");
        }

        localStorage.setItem("jwtToken", jwtToken);
        localStorage.setItem("name", name);
        localStorage.setItem("email", result.email);
        localStorage.setItem("role", role);
        setTimeout(() => {
          navigate("/", { replace: true });
        }, 1000);
      } else if (error) {
        const details = error.details[0].message;
        toast.error(details);
      } else {
        toast.error(message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to Login.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loader />}
      <div
        style={{ height: "100vh", marginTop: "100px" }}
        className="container d-flex flex-column align-items-center"
      >
        <div className={styles.innerContainer}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2
                  style={{ color: DARK_GREEN }}
                  className={styles.welcomeText}
                >
                  Welcome Back! 🚀
                </h2>
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
                  <div className="d-flex align-items-center mb-2">
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
                <CustomInput
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  type={"password"}
                  title={"Password"}
                  placeholder={"Enter your password"}
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
                <p
                  onClick={() => setShowForgotPasswordModal(true)}
                  style={{ color: DARK_GREEN }}
                  className={styles.forgotText}
                >
                  Forgot password?
                </p>
              </div>

              <div className="col-12">
                <DarkBgButton
                  title={"Login"}
                  onClick={() => {
                    if (validation()) {
                      handleSubmit();
                      emptyState();
                    }
                  }}
                />
              </div>
              <div className="col-12 text-center">
                <span style={{ fontSize: "13px" }}>
                  Don't have an account yet?
                </span>
                <Link
                  to={"/SignUp"}
                  style={{
                    fontSize: "13px",
                    fontWeight: "600",
                    marginLeft: "5px",
                    color: DARK_GREEN,
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                >
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        <ForgotPasswordModal
          showForgotPasswordModal={showForgotPasswordModal}
          setShowForgotPasswordModal={setShowForgotPasswordModal}
        />
      </div>
    </>
  );
}

export default Login;
