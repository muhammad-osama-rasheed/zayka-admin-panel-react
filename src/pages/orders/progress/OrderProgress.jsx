import React from "react";
import Lottie from "lottie-react";
import deliveryAnimation from "../../../animations/delivery.json";
import { DARK_GREEN } from "../../../utils/colors/Colors";

const OrderProgress = ({ currentStatus  }) => {
  const statuses = ["Pending", "Processing", "Shipped", "Delivered"];
  const currentIndex = statuses.indexOf(currentStatus);

  return (
    <div className="my-5">
      <div className="row mb-4">
        <div className="col-12">
          <span
            style={{
              color: DARK_GREEN,
              fontSize: "16px",
              fontFamily: "Quicksand, sans-serif",
              textTransform: "uppercase",
              letterSpacing: "1px",
              fontWeight: "500",
            }}
          >
            Order Status
          </span>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div
            className="d-flex justify-content-end"
            style={{
              width:
                currentStatus == "Pending"
                  ? "14%"
                  : currentStatus == "Processing"
                  ? "39%"
                  : currentStatus == "Shipped"
                  ? "64%"
                  : currentStatus == "Delivered"
                  ? "98%"
                  : "",
              transition: "width 0.5s ease",
            }}
          >
            <Lottie
              style={{
                width: "60px",
                height: "60px",
              }}
              animationData={deliveryAnimation}
              loop={currentStatus === "Delivered" ? false : true}
            />

            {/* <img
              style={{ width: "40px", height: "40px" }}
              src="/images/bike.png"
              alt=""
            /> */}
          </div>
        </div>
      </div>

      {/* Progress Bar Background */}
      <div
        className="mb-3"
        style={{ height: 4, backgroundColor: "#dee2e6", borderRadius: "100px" }}
      >
        {/* Green Progress Line */}
        <div
          style={{
            height: "100%",
            width:
              currentStatus === "Pending"
                ? "15%"
                : currentStatus === "Processing"
                ? "40%"
                : currentStatus === "Shipped"
                ? "65%"
                : `${(currentIndex / (statuses.length - 1)) * 100}%`,
            backgroundColor: "#014421",
            transition: "width 0.5s ease",
            borderRadius: "100px",
          }}
        ></div>
      </div>

      {/* Steps */}
      <div className="d-flex justify-content-between align-items-center">
        {statuses.map((status, index) => {
          const isCompleted = index <= currentIndex;
          return (
            <div
              key={index}
              className="d-flex flex-column justify-content-center align-items-center"
              style={{ width: "25%" }}
            >
              <div
                className={
                  "rounded-circle mb-2 d-flex align-items-center justify-content-center"
                }
                style={{
                  width: 30,
                  height: 30,
                  fontWeight: "bold",
                  border: "3px solid #dee2e6",
                  backgroundColor: isCompleted ? "#014421" : "#fff",
                }}
              >
                <span
                  style={{
                    fontSize: "14px",
                    color: isCompleted ? "#fff" : "#014421",
                    fontFamily: "Quicksand, sens-serif",
                  }}
                >
                  {index + 1}
                </span>
              </div>
              <div
                className={isCompleted ? "text-success fw-bold" : "text-muted"}
                style={{
                  fontSize: "11px",
                  fontFamily: "Quicksand, sens-serif",
                  textTransform: "uppercase",
                  marginLeft: "5px",
                }}
              >
                {status}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderProgress;
