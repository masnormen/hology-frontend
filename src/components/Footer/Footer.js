import "./Footer.scss";
import React from "react";
import Paragraph from "../Paragraph/Paragraph";
import Logo from "../../assets/logotext.png";
import {
  FaYoutube,
  FaLine,
  FaTwitterSquare,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="flexbox">
        <div className="description">
          <img src={Logo} alt="Hology Logo" className="logo" />
          <div className="location">
            <Paragraph>
              Fakultas Ilmu Komputer Jalan Veteran No.8, Kecamatan Lowokwaru,
              Ketawanggede, Kota Malang, Jawa Timur 65145
            </Paragraph>
          </div>
          <div className="copyright">
            <Paragraph>Made with ❤️ by IT DEV HOLOGY 2020</Paragraph>
          </div>
        </div>

        <div className="social-media">
          <Paragraph header>Connect with us:</Paragraph>
          <div className="icons-container">
            {/*<div className="media">*/}
            {/*  <FaTwitterSquare className="icon" color="#1DA1F2" />*/}
            {/*  <a*/}
            {/*    href="https://www.youtube.com/channel/UCmpZJv7Kk1TUoOLSSgZQaWg/"*/}
            {/*    target="blank"*/}
            {/*  >*/}
            {/*    @Hology_UB*/}
            {/*  </a>*/}
            {/*</div>*/}
            <div className="media">
              <FaLine className="icon" color="#00b900"/>
              <a
                href="https://line.me/R/ti/p/@qqf2710x"
                target="blank"
              >
                @qqf2710x
              </a>
            </div>
            <div className="media">
              <FaYoutube className="icon" color="red"/>
              <a
                href="https://www.youtube.com/channel/UCmpZJv7Kk1TUoOLSSgZQaWg/"
                target="blank"
              >
                HOLOGY UB
              </a>
            </div>
            <div className="media">
              <FaInstagram className="icon" color="#5851DB"/>
              <a href="https://www.instagram.com/hology_ub/" target="blank">
                hology_ub
              </a>
            </div>
            <div className="media">
              <FaEnvelope className="icon icon-email"  />
              <a href="mailto:hology.filkomub@gmail.com" target="blank">
                hology.filkomub@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
