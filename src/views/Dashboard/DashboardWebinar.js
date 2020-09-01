import React from "react";
import Button from "../../components/Button/Button";
import Paragraph from "../../components/Paragraph/Paragraph";
import "./DashboardSection.scss";
import Header from "../../components/Header/Header";

const DashboardWebinar = () => {
  return (
    <div>
      <div className="dashboard-section-webinar">
        <div className="academy">
          <div className="header">
            <Header center size="r">
              Webinar
            </Header>
          </div>
          <div className="description">
            <Paragraph header large>
              COMING SOON
            </Paragraph>
          </div>
          {/*<Button>Register</Button>*/}
        </div>
      </div>
    </div>
  );
};

export default DashboardWebinar;
