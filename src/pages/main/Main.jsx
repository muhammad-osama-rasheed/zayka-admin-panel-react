import React, { useState } from "react";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Layout from "../../components/layout/Layout";

function Main() {
  const [showMenu, setShowMenu] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showLogout, setShowLogout] = useState(false);
  return (
    <>
      <Sidebar
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        showLogout={showLogout}
        setShowLogout={setShowLogout}
      />
      {/* <Header showMenu={showMenu} setShowMenu={setShowMenu} /> */}
      <Layout
        showMenu={showMenu}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        showLogout={showLogout}
        setShowLogout={setShowLogout}
        setShowMenu={setShowMenu}
      />
    </>
  );
}

export default Main;
