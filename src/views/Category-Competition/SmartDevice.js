import React from "react";
import Header from "../../components/Header/Header";
import Paragraph from "../../components/Paragraph/Paragraph";
import "./CategoryCompetition.scss";
import Button from "../../components/Button/Button";
import Helmet from "react-helmet";
import {Link} from "react-router-dom";

const data = {
  title: "Smart Device",
  tagline:
    "“Technology Tool Competition That Works Interactively and Automatically”",
  description:
    "Smart Device adalah sebuah karya cipta piranti teknologi tepat guna yang bekerja secara interaktif dan otomatis serta mampu memberikan solusi untuk permasalahan yang ada di dalam masyarakat.",
  event_1: "Registration Period Batch 1",
  date_1: "1 SEP - 15 SEP 2020",
  event_2: "Registration Period Batch 2",
  date_2: "16 SEP - 10 OKT 2020",
  event_3: "Proposal Submission",
  date_3: "1 SEP - 13 OKT 2020",
  event_4: "Finalist Announcement",
  date_4: "15 OKT 2020",
  event_5: "Technical Meeting",
  date_5: "16 OKT 2020",
  event_6: "Video Submission and Progress",
  date_6: "17 OKT - 13 NOV 2020 ",
  event_7: "Winner Announcement",
  date_7: "15 NOV 2020 ",
};

const CategoryCompetition = ({ category }) => {
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
          <Link to="/register"><Button >Register Now</Button></Link>
          <a rel="noopener noreferrer" href="https://drive.google.com/drive/folders/17uBh0tIwc4jUbQ0qDhjMrrtLillnlPvD?usp=sharing" target="_blank"><Button variant="secondary">Download Guidebook</Button></a>
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
          </div>
        </div>
        <div className="square-box-1"></div>
        <div className="square-box-2"></div>
      </div>
    </>
  );
};

export default CategoryCompetition;
