import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./receipt.css";

const Receipt = () => {
  const location = useLocation();
  const orderNumber = new URLSearchParams(location.search).get("order");

  useEffect(() => {
    if (orderNumber) {
    }
  }, [orderNumber]);

  return (
    <div className="receipt-container">
      <h1>Order Confirmed</h1>
      <p>
        Order Number: <span>{orderNumber}</span>
      </p>
      <div className="dashed-line"></div>
      <p>Thank you for your purchase!</p>
      <div className="dashed-line"></div>
      <p>Visit us again!</p>
    </div>
  );
};

export default Receipt;