import React, { useEffect, useState } from "react";
import OrderProgress from "../progress/OrderProgress";
import { useLocation, useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const location = useLocation();

  const status = location?.state?.order?.status;

  const [order, setOrder] = useState("");

  const fetchOrder = async () => {
    try {
      const response = await fetch(`https://zaykaapi.vercel.app/order/${id}`, {
        method: "GET",
      });

      const result = await response.json();
      const { success, data } = result;

      if (success) {
        setOrder(data);
      } else {
        setOrder("");
      }
    } catch (error) {
      console.log("Error Fetching: ", error);
    }
  };

  useEffect(() => {
    fetchOrder();
  }, [id]);

  return (
    <div className="container">
      <OrderProgress currentStatus={status} />
    </div>
  );
};

export default Details;
