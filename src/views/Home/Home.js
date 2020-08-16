import React from "react";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import Paragraph from "../../components/Paragraph/Paragraph";
import "./Home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="section-home-full-1">
        <div className="title">
          <Header size="xl">HOLOGY 3.0</Header>
        </div>
        <div className="description">
          <Paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </Paragraph>
        </div>
        <div className="square-box-1"></div>
        <div className="square-box-2"></div>
      </div>

      <div className="section-home-full-2">
        <div className="title">
          <Header size="r">What Is The Theme This Year ?</Header>
        </div>
        <div className="description">
          <Paragraph>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </Paragraph>
        </div>
        <div className="square-box-1"></div>
        <div className="square-box-2"></div>
      </div>

      <div className="section-home-full-3">
        <div className="mascot-container"></div>
        <div className="text">
          <div className="title">
            <Header size="r">Meet Hology! This Year Mascot</Header>
          </div>
          <div className="description">
            <Paragraph>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </Paragraph>
          </div>
        </div>
      </div>

      <div className="section-home-full-4">
        <div className="title">
          <Header size="r" center>
            COMPETITION
          </Header>
        </div>
        <div className="description">
          <div className="text">
            <div className="header">
              <Paragraph header>Join The Online Competiton</Paragraph>
            </div>
            <div className="sub-header">
              <Paragraph>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </Paragraph>
            </div>
          </div>
          <div className="image-container"></div>
        </div>
        <div className="button-container">
          <Link to="/competition">
            <Button>Explore Now</Button>
          </Link>
        </div>
        <div className="square-box-1"></div>
        <div className="square-box-2"></div>
      </div>

      <div className="section-home-full-5">
        <div className="title">
          <Header size="r" center>
            Webinar
          </Header>
        </div>
        <div className="description">
          <Paragraph>
            “Evolve Innovative Thinking for Millennials to Face Technology
            Growth in 4.0 Industrial Era”
          </Paragraph>
          <div className="header">
            <Paragraph header>MEET OUR SPEAKER</Paragraph>
          </div>
          <div className="speaker-container">
            <div className="image-container"></div>
            <div className="image-container"></div>
            <div className="image-container"></div>
          </div>
        </div>
        <div className="square-box"></div>
      </div>

      <div className="section-home-full-6">
        <div className="title">
          <Header size="r" center>
            GO ACADEMY
          </Header>
        </div>
        <div className="description">
          <div className="image-container"></div>
          <div className="text">
            <div className="header">
              <Paragraph header>Join The Online Competiton</Paragraph>
            </div>
            <div className="sub-header">
              <Paragraph>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </Paragraph>
            </div>
          </div>
        </div>
        <div className="button-container">
          <Button variant="primary">Explore Now</Button>
        </div>
        <div className="square-box-1"></div>
        <div className="square-box-2"></div>
      </div>

      <div className="section-home-full-7">
        <div className="title">
          <Header size="r">Core Value HOLOGY 3.0</Header>
        </div>
        <div className="description">
          <Paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </Paragraph>
        </div>
        <div className="square-box-1"></div>
        <div className="square-box-2"></div>
      </div>

      <div className="section-home-full-8">
        <div className="text">
          <div className="title">
            <Header size="r">Gallery Hology 2.0</Header>
          </div>
          <div className="description">
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
          <div className="gallery-image-1"></div>
          <div className="gallery-image-2"></div>
          <div className="gallery-image-2"></div>
        </div>
      </div>
    </>
  );
};
export default Home;
