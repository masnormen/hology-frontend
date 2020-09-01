import React from "react";
import "./Card.scss";
import Header from "../Header/Header";
import Paragraph from "../Paragraph/Paragraph";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const Card = ({ title, subtitle, variant = "purple", link }) => {
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
      <Link to={link}>
        <div className="button-container">
          <Button>Explore Now</Button>
        </div>
      </Link>
    </div>
  );
};

export default Card;
