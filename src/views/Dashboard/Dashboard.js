import React from "react";
import "./Dashboard.scss";
import Header from "../../components/Header/Header";
import Paragraph from "../../components/Paragraph/Paragraph";

const Dashboard = () => {
  const username = "Participant Hology";
  return (
    <>
      <div className="dashboard-container-full">
        <Header>Hi, {username}</Header>
        <div className="dashboard">
          <div className="sidebar">
            <a className="sidebar_link">Competition</a>
            <a className="sidebar_link">Academy</a>
            <a className="sidebar_link">Webinar</a>
          </div>
          <div className="content">
            <Paragraph>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.{" "}
            </Paragraph>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
