// src/Login.jsx
import React, { useState } from "react";
import "./signupDesign.css"; // Ensure this file is in the src directory or adjust the path
import Signup from "./signup.jpg"; // Importing the image
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook

const Login = () => {
  const [username, setUsername] = useState(""); // Storing username input
  const [password, setPassword] = useState(""); // Storing password input
  const [loginError, setLoginError] = useState(""); // Storing login error message

  const navigate = useNavigate(); // Declare navigate using the useNavigate hook

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission from refreshing the page

    // Simple login logic (replace with real authentication)
    if (username === "admin" && password === "password") {
      navigate("/Home"); // Redirect to Ordering page
    } else if (username === "user" && password === "password") {
      navigate("/customerordering"); // Redirect to customer ordering page
    } else if (username === "cashier" && password === "password") {
      navigate("/customerordering"); // Redirect to the same page as "user"
    } else {
      setLoginError("Invalid username or password"); // Display error message
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${Signup})`, // Use backticks for template literals
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="login-container" id="login-container">
        <h1>Login</h1>
        <form id="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Handle username input change
            required
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Handle password input change
            required
          />
          <button type="submit">Login</button>
          {loginError && <p id="login-error">{loginError}</p>}{" "}
          {/* Display login error if invalid */}
        </form>
      </div>
    </div>
  );
};

// Make sure you have a default export
export default Login;
