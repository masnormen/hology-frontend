import React from "react";
import Paragraph from "../Paragraph/Paragraph";
import "./MediaPartner.scss";

//Lembaga
import BCC from "../../assets/lembaga/bcc.png";
import BEM from "../../assets/lembaga/BEM.png";
import Gojek from "../../assets/lembaga/Gojek.png";
import Himatekkom from "../../assets/lembaga/himatekkom.png";
import HMIF from "../../assets/lembaga/HMIF.png";
import KBMSI from "../../assets/lembaga/kbmsi.png";
import KBMTI from "../../assets/lembaga/kbmti.png";
import Poros from "../../assets/lembaga/poros.png";
import Raion from "../../assets/lembaga/raion.png";
import Robotiik from "../../assets/lembaga/robotiik.png";

//Media Partner
import AnakCoding from "../../assets/mediaPartner/anakcoding.png";
import BNCC from "../../assets/mediaPartner/BNCC_T.png";
import eventCampus from "../../assets/mediaPartner/eventcanpus.png";
import eventJatim from "../../assets/mediaPartner/eventjatim.png";
import EVMHS3 from "../../assets/mediaPartner/evmhs3.png";
import Geek from "../../assets/mediaPartner/geek.png";
import InfoLomba from "../../assets/mediaPartner/infolomba.png";
import Jatimedia from "../../assets/mediaPartner/jatimedia.jpeg";
import GirlsKode from "../../assets/mediaPartner/girlskode.jpg";
import LogoEB1 from "../../assets/mediaPartner/EB1.png";
import LogoEJ from "../../assets/mediaPartner/EJ1.png";
import EM from "../../assets/mediaPartner/LOGO EM 2020.png";
import EM1 from "../../assets/mediaPartner/EM1.png";
import ES2 from "../../assets/mediaPartner/ES2.png";
import BEMTELU from "../../assets/mediaPartner/logoBEM Tel-U.png";
import LombaMhsID from "../../assets/mediaPartner/lombamhsID.png";

const MediaPartner = () => {
  return (
    <div className="media-container">
      <div className="supported">
        <div className="header">
          <hr className="horizontal" />
          <Paragraph header>Supported by</Paragraph>
          <hr className="horizontal" />
        </div>
        <div className="image-container">
          <img src={BCC} alt="logo-lembaga" className="logo-style" />
          <img src={BEM} alt="logo-lembaga" className="logo-style" />
          <img src={Gojek} alt="logo-lembaga" className="logo-style" />
          <img src={Himatekkom} alt="logo-lembaga" className="logo-style" />
          <img src={HMIF} alt="logo-lembaga" className="logo-style" />
          <img src={KBMSI} alt="logo-lembaga" className="logo-style" />
          <img src={KBMTI} alt="logo-lembaga" className="logo-style" />
          <img src={Poros} alt="logo-lembaga" className="logo-style" />
          <img src={Raion} alt="logo-lembaga" className="logo-style" />
          <img src={Robotiik} alt="logo-lembaga" className="logo-style" />
        </div>
      </div>
      <div className="media-partner">
        <div className="header">
          <hr className="horizontal" />
          <Paragraph header>Media Partner</Paragraph>
          <hr className="horizontal" />
        </div>
        <div className="image-container">
          <img
            src={AnakCoding}
            alt="logo-lembaga"
            className="logo-style margin-bottom"
          />
          <img
            src={BNCC}
            alt="logo-lembaga"
            className="logo-style margin-bottom"
          />
          <img
            src={eventCampus}
            alt="logo-lembaga"
            className="logo-style margin-bottom"
          />
          <img
            src={eventJatim}
            alt="logo-lembaga"
            className="logo-style margin-bottom"
          />
          <img
            src={EVMHS3}
            alt="logo-lembaga"
            className="logo-style margin-bottom"
          />
          <img
            src={Geek}
            alt="logo-lembaga"
            className="logo-style margin-bottom"
          />
          <img
            src={GirlsKode}
            alt="logo-lembaga"
            className="logo-style margin-bottom"
          />
          <img
            src={InfoLomba}
            alt="logo-lembaga"
            className="logo-style margin-bottom"
          />
          <img
            src={Jatimedia}
            alt="logo-lembaga"
            className="logo-style margin-bottom"
          />
          <img
            src={BEMTELU}
            alt="logo-lembaga"
            className="logo-style margin-bottom"
          />
          <img
            src={LombaMhsID}
            alt="logo-lembaga"
            className="logo-style margin-bottom"
          />
          <img
            src={EM}
            alt="logo-lembaga"
            className="logo-style margin-bottom"
          />
          <img
            src={LogoEB1}
            alt="logo-lembaga"
            className="logo-style margin-bottom"
          />
          <img
            src={LogoEJ}
            alt="logo-lembaga"
            className="logo-style margin-bottom"
          />
          <img
            src={EM1}
            alt="logo-lembaga"
            className="logo-style margin-bottom"
          />
          <img src={ES2} alt="logo-lembaga" className="logo-style" />
        </div>
      </div>
    </div>
  );
};

export default MediaPartner;
