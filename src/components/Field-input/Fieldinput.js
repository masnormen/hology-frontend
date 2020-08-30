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
        placeholder="Ketik di sini..."
        onChange={handleChange}
        {...otherProps}
      />
    </div>
  );
};

export default Fieldinput;
