import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader/Loader";

function Home() {
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

      <div>
        <h1>Welcome,Osama!</h1>
      </div>
    </>
  );
}

export default Home;
