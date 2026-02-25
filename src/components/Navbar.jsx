import "./Navbar.css";
import { BrowserRouter, Routes, Route, Link, NavLink} from "react-router-dom";
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
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/meetings">Meetings</NavLink>
          </li>
          {/* Add more links as needed */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
