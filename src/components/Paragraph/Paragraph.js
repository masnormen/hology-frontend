import React from "react";
import "./Paragraph.scss";

const Paragraph = ({ children, header = false, large = false, justify = false, bold = false }) => {
  return (
    <p
      className={`paragraph ${justify ? "justify" : ""} ${bold ? "bold" : ""} ${header ? "paragraph-header" : ""} ${
        large ? "paragraph-large" : ""
      }`}
    >
      {children}
    </p>
  );
};

export default Paragraph;
