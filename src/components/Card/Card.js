import React from "react";
import "./Card.scss";
import Header from "../Header/Header";
import Paragraph from "../Paragraph/Paragraph";

const Card = ({ title, subtitle, variant = "purple" }) => {
  return (
    <div className={`card-category-container ${variant}`}>
      <div className="icon"></div>
      <div className="title">
        <Header size="s" center lineWhite>
          {title}
        </Header>
      </div>
      <div className="subtitle">
        <Paragraph>{subtitle}</Paragraph>
      </div>
    </div>
  );
};

export default Card;
