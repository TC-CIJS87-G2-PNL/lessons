import React from "react";
import { Link } from "react-router-dom";
import './style.css'
const Header = () => {
  return (
    <header>
      <h5 className="app_name">MINDX CINEMA</h5>
      <ul className="nav">
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
