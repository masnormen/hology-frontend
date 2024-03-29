import React from "react";
import "./Webinar.scss";
import Header from "../../components/Header/Header";
import Paragraph from "../../components/Paragraph/Paragraph";
import Helmet from "react-helmet";
//Speaker Photo
import Speaker1 from "../../assets/speaker/1.png";
import Speaker2 from "../../assets/speaker/2.png";
import Speaker3 from "../../assets/speaker/3.png";
import Speaker4 from "../../assets/speaker/4.png";
import Speaker5 from "../../assets/speaker/5.png";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
//Webinar Photo
import PhotoWebinar1 from "../../assets/Webinar/1.png";
import PhotoWebinar2 from "../../assets/Webinar/2.png";
import PhotoWebinar3 from "../../assets/Webinar/3.png";
//icon
import { GoCalendar } from "react-icons/go";
import { MdAccessTime, MdPlace } from "react-icons/md";

const Webinar = () => {
  return (
    <>
      <Helmet>
        <title>Webinar</title>
      </Helmet>
      <div className="section-webinar-full-1">
        <div className="title">
          <Header size="l">Webinar National IT</Header>
          <br/>
          <Header size="l">HOLOGY 3.0</Header>
        </div>
        {/* <div className="tagline">
          <Paragraph header>Daftarkan Diri Anda</Paragraph>
        </div> */}
  
        <br/>
        <div className="webinar-description">
          <div className="webinar-description-card">
            <Paragraph header>REGISTRASI:</Paragraph><br/><br/>
            <Link to="/dashboard/webinar">
              <Button>Daftar Webinar</Button>
            </Link>
          </div>
        </div>
        
        
        <br/><br/>
        <div className="card-webinar-container">
          <div className="card-webinar-speaker">
            <div className="theme">
              <Header size="s" lineWhite wrap noLine>
                WEBINAR 1:<br/>How Technology Can Improve The Economic Side Without Neglecting
                Social Values
              </Header>
            </div>
            <div className="photo-detail-speaker">
              <div className="photo-container">
                <img src={Speaker1} alt="Speaker" className="speaker-photo" />
                <div className="name-speaker">
                  <Paragraph header>
                    ROBIHAMANTO
                  </Paragraph>
                  <Paragraph>CEO & Founder Come Indonesia</Paragraph>
                </div>
              </div>
              <div className="details">
                <div className="detail-webinar">
                  <GoCalendar className="icon-style" />
                  <p>23 OCTOBER 2020</p>
                </div>
                <div className="detail-webinar">
                  <MdAccessTime className="icon-style" />
                  <p>19.00 - 21.25 WIB</p>
                </div>
                <div className="detail-webinar">
                  <MdPlace className="icon-style" />
                  <p>ONLINE</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card-webinar-speaker-2">
            <div className="theme">
              <Header size="s" lineWhite wrap noLine>
                WEBINAR 2:<br/>Software Engineering: How to Develop Sustainable Mobile Apps for
                Long Term Success
                <br />
                &
                <br />
                The Art of Game Making : Essential Skills to Boost Your Career
                for The International Rivalry
              </Header>
            </div>
            <div className="photo-detail-speaker">
              <div className="photo-container">
                <img src={Speaker2} alt="Speaker" className="speaker-photo" />
                <div className="name-speaker">
                  <Paragraph header>ANDRIANSYAH YUSUF</Paragraph>
                  <Paragraph>Software Engineering @ Traveloka</Paragraph>
                </div>
              </div>
              <div className="photo-container">
                <img src={Speaker3} alt="Speaker" className="speaker-photo" />
                <div className="name-speaker">
                  <Paragraph header>SARAH JOHANA</Paragraph>
                  <Paragraph>Community Manager @ Toge Productions</Paragraph>
                </div>
              </div>
              <div className="details">
                <div className="detail-webinar">
                  <GoCalendar className="icon-style" />
                  <p>24 OCTOBER 2020</p>
                </div>
                <div className="detail-webinar">
                  <MdAccessTime className="icon-style" />
                  <p>13.00 & 19.00 WIB</p>
                </div>
                <div className="detail-webinar">
                  <MdPlace className="icon-style" />
                  <p>ONLINE</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card-webinar-container">
          <div className="card-webinar-speaker">
            <div className="theme">
              <Header size="s" lineWhite wrap noLine>
                WEBINAR 3:<br/>How Data Can Affect Sustainability Of Business
              </Header>
            </div>
            <div className="photo-detail-speaker">
              <div className="photo-container">
                <img src={Speaker4} alt="Speaker" className="speaker-photo" />
                <div className="name-speaker">
                  <Paragraph header>ANDI NUGROHO DIRGANTARA</Paragraph>
                  <Paragraph>Lead Data Engineer @ Traveloka</Paragraph>
                </div>
              </div>
              <div className="details">
                <div className="detail-webinar">
                  <GoCalendar className="icon-style" />
                  <p>30 OCTOBER 2020</p>
                </div>
                <div className="detail-webinar">
                  <MdAccessTime className="icon-style" />
                  <p>19.00 - 20.30 WIB</p>
                </div>
                <div className="detail-webinar">
                  <MdPlace className="icon-style" />
                  <p>ONLINE</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card-webinar-speaker">
            <div className="theme">
              <Header size="s" lineWhite wrap noLine>
                WEBINAR 4:<br/>The fine Art of Product Design: Involving Users Into Your
                Process
              </Header>
            </div>
            <div className="photo-detail-speaker">
              <div className="photo-container">
                <img src={Speaker5} alt="Speaker" className="speaker-photo" />
                <div className="name-speaker">
                  <Paragraph header>TRI NUGRAHA</Paragraph>
                  <Paragraph>Product Design Lead @ Gojek</Paragraph>
                </div>
              </div>
              <div className="details">
                <div className="detail-webinar">
                  <GoCalendar className="icon-style" />
                  <p>31 OCTOBER 2020</p>
                </div>
                <div className="detail-webinar">
                  <MdAccessTime className="icon-style" />
                  <p>19.00 - 20.30 WIB</p>
                </div>
                <div className="detail-webinar">
                  <MdPlace className="icon-style" />
                  <p>ONLINE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div className="webinar-description">
          <div className="webinar-description-card">
            <Paragraph header>
              🔴 LIVESTREAMING: <br/><br/>
              Login&rarr;Dashboard&rarr;Webinar
              <br/> & YT: HOLOGY UB
            </Paragraph>
          </div>
        </div>
        
        <br/><br/>
        <Header size="r">Keseruan Acara Tahun Lalu</Header>
        <br/><br/><br/><br/>
        <div className="photo-webinar-container">
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
          <br/><br/>
          <img src={PhotoWebinar1} alt="Webinar" className="photo-webinar-1" />
        </div>
        <div className="webinar-description">
          <div className="webinar-description-card">
            <Paragraph header>REGISTRATION:</Paragraph><br/><br/>
            <Link to="/dashboard/webinar">
              <Button>Daftar Webinar</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Webinar;
