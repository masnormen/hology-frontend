import React from "react";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import Paragraph from "../../components/Paragraph/Paragraph";
import Logo from "../../assets/logo.png";

import "./Home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="section-home-full-1">
        <div className="text">
          <div className="title">
            <Header size="xl">HOLOGY 3.0</Header>
          </div>
          <div className="description">
            <Paragraph justify>
              House of Technology (HOLOGY) 3.0 merupakan acara dalam bidang IT
              yang diselenggarakan oleh Fakultas Ilmu Komputer Universitas
              Brawijaya dengan berkolaborasi bersama 9 organisasi dan komunitas
              di FILKOM. Tujuan HOLOGY hadir yaitu untuk mendorong inovasi,
              kreatifitas, dan juga meningkatkan jiwa kompetisi di antara
              mahasiswa, terutama dalam bidang teknologi informasi dan
              komunikasi. HOLOGY sendiri terdiri dari beberapa rangkaian,
              meliputi webinar, 6 cabang lomba, serta academy.
            </Paragraph>
          </div>
        </div>
        <div className="logo-container">
          <img src={Logo} alt="logo hology" className="logo" />
        </div>
      </div>

      <div className="section-home-full-2">
        <div className="title fadeIn1">
          <Header size="r">Tema Tahun 2020</Header>
        </div>
        <div className="description fadeIn1">
          <Paragraph>
            HOLOGY 3.0 mengangkat tema "Accelerating Technological Revolution
            and Adaptability to Cultivate Better Digital Lifestyle", dengan
            tujuan agar mahasiswa Indonesia mampu membuat revolusi industri
            dengan menumbuhkan gaya hidup digital yang lebih baik serta
            beradaptasi dengan perkembangan zaman.
          </Paragraph>
        </div>
        <div className="square-box-1"></div>
        <div className="square-box-2"></div>
      </div>

      {/*<div className="section-home-full-3">*/}
      {/*	<div className="mascot-container fadeIn2"></div>*/}
      {/*	<div className="text">*/}
      {/*		<div className="title fadeIn2">*/}
      {/*			<Header size="r">Meet Hology! This Year Mascot</Header>*/}
      {/*		</div>*/}
      {/*		<div className="description fadeIn2">*/}
      {/*			<Paragraph>*/}
      {/*				It is a long established fact that a reader will be distracted by*/}
      {/*				the readable content of a page when looking at its layout. The*/}
      {/*				point of using Lorem Ipsum is that it has a more-or-less normal*/}
      {/*				distribution of letters, as opposed to using 'Content here,*/}
      {/*				content here', making it look like readable English. Many desktop*/}
      {/*				publishing packages and web page editors now use Lorem Ipsum as*/}
      {/*				their default model text, and a search for 'lorem ipsum' will*/}
      {/*				uncover many web sites still in their infancy. Various versions*/}
      {/*				have evolved over the years, sometimes by accident, sometimes on*/}
      {/*				purpose (injected humour and the like).*/}
      {/*			</Paragraph>*/}
      {/*		</div>*/}
      {/*	</div>*/}
      {/*</div>*/}

      <div className="section-home-full-4">
        <div className="title fadeIn3">
          <Header size="r" center>
            Competition
          </Header>
        </div>
        <div className="description">
          <div className="text">
            <div className="header">
              <Paragraph header>
                Finding the best talents through competitions.
              </Paragraph>
            </div>
            <div className="sub-header">
              <Paragraph>
                Bergabung dan memecahkan tantangan di dalam kompetisi skala
                nasional bersama talenta IT dari seluruh penjuru Indonesia.
              </Paragraph>
            </div>
          </div>
          <div className="image-container">
            <Link to="/competition">
              <Button>Jelajahi Kompetisi</Button>
            </Link>
          </div>
        </div>
        {/*<div className="button-container fadeIn3">*/}
        {/*	<Link to="/competition">*/}
        {/*		<Button>Explore Now</Button>*/}
        {/*	</Link>*/}
        {/*</div>*/}
        <div className="square-box-1"></div>
        <div className="square-box-2"></div>
      </div>

      <div className="section-home-full-5">
        <div className="title fadeIn4">
          <Header size="r" center>
            Webinar
          </Header>
        </div>
        <div className="description">
          <div className="tagline fadeIn4">
            <Paragraph>
              HOLOGY menyelenggarakan webinar seputar perkembangan dunia IT
              terkini. Stay tuned!
            </Paragraph>
          </div>
          <div className="header fadeIn4">
            <Paragraph header>COMING SOON.</Paragraph>
          </div>
          {/*<div className="speaker-container">*/}
          {/*	<div className="image-container fadeIn4"></div>*/}
          {/*	<div className="image-container fadeIn4"></div>*/}
          {/*	<div className="image-container fadeIn4"></div>*/}
          {/*</div>*/}
        </div>
        <div className="square-box-1"></div>
        <div className="square-box-2"></div>
      </div>

      {/*<div className="section-home-full-6">*/}
      <div className="section-home-full-5">
        <div className="title fadeIn5">
          <Header size="r" center>
            Academy
          </Header>
        </div>
        <div className="description">
          <div className="image-container fadeIn5"></div>
          <div className="text">
            <div className="header fadeIn5">
              <Paragraph header>
                Empowering IT enthusiasts through online courses.
              </Paragraph>
            </div>
            <div className="sub-header fadeIn5">
              <Paragraph>COMING SOON.</Paragraph>
            </div>
          </div>
        </div>
        <div className="square-box-1"></div>
        <div className="square-box-2"></div>
      </div>

      <div className="section-home-full-7">
        <div className="title fadeIn6">
          <Header size="r">Our Values</Header>
        </div>
        <div className="content">
          <div className="container  margin-bottom">
            <div className="value-container">
              <Header size="s">Progressive</Header>
              <div className="description">
                <Paragraph>
                  Melalui Hology, kami menciptakan ide-ide baru secara progresif
                  dan hadir dengan solusi baru
                </Paragraph>
              </div>
            </div>
            <div className="value-container">
              <Header size="s">Responsive</Header>
              <div className="description">
                <Paragraph>
                  Hology selalu responsif dalam situasi terbaru mengenai
                  perkembangan teknologi
                </Paragraph>
              </div>
            </div>
          </div>

          <div className="container  margin-bottom">
            <div className="value-container">
              <Header size="s">Sophisticated</Header>
              <div className="description">
                <Paragraph>
                  Dari acara Hology, kami akan menemukan teknologi canggih di
                  era industri digital
                </Paragraph>
              </div>
            </div>
            <div className="value-container">
              <Header size="s">Impactful</Header>
              <div className="description">
                <Paragraph>
                  Dari Hology, kami percaya hal tersebut akan menghasilkan
                  dampak yang besar bagi sebuah negara yang lebih majuu
                </Paragraph>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="value-container">
              <Header size="s">Adaptive</Header>
              <div className="description">
                <Paragraph>
                  Sebagai generasi muda, kita harus selalu adaptif terhadap
                  perubahan yang terjadi di dalam lingkungan kita. Khususnya
                  teknologi
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
        <div className="square-box-1"></div>
        <div className="square-box-2"></div>
      </div>

      <div className="section-home-full-8">
        <div className="text">
          <div className="title fadeIn7">
            <Header size="r">Gallery Hology 2.0</Header>
          </div>
          <div className="description fadeIn7">
            <Paragraph>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </Paragraph>
          </div>
        </div>
        <div className="gallery-container">
          <div className="gallery-image-1 fadeIn7"></div>
          <div className="gallery-image-2 fadeIn7"></div>
          <div className="gallery-image-2 fadeIn7"></div>
        </div>
      </div>
    </>
  );
};
export default Home;
