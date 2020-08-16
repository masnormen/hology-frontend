import React from "react";
import "./Fieldinput.scss";

const Fieldinput = ({
  handleChange,
  label,
  marbott = false,
  ...otherProps
}) => {
  return (
    <div className={`field-input  ${marbott ? "margin-bottom" : ""}`}>
      <label className="label">{label}</label>
      <input
        className="input"
        placeholder="Type here"
        onChange={handleChange}
        {...otherProps}
      />
    </div>
  );
};

export default Fieldinput;
