import React from "react";
import Button from "../../components/Button/Button";
import Paragraph from "../../components/Paragraph/Paragraph";
import "./DashboardSection.scss";
import Header from "../../components/Header/Header";

const DashboardAcademy = () => {
  return (
    <div className="dashboard-section-academy">
      <div className="academy">
        <div className="header">
          <Header center size="r">
            GO Academy
          </Header>
        </div>
        <div className="description">
          <Paragraph header large>
            Join The Online Academy
          </Paragraph>
        </div>
        <Button>Register</Button>
      </div>
    </div>
  );
};

export default DashboardAcademy;
