import React from "react";
import Header from "../../components/Header/Header";
import Paragraph from "../../components/Paragraph/Paragraph";
import "./GoAcademy.scss";
import Button from "../../components/Button/Button";
import Helmet from "react-helmet";

const GoAcademy = () => {
  return (
    <>
      <Helmet>
        <title>Go Academy</title>
      </Helmet>
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
        <div className="square-box-3"></div>
        <div className="square-box-4"></div>
      </div>

      <div className="section-go-academy-full-2">
        <div className="title">
          <Header size="r" center>
            Go Academy Timeline
          </Header>
        </div>

        <div className="timeline-container">
          <div className="container">
            <div className="timeline-block timeline-block-right">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3>Open Registration</h3>
                <span>24 Agustus 2020</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate.
                </p>
              </div>
            </div>

            <div className="timeline-block timeline-block-left">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3>Open Registration</h3>
                <span>24 Agustus 2020</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate.
                </p>
              </div>
            </div>

            <div className="timeline-block timeline-block-right">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3>Open Registration</h3>
                <span>24 Agustus 2020</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate.
                </p>
              </div>
            </div>

            <div className="timeline-block timeline-block-left">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3>Open Registration</h3>
                <span>24 Agustus 2020</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate.
                </p>
              </div>
            </div>

            <div className="timeline-block timeline-block-right">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3>Open Registration</h3>
                <span>24 Agustus 2020</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="square-box-1"></div>
        <div className="square-box-2"></div>
        <div className="square-box-3"></div>
        <div className="square-box-4"></div>
      </div>
    </>
  );
};

export default GoAcademy;
