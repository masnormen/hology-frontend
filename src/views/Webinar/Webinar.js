import React from "react";
import "./Webinar.scss";
import Header from "../../components/Header/Header";
import Paragraph from "../../components/Paragraph/Paragraph";
import Helmet from "react-helmet";
//Speaker Photo
import Speaker from "../../assets/speaker/speaker.jpg";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
//Webinar Photo
import PhotoWebinar1 from "../../assets/Webinar/1.JPG";
import PhotoWebinar2 from "../../assets/Webinar/2.JPG";
import PhotoWebinar3 from "../../assets/Webinar/3.JPG";

const Webinar = () => {
  return (
    <>
      <Helmet>
        <title>Webinar</title>
      </Helmet>
      <div className="section-webinar-full-1">
        <div className="title">
          <Header size="r">Webinar National IT Hology 3.0</Header>
        </div>
        <div className="tagline">
          <Paragraph header>
            Technology Effectiveness and Human Performance
          </Paragraph>
        </div>

        <div className="signup-button">
          <Link to="/dashboard/webinar">
            <Button>Daftar</Button>
          </Link>
        </div>

        <div className="photo-webinar-container">
          <img src={PhotoWebinar1} alt="Webinar" className="photo-webinar-1" />
          <div className="column-webinar-container">
            <img
              src={PhotoWebinar2}
              alt="Webinar"
              className="photo-webinar-2"
            />
            <img
              src={PhotoWebinar3}
              alt="Webinar"
              className="photo-webinar-2"
            />
          </div>
        </div>

        <div className="webinar-description">
          <div className="webinar-description-card">
            <Paragraph header>
              VIA: ZOOM/GMEET
              <br />
              STREAM ON: YOUTUBE
            </Paragraph>
          </div>
          <div className="webinar-description-card">
            <Paragraph header>LINK REGISTRATION:</Paragraph>
            <a href="https://bit.ly/WebinarHology" target="blank">
              <Paragraph>bit.ly/WebinarHology</Paragraph>
            </a>
          </div>
        </div>

        {/* <div className="square-box-1"></div>
        <div className="square-box-2"></div> */}
        {/* <div className="speaker-container">
          <div className="description-speaker">
            <Header>SPEAKER DAY 1 (17 October 2020)</Header>
            <Paragraph header>
              Theme : Technology Effectiveness and Human
            </Paragraph>
            <Paragraph>Waktu : 19.00 – 21.00 WIB</Paragraph>
          </div>
          <div className="image-speaker-container">
            <img src={Speaker} alt="speake" className="speaker-image" />
            <img src={Speaker} alt="speake" className="speaker-image" />
            <img src={Speaker} alt="speake" className="speaker-image" />
          </div>
        </div>

        <div className="speaker-container">
          <div className="description-speaker">
            <Header>SPEAKER DAY 2 (24 October 2020)</Header>
            <Paragraph header>
              Theme 1 : Into The Indie Verse <br />
              Theme 2 : Developing Sustainable Mobile Apps For Long Term Success
            </Paragraph>
            <Paragraph>Waktu : 19.00 – 21.00 WIB</Paragraph>
          </div>
          <div className="image-speaker-container">
            <img src={Speaker} alt="speake" className="speaker-image" />
            <img src={Speaker} alt="speake" className="speaker-image" />
            <img src={Speaker} alt="speake" className="speaker-image" />
          </div>
        </div>

        <div className="speaker-container">
          <div className="description-speaker">
            <Header>SPEAKER DAY 3 (31 October 2020)</Header>
            <Paragraph header>
              Theme : Mempersiapkan Milenial agar Berperan dalam Pandemi ini
              dengan Teknologi Informasi
            </Paragraph>
            <Paragraph>Waktu : 19.00 – 21.00 WIB</Paragraph>
          </div>
          <div className="image-speaker-container">
            <img src={Speaker} alt="speake" className="speaker-image" />
            <img src={Speaker} alt="speake" className="speaker-image" />
            <img src={Speaker} alt="speake" className="speaker-image" />
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Webinar;
