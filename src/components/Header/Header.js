import React from "react";
import "./Header.scss";

const Header = ({
  children,
  center = false,
  size = "r",
  lineWhite = false,
}) => {
  return (
    <div>
      <span className="header">
        <h1 className={`text ${size} ${center ? "center" : ""}`}>{children}</h1>
        <hr className={`line ${lineWhite ? "line-white" : ""}`} align="left" />
      </span>
    </div>
  );
};

export default Header;
