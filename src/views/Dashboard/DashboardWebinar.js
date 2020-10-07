import React, {useEffect, useState} from "react";
import Button from "../../components/Button/Button";
import Paragraph from "../../components/Paragraph/Paragraph";
import "./DashboardSection.scss";
import Header from "../../components/Header/Header";
import {GoCalendar} from "react-icons/go";
import {MdAccessTime, MdPlace} from "react-icons/md";
import Logo from "../../assets/logo.png";
import {getAccessToken, getUserData, setUserData} from "../../components/SessionHelper";
import Barcode from "react-barcode";

const DashboardWebinar = () => {
  const [isRegisterWebinar, setIsRegisterWebinar] = useState(false);
  
  useEffect(() => {
    if (!isRegisterWebinar) return;
    
    fetch("https://multazamgsd.com/hology/api/register-webinar", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + getAccessToken,
        "Content-Type": "application/json"
      }
    }).then(raw => {
      return raw.json();
    }).then(res => {
      if (res["success"]) {
        let newData = getUserData;
        newData['is_user_register_webinar'] = 1;
        setUserData(newData);
        window.location.reload();
      } else {
        alert("Failed! Please contact IT support")
      }
    }).catch(e =>
      alert("Error! Please contact IT support")
    );
    setIsRegisterWebinar(false);
  }, [isRegisterWebinar]);
  
  return (
    <div>
      <div className="dashboard-section-webinar">
        {getUserData != null && getUserData.is_user_register_webinar ? (
          <>
            <div className="description">
              <Header center size="r">
                TIKET
              </Header>
            </div>
            <br />
            <Paragraph>
              Venue dan update informasi lain terkait webinar akan diberitahukan di sini.
            </Paragraph>
            <br />
            <div className="ticket">
              <div className="description">
                <Header lineWhite center size="r">WEBINAR - HOLOGY 3.0</Header>
                <br />
                <Paragraph>TICKET FOR: {getUserData.user_fullname.toUpperCase()}</Paragraph>
                <Paragraph>TYPE: {getUserData.institution_id === 0 ? "NON-STUDENT" : "STUDENT"}</Paragraph>
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
                    value={getUserData.user_id + getUserData.institution_id + "HOLOGY"}
                  />
                </div>
                <div className="date">
                  <div className="detail margin-bottom">
                    <GoCalendar className="icon-date"/>
                    <Paragraph>27 OCT 2020</Paragraph>
                  </div>
                  <div className="detail  margin-bottom">
                    <MdAccessTime className="icon-date"/>
                    <Paragraph>17.00 WIB</Paragraph>
                  </div>
                  <div className="detail">
                    <MdPlace className="icon-date"/>
                    <Paragraph>ONLINE</Paragraph>
                  </div>
                </div>
              </div>
              <div className="circle left"/>
              <div className="circle right"/>
            </div>
          </>
        ) : (
          <div className="webinar-regist">
            <div className="description">
              <Paragraph header>Akun ini belum terdaftar sebagai peserta webinar.</Paragraph>
            </div>
            {/*<Button onClicked={() => setIsRegisterWebinar(true)}>Daftar</Button>*/}
            <Button>Coming Soon</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardWebinar;
