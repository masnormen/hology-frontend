import React from "react";
import "./Paragraph.scss";

const Paragraph = ({ children, header = false, large = false }) => {
  return (
    <p
      className={`paragraph ${header ? "paragraph-header" : ""} ${
        large ? "paragraph-large" : ""
      }`}
    >
      {children}
    </p>
  );
};

export default Paragraph;
