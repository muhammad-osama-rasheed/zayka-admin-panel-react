import React, { useState } from "react";
import styles from "./SignUp.module.css";
import CustomInput from "../../components/input/CustomInput";
import { DARK_GREEN } from "../../utils/colors/Colors";
import DarkBgButton from "../../components/buttons/bgBtn/DarkBgButton";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Loader from "../../components/loader/Loader";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [badName, setBadName] = useState("");
  const [badEmail, setBadEmail] = useState("");
  const [badPassword, setBadPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validation = () => {
    let validName = true;
    let validEmail = true;
    let validPassword = true;

    if (name === "") {
      setBadName("Please enter your name.");
      validName = false;
    } else if (name !== "" && name.length < 3) {
      setBadName("Name should be at least 3 characters long.");
      validName = false;
    } else {
      setBadName("");
      validName = true;
    }

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

    return validName && validEmail && validPassword;
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const response = await fetch(import.meta.env.VITE_API_URL_SIGNUP, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const result = await response.json();
      const { success, message } = result;

      if (success) {
        toast.success(message);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        toast.error(message);
      }
    } catch (error) {
      console.log("Error Occurred", error);
      toast.error("Failed to Signup.");
    } finally {
      setLoading(false);
    }
  };

  const emptyState = () => {
    setName("");
    setEmail("");
    setPassword("");
    setBadName("");
    setBadEmail("");
    setBadPassword("");
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
                  ✅ Create an Account
                </h2>
              </div>

              <div className="col-12">
                <CustomInput
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  type={"text"}
                  title={"Name"}
                  placeholder={"Enter your name"}
                  icon={"MdAccountCircle"}
                  iconOutline={"MdOutlineAccountCircle"}
                  name={"name"}
                  bad={badName !== ""}
                />
                {badName && (
                  <div className="d-flex align-items-center mb-2">
                    <div className="me-1">
                      <img
                        src="/images/error.png"
                        alt="error-image"
                        style={{ width: "12px", height: "12px" }}
                      />
                    </div>
                    <div className={styles.errorMessage}>{badName}</div>
                  </div>
                )}
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
                <DarkBgButton
                  onClick={() => {
                    if (validation()) {
                      handleSubmit();
                      emptyState();
                    }
                  }}
                  title={"Signup"}
                />
              </div>
              <div className="col-12 text-center">
                <span style={{ fontSize: "13px" }}>
                  Already have an account?
                </span>
                <Link
                  to={"/Login"}
                  style={{
                    fontSize: "13px",
                    fontWeight: "600",
                    marginLeft: "5px",
                    color: DARK_GREEN,
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
