import React from "react";
import "./Header.scss";

const Header = ({
  children,
  center = false,
  size = "r",
  lineWhite = false,
  wrap = false,
  noLine = false,
}) => {
  return (
    <div>
      <span className="header">
        <h1 className={`text ${wrap ? "wrap" : ""} ${size} ${center ? "center" : ""}`}>{children}</h1>
        {!noLine && (
          <hr className={`line ${lineWhite ? "line-white" : ""}`} align="left" />
        )}
      </span>
    </div>
  );
};

export default Header;
