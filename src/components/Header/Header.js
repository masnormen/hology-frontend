import React from "react";
import "./Header.scss";

const Header = ({ children, center = false, size = "r" }) => {
  return (
    <div>
      <span className="header">
        <h1 className={`text ${size} ${center ? "center" : ""}`}>{children}</h1>
        <hr className="line" align="left" />
      </span>
    </div>
  );
};

export default Header;
