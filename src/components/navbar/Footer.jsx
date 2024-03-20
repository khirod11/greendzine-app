import React from "react";
import "./Footer.css";
import { ImHome } from "react-icons/im";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import User from "../user/User";
const Footer = () => {
  return (
    <div className="footer-container">
      <Link to="/home">
        <div className="icon">
          <ImHome />
        </div>
      </Link>
      <Link to="/user">
        <div className="icon">
          <FaUser />
        </div>
      </Link>
    </div>
  );
};

export default Footer;
