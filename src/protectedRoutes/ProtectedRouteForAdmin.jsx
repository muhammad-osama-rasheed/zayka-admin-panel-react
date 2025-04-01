import React from "react";
import { Navigate, replace } from "react-router-dom";

function ProtectedRouteForAdmin({ children }) {
  const role = localStorage.getItem("role");
  if (
    !(
      role === import.meta.env.VITE_API_URL_ROLE1 ||
      role === import.meta.env.VITE_API_URL_ROLE1
    )
  ) {
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("role");
    localStorage.removeItem("jwtToken");

    return <Navigate to={"/login"} replace={true} />;
  }

  return children;
}

export default ProtectedRouteForAdmin;
