import React, {useEffect, useState} from "react";
import {Redirect, useParams} from "react-router";
import {getAccessToken} from "../../components/SessionHelper";
import Button from "../../components/Button/Button";
import Paragraph from "../../components/Paragraph/Paragraph";
import "../Home/Home.scss";
import Header from "../../components/Header/Header";
import Logo from "../../assets/logo.png";
import {Link} from "react-router-dom";

const Invitation = () => {
    const [isValid, setIsValid] = useState(true);
    const [isConfirmed, setConfirmed] = useState(false);
    const [message, setMessage] = useState("");
    
    const token = useParams().token;
    // 1: successful
    // 2: user not logged in
    // 3: user logged in, but not able to join (team full/restricted)
    const [status, setStatus] = useState(0);
    
    const teamId = () => {
      try {
        return JSON.parse(atob(token.split(".")[1])).sub.team_id;
      } catch (e) {
        return null;
      }
    };
    
    useEffect(() => {
      if (!teamId()) {
        setIsValid(false);
        return;
      } else {
        let isLoggedIn = localStorage.getItem("ho_dXNlcl9zZXNzaW9u")
          && localStorage.getItem("ho_dXNlcl9yZWZyZXNo")
          && localStorage.getItem("ho_dXNlcl9kYXRh")
          && Date.now() < localStorage.getItem("ho_dGltZXN0YW1w") * 1000;
        
        if (!isLoggedIn) {
          setStatus(2);
          return;
        }
      }
    }, []);
    
    useEffect(() => {
      if (!isConfirmed) return;
      fetch("https://multazamgsd.com/hology/api/teams/add", {
        method: "POST",
        headers: {
          "Authorization": "Bearer " + getAccessToken,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          token
        })
      }).then(raw => {
        return raw.json();
      }).then(res => {
        if (res["success"]) {
          setStatus(1);
        } else {
          setMessage(res.message);
          setStatus(3);
        }
      }).catch(e => console.log(e));
    }, [isConfirmed]);
    
    return (
      <>
        <div className="section-home-full-1">
          <div className="text">
            {!isValid && (
              <div className="title">
                <Header size="l">Link tidak valid</Header>
              </div>
            )}
            {isValid && status === 2 && (
              <div className="title">
                <Header size="l">Anda belum Login</Header>
              </div>
            )}
            {isValid && status === 3 && (
              <>
                <div className="title">
                  <Header size="l">Gagal</Header>
                </div>
                <div className="description">
                  <Paragraph>{message}</Paragraph>
                </div>
              </>
            )}
            {isValid && status === 0 && (
              <>
                <div className="title">
                  <Header size="l">Siap bergabung?</Header>
                </div>
                <div className="description">
                  <Button onClicked={() => setConfirmed(true)}>Ya, saya anggota tim ini!</Button>
                </div>
              </>
            )}
            {isValid && status === 1 && (
              <>
                <div className="title">
                  <Header size="l">Sukses!</Header>
                </div>
                <div className="description">
                  <Link to="/dashboard"><Button>Menuju dashboard</Button></Link>
                </div>
              </>
            )}
          </div>
          <div className="logo-container">
            <img src={Logo} alt="logo hology" className="logo"/>
          </div>
        </div>
        {/*{(status === 1 || status === 3) && (*/}
        {/*  <Redirect to="/dashboard"/>*/}
        {/*)}*/}
        {/*{status === 2 && (*/}
        {/*  <Redirect to={"/login/" + token}/>*/}
        {/*)}*/}
      </>
    );
  }
;

export default Invitation;
