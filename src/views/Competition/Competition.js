import React from "react";
import Header from "../../components/Header/Header";
import Paragraph from "../../components/Paragraph/Paragraph";
import "./Competition.scss";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";

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

        <div className="competition-category-container-1">
          <Card
            title="App Innovation"
            subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry."
          />
          <Card
            variant="blue"
            title="Business IT Case"
            subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry."
          />
          <Card
            variant="blue-light"
            title="Programming"
            subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry."
          />
          <Card
            variant="purple-light"
            title="Smart Device"
            subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry."
          />
        </div>

        <div className="competition-category-container-2">
          <Card
            title="App Innovation"
            subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry."
          />
          <Card
            variant="blue"
            title="Capture the Flag"
            subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry."
          />
          <Card
            variant="blue-light"
            title="Game Development"
            subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry."
          />
          <Card
            variant="purple-light"
            title="App Innovation"
            subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry."
          />
        </div>
        <div className="square-box-1"></div>
        <div className="square-box-2"></div>
      </div>
    </>
  );
};

export default Competition;
