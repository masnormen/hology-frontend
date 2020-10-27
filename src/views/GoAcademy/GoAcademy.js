import React from "react";
import Header from "../../components/Header/Header";
import Paragraph from "../../components/Paragraph/Paragraph";
import "./GoAcademy.scss";
import Button from "../../components/Button/Button";
import Helmet from "react-helmet";
import GALogo from "../../assets/academy/goacademy.png";
import Academy1 from "../../assets/academy/1.jpg";
import Academy2 from "../../assets/academy/2.jpg";
import Academy3 from "../../assets/academy/3.jpg";
import Academy4 from "../../assets/academy/4.jpg";
import {Link} from "react-router-dom";

const data = {
  title: "App Innovation",
  tagline: "“Mobile and Web-Based App Development”",
  description:
    "App Innovation merupakan kompetisi skala nasional yang berfokus pada kemampuan peserta dalam pengembangan aplikasi yang berbasis mobile dan web. App Innovation pada tahun ini akan mengangkat tema “Sustainable Technology to Raise Post-Pandemic Economic Growth",
  event_1: "Registration Phase",
  date_1: "25 OCTOBER - 29 OCTOBER 2020",
  event_2: "Live Code",
  date_2: "30 OCTOBER 2020",
  event_3: "Announcement Interview",
  date_3: "31 OCTOBER 2020",
  event_4: "Interview",
  date_4: "1 NOVEMBER - 2 NOVEMBER 2020",
  event_5: "Final Announcement",
  date_5: "3 NOVEMBER 2020",
  event_6: "The Day Student Academy",
  date_6: "7 NOVEMBER - 8 NOVEMBER 2020 ",
};

const GoAcademy = () => {
  return (
    <>
      <Helmet>
        <title>Academy</title>
      </Helmet>
      <div className="section-go-academy-full-1">
        <div className="title">
          <Header size="xl" center>
            <img className="logo-style" src={GALogo} />
          </Header>
        </div>
        <div className="description">
          <Paragraph>
            Student Academy adalah rangkaian academy yang diselenggarakan oleh
            HOLOGY dan berkolaborasi bersama GO-JEK. Topik yang diangkat pada
            Student Academy kali ini adalah "Engineering Best Practice". Academy
            ini akan berlangsung selama 2 hari dan terbuka gratis untuk mahasiswa UB.
          </Paragraph>
        </div>
        <div className="buttons-container">
          <Link to="/dashboard/academy">
            <Button variant="secondary">Daftar Academy</Button>
          </Link>
          {/*<Paragraph header large>*/}
          {/*  Coming Soon*/}
          {/*</Paragraph>*/}
        </div>
        <div className="square-box-1"></div>
        <div className="square-box-2"></div>
        <div className="square-box-3"></div>
        <div className="square-box-4"></div>
      </div>
      
      <div className="section-go-academy-full-2">
        <div className="title">
          <Header size="r" center>
            GoAcademy Timeline
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
          </div>
        </div>
  
        <div className="academy-description">
          <div className="academy-description-card">
            <Paragraph header>REGISTRASI:</Paragraph><br/><br/>
            <Link to="/dashboard/academy">
              <Button>Daftar Academy</Button>
            </Link>
          </div>
        </div>
        
        <div className="title">
          <Header size="r" center>
            Keseruan Acara Tahun Lalu
          </Header>
        </div>
        
        <div className="academy-image-container">
          <img src={Academy1} alt="academy" className="academy-image"/>
          <img src={Academy2} alt="academy" className="academy-image"/>
          <img src={Academy3} alt="academy" className="academy-image"/>
          <img src={Academy4} alt="academy" className="academy-image"/>
        </div>
        <br/><br/>
        
        <div className="square-box-1"></div>
        <div className="square-box-2"></div>
        <div className="square-box-3"></div>
        <div className="square-box-4"></div>
      </div>
    </>
  );
};

export default GoAcademy;
