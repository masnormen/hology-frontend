import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logotext.png";
import "./Navbar.scss";

function Navbar() {
  const [isTransparent, setIsTrasnparent] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsTrasnparent(true);
      } else setIsTrasnparent(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`navbar ${isTransparent ? "navbar-color" : ""}`}>
      <img src={Logo} alt="Logo Hology" className="logo-text" />
      <div className="options">
        <div>
          <NavLink
            exact
            activeClassName="navbar__link--active"
            className="navbar__link"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            activeClassName="navbar__link--active"
            className="navbar__link"
            to="/competition"
          >
            Competition
          </NavLink>
          <NavLink
            activeClassName="navbar__link--active"
            className="navbar__link"
            to="/goacademy"
          >
            Academy
          </NavLink>
          <NavLink
            activeClassName="navbar__link--active"
            className="navbar__link"
            to="/event"
          >
            Event
          </NavLink>
        </div>
        <div className="line"></div>
        <div>
          <NavLink
            activeClassName="navbar__link--active"
            className="navbar__link"
            to="/login"
          >
            Login
          </NavLink>
          <NavLink
            activeClassName="navbar__link--active"
            className="navbar__link"
            to="/register"
          >
            Register
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
