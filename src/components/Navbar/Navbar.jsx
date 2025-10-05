import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import arrow from "../../assets/arrow.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="" className="logo" />
      <ul>
        <li>Inicio</li>
        <li>Blog</li>
      </ul>
      <div className="nav-right">
        <select>
          <option value="usd">USD</option>
          <option value="pyg">PYG</option>
        </select>
        <button>
          Registrate <img src={arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
