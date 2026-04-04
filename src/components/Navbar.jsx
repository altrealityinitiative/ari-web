import "./Navbar.css";
import { BrowserRouter, Routes, Route, Link, NavLink} from "react-router-dom";
import Meetings from "../pages/Meetings";
import Home from "../pages/Home";
import logo from "../assets/images/ari-logo/ari-logo-main.png";


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/">
            <img
              src={logo}
              alt="ARI Logo"
              className="logo-image"
            />
          </Link>
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
          <li className="nav-item">
            <NavLink to="/projects">Projects</NavLink>
          </li>
          {/* Add more links as needed */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
