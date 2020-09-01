import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import Paragraph from "../../components/Paragraph/Paragraph";
import "./CategoryCompetition.scss";
import Button from "../../components/Button/Button";
import CATEGORY_COMPETITION from "./CategoryData";

const data = {
  title: "APP INNOVATION",
  tagline: "“Mobile-Based App Development”",
  description:
    "App Innovation merupakan kompetisi skala nasional yang berfokus pada kemampuan peserta dalam pengembangan aplikasi yang berbasis mobile. App Innovation pada tahun ini akan mengangkat tema “Sustainable Technology to Raise Post-Pandemic Economic Growth",
  event_1: "Registration Period Batch 1",
  date_1: "1 SEP - 15 SEP 2020",
  event_2: "Registration Period Batch 2",
  date_2: "16 SEP - 10 OKT 2020",
  event_3: "Proposal Submission",
  date_3: "7 SEP - 13 OKT 2020",
  event_4: "Finalist Announcement",
  date_4: "15 OKT 2020",
  event_5: "Finalist Registration and Final Presentation Video Submission",
  date_5: "16 OKT - 10 NOV 2020",
  event_6: "Technical Meeting",
  date_6: "13 NOV 2020 ",
  event_7: " Final",
  date_7: "14 NOV 2020 ",
  event_8: " Closing",
  date_8: "15 NOV 2020 ",
};

const CategoryCompetition = () => {
  return (
    <>
      <div className="section-competition-category-full-1">
        <div className="title">
          <Header size="l">{data.title}</Header>
        </div>
        <div className="tagline">
          <Paragraph header large>
            {data.tagline}
          </Paragraph>
        </div>
        <div className="description">
          <Paragraph>{data.description}</Paragraph>
        </div>

        <div className="buttons-container">
          <Button>Register Now</Button>
          <Button variant="secondary">Download Guidebook</Button>
        </div>
        <div className="square-box-1"></div>
        <div className="square-box-2"></div>
      </div>

      <div className="section-competition-category-full-2">
        <div className="title">
          <Header size="r" center>
            Competition Timeline
          </Header>
        </div>

        <div className="timeline-container">
          <div className="container">
            <div className="timeline-block timeline-block-right">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3>{data.event_1}</h3>
                <span>{data.date_1}</span>
              </div>
            </div>

            <div className="timeline-block timeline-block-left">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3>{data.event_2}</h3>
                <span>{data.date_2}</span>
              </div>
            </div>

            <div className="timeline-block timeline-block-right">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3>{data.event_3}</h3>
                <span>{data.date_3}</span>
              </div>
            </div>

            <div className="timeline-block timeline-block-left">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3>{data.event_4}</h3>
                <span>{data.date_4}</span>
              </div>
            </div>

            <div className="timeline-block timeline-block-right">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3>{data.event_5}</h3>
                <span>{data.date_5}</span>
              </div>
            </div>

            <div className="timeline-block timeline-block-left">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3>{data.event_6}</h3>
                <span>{data.date_6}</span>
              </div>
            </div>

            <div className="timeline-block timeline-block-right">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3>{data.event_7}</h3>
                <span>{data.date_7}</span>
              </div>
            </div>

            <div className="timeline-block timeline-block-left">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3>{data.event_8}</h3>
                <span>{data.date_8}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="square-box-1"></div>
        <div className="square-box-2"></div>
      </div>
    </>
  );
};

export default CategoryCompetition;
