import "./Footer.scss";
import React from "react";
import Paragraph from "../Paragraph/Paragraph";
import {
  FaYoutube,
  FaLine,
  FaTwitterSquare,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="flexbox">
        <div className="description">
          <Paragraph large header>
            Hology
          </Paragraph>
          <Paragraph>
            Fakultas Ilmu Komputer Jalan Veteran No.8, Kecamatan Lowokwaru,
            Ketawanggede, Kota Malang, Jawa Timur 65145
          </Paragraph>
          <Paragraph>hology.filkomub@gmail.com</Paragraph>
        </div>

        <div className="social-media">
          <Paragraph large header>
            Find Us On Social Media
          </Paragraph>
          <FaTwitterSquare className="icon" />
          <FaLine className="icon" />
          <FaYoutube className="icon" />
          <FaInstagram className="icon" />
        </div>
      </div>
      <div className="copyright">
        <Paragraph>Made by IT HOLOGY 2020</Paragraph>
      </div>
    </div>
  );
};

export default Footer;
