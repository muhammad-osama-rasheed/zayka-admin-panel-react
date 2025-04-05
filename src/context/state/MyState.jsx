import React, { useState } from "react";
import MyContext from "../MyContext";

function MyState(props) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.body.style.backgroundColor = "#000";
    } else {
      setTheme("light");
      document.body.style.backgroundColor = "#fff";
    }
  };

  return (
    <MyContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </MyContext.Provider>
  );
}

export default MyState;
