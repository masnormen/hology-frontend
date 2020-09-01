import React from "react";
import Header from "../../components/Header/Header";
import Paragraph from "../../components/Paragraph/Paragraph";
import "./Competition.scss";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";

const Competition = () => {
  return (
    <>
      <div className="section-competition-full-1">
        <div className="title">
          <Header size="xl" center>
            COMPETITION
          </Header>
        </div>
        <div className="tagline">
          <Paragraph large header>
            FINDING THE BEST IT TALENTS THROUGH ONLINE COMPETITIONS
          </Paragraph>
        </div>
        <div className="description">
          <Paragraph>
            "But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual”
          </Paragraph>
        </div>
        <div className="square-box-1"></div>
        <div className="square-box-2"></div>
      </div>

      <div className="section-competition-full-2">
        <div className="title">
          <Header size="r">Explore The Category</Header>
        </div>
        <div className="description">
          <Paragraph>
            "But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual”
          </Paragraph>
        </div>

        <div className="competition-category-container-1">
          <Card
            variant="blue-light"
            title="App Innovation"
            link="/appinnovation"
            subtitle="App Innovation merupakan kompetisi skala nasional yang berfokus pada kemampuan peserta dalam pengembangan aplikasi yang berbasis mobile. App Innovation pada tahun ini akan mengangkat tema “Sustainable Technology to Raise Post-Pandemic Economic Growth"
          />
          <Card
            variant="blue-light"
            title="Business IT Case"
            link="/businessitcase"
            subtitle="Business IT Case adalah cabang lomba yang bertujuan
            untuk mengembangkan dan melatih pengetahuan dan kemampuan
            dalam memecahkan masalah bisnis yang ada di lingkungan kerja
            sebenarnya dengan pendekatan teknologi informasi.
            "
          />
          <Card
            variant="blue-light"
            title="Programming"
            link="/programming"
            subtitle="Programming adalah sebuah kontes pemrograman tingkat nasional. Kompetisi ini merupakan ajang untuk menguji kemampuan dan nalar peserta dalam menyelesaikan berbagai permasalahan komputasional yang diberikan."
          />
        </div>

        <div className="competition-category-container-2">
          <Card
            variant="blue-light"
            link="/smartdevice"
            title="Smart Device"
            subtitle="Smart Device adalah sebuah karya cipta piranti teknologi tepat guna yang bekerja secara interaktif dan otomatis serta mampu memberikan solusi untuk permasalahan yang ada di dalam masyarakat."
          />
          <Card
            variant="blue-light"
            title="Capture the Flag"
            link="/capturetheflag"
            subtitle="Capture the Flag adalah sebuah kompetisi di bidang jaringan dan keamanan informasi yang mengangkat isu berkaitan dengan implementasi pemecahan masalah yang dikaji sistem keamanan jaringan dan komputer serta keamanan informasi."
          />
          <Card
            variant="blue-light"
            title="Game Development"
            link="/gamedevelopment"
            subtitle="Game Development Competition adalah lomba yang ditujukan untuk mengasah kemampuan dalam bidang game developing dan juga sebagai ajang berkompetisi dalam bidang game developing."
          />
        </div>
        <div className="square-box-1"></div>
        <div className="square-box-2"></div>
      </div>
    </>
  );
};

export default Competition;
