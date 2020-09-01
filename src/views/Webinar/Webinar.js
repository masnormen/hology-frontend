import React from "react";
import "./Webinar.scss";
import Header from "../../components/Header/Header";
import Paragraph from "../../components/Paragraph/Paragraph";
import Helmet from "react-helmet";

const Webinar = () => {
  return (
    <>
      <Helmet>
        <title>Webinar</title>
      </Helmet>
      <div className="section-webinar-full-1">
        <div className="title">
          <Header size="xl" center>
            Webinar
          </Header>
        </div>
        <div className="tagline">
          <Paragraph large header>
            Coming Really Soon For You
          </Paragraph>
        </div>
        <div className="square-box-1"></div>
        <div className="square-box-2"></div>
      </div>
    </>
  );
};

export default Webinar;
