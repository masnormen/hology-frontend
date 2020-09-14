import React, {useEffect, useState} from "react";
import "../Register/Register.scss";
import {Redirect, useParams} from "react-router";
import Fieldinput from "../../components/Field-input/Fieldinput";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import Helmet from "react-helmet";
import CheckSession from "../../components/CheckSession";
import jwt_decode from "jwt-decode";
import Paragraph from "../../components/Paragraph/Paragraph";

const NewPass = () => {
  const [isSuccess, setIsSuccess] = useState("maybe");
  const [isSending, setIsSending] = useState(false);
  const [isValid, setValid] = useState(false);
  
  const token = useParams().token;
  
  const [payload, setPayload] = useState({
    email: "",
    token: token,
    password: ""
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  
  useEffect(() => {
    fetch("https://multazamgsd.com/hology/api/forgot-token", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        token: token
      }),
    })
      .then((raw) => {
        return raw.json();
      })
      .then((res) => {
        if (res["success"]) {
          setValid(true);
        } else {
          setValid(false);
          setIsSuccess(false);
        }
      })
      .catch((err) => {
        setValid(false);
        setIsSuccess(false);
      });
  }, []);
  
  useEffect(() => {
    if (!isSending) return;
    if (confirmPassword !== "" && confirmPassword !== payload.password) return;
    
    fetch("https://multazamgsd.com/hology/api/new-password", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(payload),
    })
      .then((raw) => {
        return raw.json();
      })
      .then((res) => {
        if (res["success"]) {
          alert("Permintaan berhasil diproses. Silahkan login dengan password baru Anda!");
          setIsSuccess(true);
        } else {
          alert("Maaf, permintaan Anda tidak bisa diproses. Silahkan coba kembali.");
          setIsSuccess(false);
        }
        setIsSending(false);
      })
      .catch((err) => {
        alert("Maaf, permintaan Anda tidak bisa diproses. Silahkan coba kembali.");
        setIsSuccess(false);
        setIsSending(false);
      });
  }, [isSending]);
  
  return (
    <>
      <Helmet>
        <title>New Password</title>
      </Helmet>
      <CheckSession loggedOut redirect/>
      {isSuccess === true && <Redirect to="/login"/>}
      
      {!isValid && isSuccess === false && (
        <>
          <div className="form-register-container">
            <div className="title">
              <Header size="r" center>
                Link tidak valid!
              </Header>
            </div>
          </div>
        </>
      )}
      
      {isValid && (
        <div className="form-register-container">
          <div className="title">
            <Header size="r" center>
              Masukkan Password Baru
            </Header>
          </div>
          <Fieldinput
            label="Password"
            name="password"
            type="password"
            placeholder="8-25 char upper/lowercase/digits"
            marbott
            required
            value={payload.password}
            onChange={(e) => setPayload({...payload, password: e.target.value})}
          />
          <Fieldinput
            label="Konfirmasi Password"
            name="confirm_password"
            type="password"
            placeholder="8-25 char upper/lowercase/digits"
            marbott
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <br/>
          <br/>
          {confirmPassword !== "" && confirmPassword !== payload.password && (
            <Paragraph>
              Konfirmasi password tidak cocok! Pastikan isian password sama.
              <br/>
              <br/>
              <br/>
            </Paragraph>
          )}
          <br/><br/>
          <Button
            onClicked={() => {
              setPayload({...payload, email: jwt_decode(token).sub.user_email});
              setIsSending(true);
            }}
          >
            Ubah password saya
          </Button>
        </div>
      )}
    </>
  );
};

export default NewPass;
