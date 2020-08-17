import React from "react";
import "./Card.scss";
import Header from "../Header/Header";
import Paragraph from "../Paragraph/Paragraph";
import { Link } from "react-router-dom";

const Card = ({ title, subtitle, variant = "purple" }) => {
  return (
    <div className={`card-category-container ${variant}`}>
      <Link to="/category">
        <div className="icon"></div>
        <div className="title">
          <Header size="s" center lineWhite>
            {title}
          </Header>
        </div>
        <div className="subtitle">
          <Paragraph>{subtitle}</Paragraph>
        </div>
        \
      </Link>
    </div>
  );
};

export default Card;
