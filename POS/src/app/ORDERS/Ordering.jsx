import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./orderingstyle.css";
import "../style.css";
import ADOSILOG from "./menu/ADOSILOG.jpeg";
import BANGSILOG from "./menu/BANGSILOG.webp";
import CHICKSILOG from "./menu/CHICKSILOG.jpeg";
import CORNSILOG from "./menu/CORNSILOG.png";
import DANGSILOG from "./menu/DANGSILOG.jpg";
import HOTSILOG from "./menu/HOTSILOG.jpg";
import LIEMPOSILOG from "./menu/LIEMPOSILOG.jpg";
import LONGSILOG from "./menu/LONGSILOG.png";
import RIBSILOG from "./menu/RIBSILOG.jpg";
import SISIGSILOG from "./menu/RIBSILOG.jpg";
import SPAMSILOG from "./menu/SPAMSILOG.jpg";
import TAPSILOG from "./menu/TAPSILOG.jpg";
import TOCILOG from "./menu/TOCILOG.jpeg";

const FoodMenu = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [orderNumber, setOrderNumber] = useState(null);
  const navigate = useNavigate();

  const menuItems = [
    { name: "ADOSILOG", price: 8.99, stock: 10, image: ADOSILOG },
    { name: "BANGSILOG", price: 5.99, stock: 10, image: BANGSILOG },
    {
      name: "CHICKSILOG",
      price: 5.99,
      stock: 10,
      image: CHICKSILOG,
    },
    { name: "CORNSILOG", price: 5.99, stock: 10, image: CORNSILOG },
    { name: "DANGSILOG", price: 5.99, stock: 10, image: DANGSILOG },
    { name: "HOTSILOG", price: 5.99, stock: 10, image: HOTSILOG },
    {
      name: "LIEMPOSILOG",
      price: 5.99,
      stock: 10,
      image: LIEMPOSILOG,
    },
    { name: "LONGSILOG", price: 5.99, stock: 10, image: LONGSILOG },
    { name: "RIBSILOG", price: 5.99, stock: 10, image: RIBSILOG },
    {
      name: "SISIGSILOG",
      price: 5.99,
      stock: 10,
      image: SISIGSILOG,
    },
    { name: "SPAMSILOG", price: 5.99, stock: 10, image: SPAMSILOG },
    { name: "TAPSILOG", price: 5.99, stock: 10, image: TAPSILOG },
    { name: "TOCILOG", price: 5.99, stock: 10, image: TOCILOG },
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
    setTotal((prevTotal) => prevTotal + item.price);
  };

  const confirmOrder = () => {
    const generatedOrderNumber = Math.floor(Math.random() * 1000000);
    setOrderNumber(generatedOrderNumber);

    // Navigate to the Receipt page with the order number as a query parameter
    navigate(`/Receipt?order=${generatedOrderNumber}`);
  };

  return (
    <div>
      <header className="header">
        <h1>Promos!!!!!!!!!!</h1>
        <button
          className="menu-toggle"
          onClick={() => (window.location.href = "Home.jsx")}
        >
          ☰ Menu
        </button>
      </header>

      <div className="menu-wrapper">
        <div className="menu-container">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="menu-item"
              data-name={item.name}
              data-price={item.price}
              data-stock={item.stock}
            >
              <div className="image-placeholder">
                <img src={item.image} alt={item.name} />
              </div>
              <p>{item.name}</p>
              <p>Price: ${item.price}</p>
              <button className="add-to-cart" onClick={() => addToCart(item)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="cart">
        <h2>Your Cart</h2>
        <ul id="cart-items">
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
        <p>Total: ${total.toFixed(2)}</p>
        <button className="submit-btn" onClick={confirmOrder}>
          Confirm Order
        </button>

        {orderNumber && (
          <div id="order-details">
            <p>
              Order Number: <span id="order-number">{orderNumber}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodMenu;
