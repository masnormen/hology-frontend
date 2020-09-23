import React, { useState } from "react";
import Button from "../../components/Button/Button";
import Paragraph from "../../components/Paragraph/Paragraph";
import "./DashboardSection.scss";
import Header from "../../components/Header/Header";
import { GoCalendar } from "react-icons/go";
import { MdAccessTime, MdPlace } from "react-icons/md";
import Logo from "../../assets/logo.png";

const DashboardWebinar = ({ fullname }) => {
  const [isRegisterWebinar, setIsRegisterWebinar] = useState(true);
  return (
    <div>
      <div className="dashboard-section-webinar">
        <div className="header">
          <Header center size="r">
            Webinar
          </Header>
        </div>
        <Paragraph header large>
          COMING SOON
        </Paragraph>
        {/* {isRegisterWebinar ? (
          <>
            <div className="description">
              <Paragraph header>HOLOGY Webinar Ticket</Paragraph>
            </div>
            <div className="ticket">
              <div className="description">
                <Paragraph large>Webinar Hology</Paragraph>
                <Paragraph header>Nama : {fullname}</Paragraph>
              </div>
              <div className="details">
                <div className="hology">
                  <img src={Logo} alt="Hology Logo" className="logo-hology" />
                  <Paragraph header>Hology</Paragraph>
                </div>
                <div className="date">
                  <div className="detail margin-bottom">
                    <GoCalendar className="icon-date" />
                    <Paragraph>OCTOBER 27, 2020</Paragraph>
                  </div>
                  <div className="detail  margin-bottom">
                    <MdAccessTime className="icon-date" />
                    <Paragraph>17.00 WIB</Paragraph>
                  </div>
                  <div className="detail">
                    <MdPlace className="icon-date" />
                    <Paragraph>Online</Paragraph>
                  </div>
                </div>
              </div>
              <div className="circle left" />
              <div className="circle right" />
            </div>
          </>
        ) : (
          <div className="webinar-regist">
            <div className="description">
              <Paragraph header>Silahkan daftar webinar sekarang</Paragraph>
            </div>
            <Button onClicked={() => setIsRegisterWebinar(true)}>Daftar</Button>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default DashboardWebinar;
