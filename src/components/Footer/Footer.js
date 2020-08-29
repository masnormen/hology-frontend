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
          <div className="email">
            <FaEnvelope className="icon-email" />
            <Paragraph>hology.filkomub@gmail.com</Paragraph>
          </div>
        </div>

        <div className="social-media">
          <Paragraph header>Find Us On Social Media</Paragraph>
          <div className="icons-container">
            <div className="media">
              <FaTwitterSquare className="icon" />
              <a>@Hology_UB</a>
            </div>
            <div className="media">
              <FaLine className="icon" />
              <a>@Hology_UB</a>
            </div>
            <div className="media">
              <FaYoutube className="icon" />
              <a
                href="https://www.youtube.com/channel/UCmpZJv7Kk1TUoOLSSgZQaWg/"
                target="blank"
              >
                @Hology_UB
              </a>
            </div>
            <div className="media">
              <FaInstagram className="icon" />
              <a href="https://www.instagram.com/hology_ub/" target="blank">
                @Hology_UB
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <Paragraph>Made by IT HOLOGY 2020</Paragraph>
      </div>
    </div>
  );
};

export default Footer;
