import React from "react";
import "./Button.scss";

const Button = ({
  children,
  variant = "primary",
  margiRight = false,
  onClicked,
}) => {
  return (
    <button
      className={`button ${margiRight ? "margin-right" : ""} ${variant}`}
      onClick={onClicked}
    >
      {children}
    </button>
  );
};

export default Button;
