import React from "react";
import Header from "../../components/Header/Header";
import Paragraph from "../../components/Paragraph/Paragraph";
import "./GoAcademy.scss";
import Button from "../../components/Button/Button";

const GoAcademy = () => {
  return (
    <>
      <div className="section-go-academy-full-1">
        <div className="title">
          <Header size="xl" center>
            GO ACADEMY
          </Header>
        </div>
        <div className="tagline">
          <Paragraph large header>
            EMPOWERING IT ENTHUSIASTS THROUGH ONLINE COURSES
          </Paragraph>
        </div>
        <div className="description">
          <Paragraph>
            "But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual”
          </Paragraph>
        </div>
        <div className="buttons-container">
          <Button>Download Guidebook</Button>
          <Button variant="secondary">Register Now</Button>
        </div>
        <div className="square-box-1"></div>
        <div className="square-box-2"></div>
      </div>
    </>
  );
};

export default GoAcademy;
