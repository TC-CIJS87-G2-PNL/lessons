import React from "react";
import { Link } from "react-router-dom";
import './style.css'
const Header = () => {
  return (
    <header>
      <h5 className="app_name">MINDX CINEMA</h5>
      <ul className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Product</Link>
        </li>
        <li>
          <Link to="/">Invoice</Link>
        </li>
        <li>
          <Link to="/">Profile</Link>
        </li>
        <li>
          <Link to="/">About-us</Link>
        </li>
        <li>
          <Link to="/">Cart</Link>
        </li>
        <li className="dropdown">
          <button class="dropbtn">&#9776;</button>
          <ul class="dropdown-content">
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/">Signup</Link>
            </li>
          </ul>
        </li>
      </ul>
    </header>
  );
};

export default Header;
