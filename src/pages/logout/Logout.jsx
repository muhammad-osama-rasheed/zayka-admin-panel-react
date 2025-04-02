import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import DarkBgButton from "../../components/buttons/bgBtn/DarkBgButton";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Loader from "../../components/loader/Loader";

function Logout({ showLogout, setShowLogout, setActiveIndex }) {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      setLoading(true);

      setTimeout(() => {
        localStorage.removeItem("name");
        localStorage.removeItem("email");
        localStorage.removeItem("jwtToken");
        localStorage.removeItem("role");

        toast.success("Logout Successfully!");

        setLoading(false);

        navigate("/login", { replace: true });
      }, 1000);
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while logging out.");
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loader />}
      <Modal
        show={showLogout}
        onHide={() => {
          setShowLogout(false);
          setActiveIndex(0);
        }}
        size="sm"
        centered
      >
        <Modal.Body>
          <div className="d-flex justify-content-end">
            <img
              onClick={() => {
                setShowLogout(false);
                setActiveIndex(0);
              }}
              style={{
                width: "14px",
                height: "14px",
                objectFit: "contain",
                marginBottom: "10px",
                cursor: "pointer",
              }}
              src="/images/cancel.png"
              alt="cancel"
            />
          </div>
          <p> Are you sure you want to logout?</p>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              marginTop: "10px",
            }}
          >
            <div style={{ width: "90px" }}>
              <DarkBgButton
                title={"Logout"}
                onClick={() => {
                  setShowLogout(false);
                  handleLogout();
                }}
              />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Logout;
