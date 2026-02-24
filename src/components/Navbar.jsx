import "./Navbar.css";
import { NavLink } from "react-router-dom";
import ariLogo from "../assets/images/ari-logo/ari-logo-main.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <img src={ariLogo} alt="ARI Logo" className="logo-image" />
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
            <NavLink to="/workshops">Workshops</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
