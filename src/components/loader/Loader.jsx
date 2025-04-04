import React from "react";
import Lottie from "lottie-react";
import zayka from "../../animations/zayka.json";

function Loader() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
        overflow: "hidden",
        transition: "backgroundColor 0.5s ease-in-out",
      }}
    >
      <Lottie
        animationData={zayka}
        loop={true}
        style={{
          width: 70,
          height: 70,
          backgroundColor: "white",
          borderRadius: "100px",
          padding: "10px",
          border: "5px solid #ccc",
        }}
      />
    </div>
  );
}

export default Loader;
