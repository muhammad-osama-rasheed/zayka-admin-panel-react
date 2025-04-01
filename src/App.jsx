import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./auth/loginPage/Login";
import SignUp from "./auth/signupPage/SignUp";
import { Toaster } from "react-hot-toast";
import Home from "./pages/home/Home";
import ResetPassword from "./auth/resetPassword/ResetPassword";
import Main from "./pages/main/Main";

function App() {
  return (
    <Router>
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

export default App;
