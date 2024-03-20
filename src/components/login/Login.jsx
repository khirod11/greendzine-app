
import React, { useState } from "react";
import "./Login.css";
import loginLogo from "../images/Group 3.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    // Define your default email and password here
    const defaultEmail = "user123@gmail.com";
    const defaultPassword = "password123";

    // Check if the entered email and password match the default ones
    if (email === defaultEmail && password === defaultPassword) {
      // Authentication successful, redirect to home page
      navigate("/home");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-logo">
        <img src={loginLogo} alt="" />
      </div>
      <div className="login-text">#We are Electric</div>
      <div className="login-input">
        <div className="input-box">
          <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className="login-btn" onClick={handleLogin}>Login</button>
        {error && <p className="error">{error}</p>}
        <p>Forgot Password ?</p>
      </div>
    </div>
  );
};

export default Login;

