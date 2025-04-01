import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Login from "./auth/loginPage/Login";
import SignUp from "./auth/signupPage/SignUp";
import { Toaster } from "react-hot-toast";
import ResetPassword from "./auth/resetPassword/ResetPassword";
import Main from "./pages/main/Main";

function App() {
  return (
    <Router>
      <InitialRedirect />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Main />} />
        <Route path="reset-password/:token" element={<ResetPassword />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

function InitialRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/login");
  }, []);

  return null;
}

export default App;
