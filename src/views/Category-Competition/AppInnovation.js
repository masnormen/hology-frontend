import React from "react";
import Header from "../../components/Header/Header";
import Paragraph from "../../components/Paragraph/Paragraph";
import "./CategoryCompetition.scss";
import Button from "../../components/Button/Button";
import Helmet from "react-helmet";
import {Link} from "react-router-dom";

const data = {
  title: "App Innovation",
  tagline: "“Mobile-Based App Development”",
  description:
    "App Innovation merupakan kompetisi skala nasional yang berfokus pada kemampuan peserta dalam pengembangan aplikasi yang berbasis mobile. App Innovation pada tahun ini akan mengangkat tema “Sustainable Technology to Raise Post-Pandemic Economic Growth",
  event_1: "Registration Period Batch 1",
  date_1: "1 SEPTEMBER - 15 SEPTEMBER 2020",
  event_2: "Registration Period Batch 2",
  date_2: "16 SEPTEMBER - 10 OKTOBER 2020",
  event_3: "Proposal Submission",
  date_3: "7 SEPTEMBER - 13 OKTOBER 2020",
  event_4: "Finalist Announcement",
  date_4: "15 OKTOBER 2020",
  event_5: "Finalist Registration and Final Presentation Video Submission",
  date_5: "16 OKTOBER - 10 NOVEMBER 2020",
  event_6: "Technical Meeting",
  date_6: "13 NOVEMBER 2020 ",
  event_7: " Final",
  date_7: "14 NOVEMBER 2020 ",
  event_8: " Closing",
  date_8: "15 NOVEMBER 2020 ",
};

const CategoryCompetition = () => {
  return (
    <>
      <Helmet>
        <title>{data.title}</title>
      </Helmet>
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
          <Link to="/dashboard"><Button >Register Now</Button></Link>
          <a rel="noopener noreferrer" href="https://drive.google.com/file/d/1ZaJLFvbQx_tVYieb2aEkWKWIf3AB1_V8/view?usp=sharing" target="_blank"><a rel="noopener noreferrer" href="https://drive.google.com/drive/folders/17uBh0tIwc4jUbQ0qDhjMrrtLillnlPvD?usp=sharing" target="_blank"><Button variant="secondary">Download Guidebook</Button></a></a>
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
                <span dir="ltr">{data.date_1}</span>
              </div>
            </div>

            <div className="timeline-block timeline-block-left">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3>{data.event_2}</h3>
                <span dir="ltr">{data.date_2}</span>
              </div>
            </div>

            <div className="timeline-block timeline-block-right">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3>{data.event_3}</h3>
                <span dir="ltr">{data.date_3}</span>
              </div>
            </div>

            <div className="timeline-block timeline-block-left">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3>{data.event_4}</h3>
                <span dir="ltr">{data.date_4}</span>
              </div>
            </div>

            <div className="timeline-block timeline-block-right">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3>{data.event_5}</h3>
                <span dir="ltr">{data.date_5}</span>
              </div>
            </div>

            <div className="timeline-block timeline-block-left">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3>{data.event_6}</h3>
                <span dir="ltr">{data.date_6}</span>
              </div>
            </div>

            <div className="timeline-block timeline-block-right">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3>{data.event_7}</h3>
                <span dir="ltr">{data.date_7}</span>
              </div>
            </div>

            <div className="timeline-block timeline-block-left">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3>{data.event_8}</h3>
                <span dir="ltr">{data.date_8}</span>
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
