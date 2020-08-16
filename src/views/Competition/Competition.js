import React from "react";
import Header from "../../components/Header/Header";
import Paragraph from "../../components/Paragraph/Paragraph";
import "./Competition.scss";

const Competition = () => {
  return (
    <>
      <div className="section-competition-full-1">
        <div className="title">
          <Header size="xl" center>
            COMPETITION
          </Header>
        </div>
        <div className="tagline">
          <Paragraph large>
            FINDING THE BEST IT TALENTS THROUGH ONLINE COMPETITIONS
          </Paragraph>
        </div>
        <div className="description">
          <Paragraph>
            "But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual”
          </Paragraph>
        </div>
        <div className="square-box-1"></div>
        <div className="square-box-2"></div>
      </div>

      <div className="section-competition-full-2">
        <div className="title">
          <Header size="r">Explore The Category</Header>
        </div>
        <div className="description">
          <Paragraph>
            "But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual”
          </Paragraph>
        </div>

        <div className="competition-category-container">
          <div className="competition-card"></div>
          <div className="competition-card"></div>
          <div className="competition-card"></div>
          <div className="competition-card"></div>
          <div className="competition-card"></div>
          <div className="competition-card"></div>
          <div className="competition-card"></div>
          <div className="competition-card"></div>
        </div>
      </div>

      <div className="square-box-1"></div>
      <div className="square-box-2"></div>
    </>
  );
};

export default Competition;
