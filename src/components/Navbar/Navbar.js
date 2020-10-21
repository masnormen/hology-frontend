import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logotext.png";
import "./Navbar.scss";
import { CSSTransition } from "react-transition-group";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import CheckSession from "../CheckSession";

function Navbar() {
  const [isTransparent, setIsTrasnparent] = useState(false);
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 800px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsTrasnparent(true);
      } else setIsTrasnparent(false);
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  return (
    <div className={`navbar ${isTransparent ? "navbar-color" : ""}`}>
      <img src={Logo} alt="Logo Hology" className="logo-text" />
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <div className="options">
          <div className="section-1" onClick={toggleNav}>
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
              className="navbar__link  disabled"
              to="/goacademy"
            >
              Academy
            </NavLink>
            <NavLink
              activeClassName="navbar__link--active"
              className="navbar__link"
              to="/webinar"
            >
              Webinar
            </NavLink>
          </div>
          <div className="line"></div>
          <div className="section-2" onClick={toggleNav}>
            <CheckSession loggedOut>
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
            </CheckSession>
            <CheckSession>
              <NavLink
                activeClassName="navbar__link--active"
                className="navbar__link"
                to="/dashboard"
              >
                Dashboard
              </NavLink>
              <NavLink
                activeClassName="navbar__link--active"
                className="navbar__link"
                to="/logout"
              >
                Logout
              </NavLink>
            </CheckSession>
          </div>
        </div>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
        <span role="img" aria-label="">
          {!isNavVisible ? (
            <GiHamburgerMenu className="icon-hamburger" />
          ) : (
            <IoMdClose className="icon-hamburger" />
          )}
        </span>
      </button>
    </div>
  );
}

export default Navbar;
