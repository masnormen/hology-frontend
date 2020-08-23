import React, { useRef, useEffect } from "react";
import { useIntersection } from "react-use";
import gsap, { TimelineLite, TweenMax } from "gsap";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import Paragraph from "../../components/Paragraph/Paragraph";
import "./Home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  let title = useRef(null);
  const description = useRef(null);
  let tl = new TimelineLite({ delay: 0.1 });
  const sectionRef1 = useRef(null);
  const sectionRef2 = useRef(null);
  const sectionRef3 = useRef(null);
  const sectionRef4 = useRef(null);
  const sectionRef5 = useRef(null);
  const sectionRef6 = useRef(null);
  const sectionRef7 = useRef(null);

  useEffect(() => {}, [tl]);

  const intersection1 = useIntersection(sectionRef1, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });
  const intersection2 = useIntersection(sectionRef2, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });
  const intersection3 = useIntersection(sectionRef3, {
    root: null,
    rootMargin: "0px",
    threshold: 0.6,
  });
  const intersection4 = useIntersection(sectionRef4, {
    root: null,
    rootMargin: "0px",
    threshold: 0.4,
  });
  const intersection5 = useIntersection(sectionRef5, {
    root: null,
    rootMargin: "0px",
    threshold: 0.6,
  });
  const intersection6 = useIntersection(sectionRef6, {
    root: null,
    rootMargin: "0px",
    threshold: 0.7,
  });
  const intersection7 = useIntersection(sectionRef7, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });
  // Animation for fading in
  const fadeIn = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
      y: -100,
      ease: "power4.out",
      stagger: {
        amount: 0.3,
      },
    });
  };
  // Animation for fading out
  const fadeOut = (element) => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -20,
      ease: "power3.out",
    });
  };

  const imageIn = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
      y: -30,
      ease: "power4.out",
      stagger: {
        amount: 0.75,
      },
    });
  };

  const imageOut = (element) => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -20,
      ease: "power3.out",
    });
  };
  intersection1 && intersection1.intersectionRatio < 0.5
    ? fadeOut(".fadeIn1")
    : fadeIn(".fadeIn1");

  intersection2 && intersection2.intersectionRatio < 0.5
    ? imageOut(".fadeIn2")
    : imageIn(".fadeIn2");

  intersection3 && intersection3.intersectionRatio < 0.6
    ? imageOut(".fadeIn3")
    : imageIn(".fadeIn3");

  intersection4 && intersection4.intersectionRatio < 0.4
    ? imageOut(".fadeIn4")
    : imageIn(".fadeIn4");

  intersection5 && intersection5.intersectionRatio < 0.6
    ? imageOut(".fadeIn5")
    : imageIn(".fadeIn5");

  intersection6 && intersection6.intersectionRatio < 0.7
    ? fadeOut(".fadeIn6")
    : fadeIn(".fadeIn6");

  intersection7 && intersection7.intersectionRatio < 0.5
    ? imageOut(".fadeIn7")
    : imageIn(".fadeIn7");
  return (
    <>
      <div className="section-home-full-1">
        <div className="title">
          <Header size="xl">HOLOGY 3.0</Header>
        </div>
        <div className="description" ref={description}>
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

      <div className="section-home-full-2" ref={sectionRef1}>
        <div className="title fadeIn1">
          <Header size="r">What Is The Theme This Year ?</Header>
        </div>
        <div className="description fadeIn1">
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

      <div className="section-home-full-3" ref={sectionRef2}>
        <div className="mascot-container fadeIn2"></div>
        <div className="text">
          <div className="title fadeIn2">
            <Header size="r">Meet Hology! This Year Mascot</Header>
          </div>
          <div className="description fadeIn2">
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

      <div className="section-home-full-4" ref={sectionRef3}>
        <div className="title fadeIn3">
          <Header size="r" center>
            COMPETITION
          </Header>
        </div>
        <div className="description">
          <div className="text">
            <div className="header fadeIn3">
              <Paragraph header>Join The Online Competiton</Paragraph>
            </div>
            <div className="sub-header fadeIn3">
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
          <div className="image-container fadeIn3"></div>
        </div>
        <div className="button-container fadeIn3">
          <Link to="/competition">
            <Button>Explore Now</Button>
          </Link>
        </div>
        <div className="square-box-1"></div>
        <div className="square-box-2"></div>
      </div>

      <div className="section-home-full-5" ref={sectionRef4}>
        <div className="title fadeIn4">
          <Header size="r" center>
            Webinar
          </Header>
        </div>
        <div className="description">
          <div className="tagline fadeIn4">
            <Paragraph>
              “Evolve Innovative Thinking for Millennials to Face Technology
              Growth in 4.0 Industrial Era”
            </Paragraph>
          </div>
          <div className="header fadeIn4">
            <Paragraph header>MEET OUR SPEAKER</Paragraph>
          </div>
          <div className="speaker-container">
            <div className="image-container fadeIn4"></div>
            <div className="image-container fadeIn4"></div>
            <div className="image-container fadeIn4"></div>
          </div>
        </div>
        <div className="square-box-1"></div>
        <div className="square-box-2"></div>
      </div>

      <div className="section-home-full-6" ref={sectionRef5}>
        <div className="title fadeIn5">
          <Header size="r" center>
            GO ACADEMY
          </Header>
        </div>
        <div className="description">
          <div className="image-container fadeIn5"></div>
          <div className="text">
            <div className="header fadeIn5">
              <Paragraph header>Join The Online Competiton</Paragraph>
            </div>
            <div className="sub-header fadeIn5">
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
        <div className="button-container fadeIn5">
          <Link to="/goacademy">
            <Button variant="primary">Explore Now</Button>
          </Link>
        </div>
        <div className="square-box-1"></div>
        <div className="square-box-2"></div>
      </div>

      <div className="section-home-full-7" ref={sectionRef6}>
        <div className="title fadeIn6">
          <Header size="r">Core Value HOLOGY 3.0</Header>
        </div>
        <div className="description fadeIn6">
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

      <div className="section-home-full-8" ref={sectionRef7}>
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
