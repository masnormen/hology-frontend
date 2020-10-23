import React, { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import Paragraph from "../../components/Paragraph/Paragraph";
import "./DashboardSection.scss";
import Header from "../../components/Header/Header";
import { GoCalendar } from "react-icons/go";
import { MdAccessTime, MdPlace } from "react-icons/md";
import Logo from "../../assets/logo.png";
import {
  getAccessToken,
  getUserData,
  setUserData,
} from "../../components/SessionHelper";
import Barcode from "react-barcode";
import ReactLivestream from "react-livestream";

const DashboardWebinar = () => {
  const [isRegisterWebinar, setIsRegisterWebinar] = useState(false);

  useEffect(() => {
    if (!isRegisterWebinar) return;

    fetch("https://multazamgsd.com/hology/api/register-webinar", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + getAccessToken,
        "Content-Type": "application/json",
      },
    })
      .then((raw) => {
        return raw.json();
      })
      .then((res) => {
        if (res["success"]) {
          let newData = getUserData;
          newData["user_register_in_webinar"] = 1;
          setUserData(newData);
          window.location.reload();
        } else {
          alert("Failed! Please contact IT support");
        }
      })
      .catch((e) => alert("Error! Please contact IT support"));
    setIsRegisterWebinar(false);
  }, [isRegisterWebinar]);

  return (
    <div>
      <div className="dashboard-section-webinar">
        {getUserData != null && getUserData.user_register_in_webinar ? (
          <>
            <div className="description">
              <Header center size="r">
                🔴 LIVESTREAM
              </Header>
            </div>
            {Date.now() > Date.parse("2020-10-24T12:59:59.000+07:00") ? (
              <>
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://youtu.be/lPQfHM9YVfw"
                >
                  <Button>Stream on YouTube &rarr;</Button>
                </a>
                <div className="livestream">
                  <iframe
                    id="iframeSoal"
                    src="https://www.youtube.com/embed/lPQfHM9YVfw"
                    // src="https://www.youtube.com/embed/live_stream?channel=UCSJ4gkVC6NrvII8umztf0Ow"
                    frameBorder="0"
                    allowFullScreen
                  />
                </div>
              </>
            ) : (
              <div className="livestream">
                <Paragraph>
                  Tetap sabar menunggu! Webinar akan di-livestream di sini :)
                </Paragraph>
              </div>
            )}
            <br />
            <br />
            <br />

            <div className="description">
              <Header center size="r">
                TIKET
              </Header>
            </div>
            <br />
            <Paragraph>
              Venue dan update informasi lain terkait webinar akan diberitahukan
              di sini.
            </Paragraph>
            <br />
            <div className="ticket">
              <div className="description">
                <Header lineWhite center size="r">
                  WEBINAR 1 - HOLOGY 3.0
                </Header>
                <br />
                <Paragraph>
                  TICKET FOR: {getUserData.user_fullname.toUpperCase()}
                </Paragraph>
                <Paragraph>
                  TYPE:{" "}
                  {getUserData.institution_id === 0 ? "NON-STUDENT" : "STUDENT"}
                </Paragraph>
                <br />
                <Paragraph>
                  THEME: How Technology Can Improve the Economic Side without
                  Neglecting Social Values
                </Paragraph>
              </div>
              <div className="details">
                <div className="hology">
                  <img src={Logo} alt="Hology Logo" className="logo-hology" />
                  <Barcode
                    width="1"
                    height="36"
                    displayValue="false"
                    lineColor="#ffffff"
                    background="transparent"
                    value={
                      getUserData.user_id +
                      getUserData.institution_id +
                      "HOLOGY"
                    }
                  />
                </div>
                <div className="date">
                  <div className="detail margin-bottom">
                    <GoCalendar className="icon-date" />
                    <Paragraph>23 OCT 2020</Paragraph>
                  </div>
                  <div className="detail  margin-bottom">
                    <MdAccessTime className="icon-date" />
                    <Paragraph>19.00 - 21.25 WIB</Paragraph>
                  </div>
                  <div className="detail">
                    <MdPlace className="icon-date" />
                    <Paragraph>ONLINE</Paragraph>
                  </div>
                </div>
              </div>
              <div className="circle left" />
              <div className="circle right" />
            </div>

            <div className="ticket">
              <div className="description">
                <Header lineWhite center size="r">
                  WEBINAR 2 - HOLOGY 3.0
                </Header>
                <br />
                <Paragraph>
                  TICKET FOR: {getUserData.user_fullname.toUpperCase()}
                </Paragraph>
                <Paragraph>
                  TYPE:{" "}
                  {getUserData.institution_id === 0 ? "NON-STUDENT" : "STUDENT"}
                </Paragraph>
                <br />
                <Paragraph>
                  THEME: Software Engineering: How to Develop Sustainable Mobile
                  Apps for Long Term Success & the Art of Game Making :
                  Essential Skills to Boost Your Career for the International
                  Rivalry
                </Paragraph>
              </div>
              <div className="details">
                <div className="hology">
                  <img src={Logo} alt="Hology Logo" className="logo-hology" />
                  <Barcode
                    width="1"
                    height="36"
                    displayValue="false"
                    lineColor="#ffffff"
                    background="transparent"
                    value={
                      getUserData.user_id +
                      getUserData.institution_id +
                      "HOLOGY"
                    }
                  />
                </div>
                <div className="date">
                  <div className="detail margin-bottom">
                    <GoCalendar className="icon-date" />
                    <Paragraph>24 OCT 2020</Paragraph>
                  </div>
                  <div className="detail  margin-bottom">
                    <MdAccessTime className="icon-date" />
                    <Paragraph>13.00 WIB & 19.00 WIB</Paragraph>
                  </div>
                  <div className="detail">
                    <MdPlace className="icon-date" />
                    <Paragraph>ONLINE</Paragraph>
                  </div>
                </div>
              </div>
              <div className="circle left" />
              <div className="circle right" />
            </div>

            <div className="ticket">
              <div className="description">
                <Header lineWhite center size="r">
                  WEBINAR 3 - HOLOGY 3.0
                </Header>
                <br />
                <Paragraph>
                  TICKET FOR: {getUserData.user_fullname.toUpperCase()}
                </Paragraph>
                <Paragraph>
                  TYPE:{" "}
                  {getUserData.institution_id === 0 ? "NON-STUDENT" : "STUDENT"}
                </Paragraph>
                <br />
                <Paragraph>
                  THEME: How Data Can Affect Sustainability of Business
                </Paragraph>
              </div>
              <div className="details">
                <div className="hology">
                  <img src={Logo} alt="Hology Logo" className="logo-hology" />
                  <Barcode
                    width="1"
                    height="36"
                    displayValue="false"
                    lineColor="#ffffff"
                    background="transparent"
                    value={
                      getUserData.user_id +
                      getUserData.institution_id +
                      "HOLOGY"
                    }
                  />
                </div>
                <div className="date">
                  <div className="detail margin-bottom">
                    <GoCalendar className="icon-date" />
                    <Paragraph>30 OCT 2020</Paragraph>
                  </div>
                  <div className="detail  margin-bottom">
                    <MdAccessTime className="icon-date" />
                    <Paragraph>19.00 - WIB</Paragraph>
                  </div>
                  <div className="detail">
                    <MdPlace className="icon-date" />
                    <Paragraph>ONLINE</Paragraph>
                  </div>
                </div>
              </div>
              <div className="circle left" />
              <div className="circle right" />
            </div>

            <div className="ticket">
              <div className="description">
                <Header lineWhite center size="r">
                  WEBINAR 4 - HOLOGY 3.0
                </Header>
                <br />
                <Paragraph>
                  TICKET FOR: {getUserData.user_fullname.toUpperCase()}
                </Paragraph>
                <Paragraph>
                  TYPE:{" "}
                  {getUserData.institution_id === 0 ? "NON-STUDENT" : "STUDENT"}
                </Paragraph>
                <br />
                <Paragraph>
                  THEME: The Fine Art of Product Design: Involving Users into
                  Your Process
                </Paragraph>
              </div>
              <div className="details">
                <div className="hology">
                  <img src={Logo} alt="Hology Logo" className="logo-hology" />
                  <Barcode
                    width="1"
                    height="36"
                    displayValue="false"
                    lineColor="#ffffff"
                    background="transparent"
                    value={
                      getUserData.user_id +
                      getUserData.institution_id +
                      "HOLOGY"
                    }
                  />
                </div>
                <div className="date">
                  <div className="detail margin-bottom">
                    <GoCalendar className="icon-date" />
                    <Paragraph>31 OCT 2020</Paragraph>
                  </div>
                  <div className="detail  margin-bottom">
                    <MdAccessTime className="icon-date" />
                    <Paragraph>19.00 - 20.30 WIB</Paragraph>
                  </div>
                  <div className="detail">
                    <MdPlace className="icon-date" />
                    <Paragraph>ONLINE</Paragraph>
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
              <Paragraph header>
                Akun ini belum terdaftar sebagai peserta webinar.
              </Paragraph>
            </div>
            <Button onClicked={() => setIsRegisterWebinar(true)}>Daftar</Button>
            {/* <Button>Coming Soon</Button> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardWebinar;
