import React from "react";
import Header from "../../components/Header/Header";
import Paragraph from "../../components/Paragraph/Paragraph";
import "./CategoryCompetition.scss";
import Button from "../../components/Button/Button";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";

const data = {
  title: "Business IT Case",
  tagline: "“Solving Business Problems”",
  routeName: "business-it-case",
  description:
    "Business IT Case adalah cabang lomba yang bertujuan untuk mengembangkan dan melatih pengetahuan dan kemampuan dalam memecahkan masalah bisnis yang ada di lingkungan kerja sebenarnya dengan pendekatan teknologi informasi.",
  event_1: "Registration Period Batch 1",
  date_1: "1 SEPTEMBER - 15 SEPTEMBER 2020",
  event_2: "Registration Period Batch 2",
  date_2: "16 SEPTEMBER - 10 OKTOBER 2020",
  event_3: "Elimination Round",
  date_3: "11  OKTOBER - 30 OKTOBER 2020",
  event_4: "Finalist Announcement",
  date_4: "7 NOVEMBER 2020",
  event_5: "Technical Meeting",
  date_5: "8 NOVEMBER 2020",
  event_6: "Final Round",
  date_6: "14 NOVEMBER 2020 ",
  event_7: "Winner Announcement",
  date_7: "15 NOVEMBER 2020 ",
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
          <Link to="/dashboard">
            <Button>Register Now</Button>
          </Link>
          <a
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1z6308OOdYPZ5J-mW-0-7rknPy47zW5Fa/view?usp=sharing"
            target="_blank"
          >
            <Button variant="secondary">Download Guidebook</Button>
          </a>
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
          </div>
        </div>
        <div className="square-box-1"></div>
        <div className="square-box-2"></div>
      </div>
    </>
  );
};

export default CategoryCompetition;
