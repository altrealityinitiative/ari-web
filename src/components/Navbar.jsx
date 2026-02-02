import "./Navbar.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Meetings from "../pages/Meetings";
import Home from "../pages/Home";


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <img
            src="/src/assets/images/ari-logo/ari-logo-main.png"
            alt="ARI Logo"
            className="logo-image"
          />
        </div>

        {/* Navigation Links */}
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/meetings">Meetings</Link>
          </li>
          <li className="nav-item">
            <Link to="/workshops">Workshops</Link>
          </li>
          {/* Add more links as needed */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
