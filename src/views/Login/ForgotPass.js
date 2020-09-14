import React, {useEffect, useState} from "react";
import "../Register/Register.scss";
import Fieldinput from "../../components/Field-input/Fieldinput";
import Paragraph from "../../components/Paragraph/Paragraph";
import {Link, Redirect} from "react-router-dom";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import Select from "react-select";
import Helmet from "react-helmet";
import CheckSession from "../../components/CheckSession";

const ForgotPass = () => {
  const [isSuccess, setIsSuccess] = useState("maybe");
  const [isSending, setIsSending] = useState(false);
  const [isValid, setValid] = useState(false);
  const [payload, setPayload] = useState({
    email: ""
  });
  
  useEffect(() => {
    if (!isSending) return;
    
    fetch("https://multazamgsd.com/hology/api/forgot-password", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(payload),
    })
      .then((raw) => {
        return raw.json();
      })
      .then((res) => {
        if (res["success"]) {
          alert("Permintaan berhasil diproses. Silahkan cek email Anda!");
          setIsSuccess(true);
        } else {
          alert("Maaf, permintaan Anda tidak bisa diproses. Pastikan email Anda sudah terdaftar.");
          setIsSuccess(false);
        }
        setIsSending(false);
      })
      .catch((err) => {
        alert("Maaf, permintaan Anda tidak bisa diproses. Pastikan email Anda sudah terdaftar.");
        setIsSuccess(false);
        setIsSending(false);
      });
  }, [isSending]);
  
  return (
    <>
      <Helmet>
        <title>Forgot Password</title>
      </Helmet>
      <CheckSession loggedOut redirect/>
      <div className="form-register-container">
        <div className="title">
          <Header size="r" center>
            Lupa Password
          </Header>
        </div>
        <Fieldinput
          label="Email Anda"
          name="email"
          type="email"
          marbott
          required
          value={payload.email}
          onChange={(e) => setPayload({...payload, email: e.target.value})}
        />
        <br/><br/>
        <Button onClicked={() => setIsSending(true)}>Kirimkan email pemulihan</Button>
      </div>
    </>
  );
};

export default ForgotPass;
