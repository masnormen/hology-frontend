import React, {useEffect, useState} from "react";
import Button from "../../components/Button/Button";
import Paragraph from "../../components/Paragraph/Paragraph";
import "./DashboardSection.scss";
import Fieldinput from "../../components/Field-input/Fieldinput";
import {getAccessToken} from "../../components/SessionHelper";
import {Link} from "react-router-dom";
import Select from "react-select";

const DashboardEditProfile = () => {
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState("maybe");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const [payload, setPayload] = useState({
    fullname: "",
    email: "",
    password: "",
    gender: "",
    birthdate: "",
  });
  
  useEffect(() => {
    if (!isSending) return;
    if (confirmPassword !== "" && confirmPassword !== payload.password) return;
  
    for (let key in payload) {
      if (payload[key] == null || payload[key] === "")
        delete payload[key];
    }
    
    fetch("https://multazamgsd.com/hology/api/update-profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getAccessToken
      },
      body: JSON.stringify(payload),
    })
      .then((raw) => {
        return raw.json();
      })
      .then((res) => {
        if (res["success"]) {
          alert("Your account data has been succesfully updated!");
          setIsSuccess("yes");
        } else {
          alert("Update data failed! Check your data or try again later.");
          setIsSuccess("no");
        }
        setIsSending(false);
        // window.location.reload()
      })
      .catch((err) => {
        alert("Update data failed! Check your data or try again later.");
        setIsSuccess("no");
        setIsSending(false);
        // window.location.reload()
      });
  }, [isSending]);
  
  return (
    <div className="dashboard-section-competition-selection">
      <div className="academy">
        <Link to="/dashboard">
          <Button variant="secondary">
            &larr; Kembali
          </Button>
        </Link>
        <br/><br/><br/><br/><br/><br/>
        <Paragraph>Input hanya pada data yang ingin Anda ubah</Paragraph>
        <br/><br/><br/><br/>
        <div className="description">
          <div className="input-option">
            <Fieldinput
              label="Ubah Nama Lengkap"
              name="fullname"
              type="text"
              marbott
              value={payload.fullname}
              onChange={(e) =>
                setPayload({...payload, fullname: e.target.value})
              }
            />
          </div>
          <div className="input-option">
            <Fieldinput
              label="Ubah Email"
              name="email"
              type="email"
              marbott
              value={payload.email}
              onChange={(e) =>
                setPayload({...payload, email: e.target.value})
              }
            />
          </div>
          <div className="input-option">
            <Fieldinput
              label="Tanggal Lahir"
              name="tanggalLahir"
              type="date"
              marbott
              value={payload.birthdate}
              min="1994-01-01"
              max="2006-31-31"
              onChange={(e) =>
                setPayload({ ...payload, birthdate: e.target.value })
              }
            />
          </div>
          <div className="select-container">
            <span className="label">Ubah Gender</span>
            <Select
              theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary25: "#519a9e",
                  primary: "#1f81a0",
                },
              })}
              className="basic-single"
              classNamePrefix="select"
              name="gender"
              options={[
                {value: 0, label: "Male"},
                {value: 1, label: "Female"},
              ]}
              onChange={(e) => setPayload({...payload, gender: e.value})}
            />
          </div>
          <div className="input-option">
            <Fieldinput
              label="Ubah Password"
              name="password"
              type="password"
              placeholder="8-25 char upper/lowercase/digits"
              marbott
              value={payload.password}
              onChange={(e) =>
                setPayload({...payload, password: e.target.value})
              }
            />
          </div>
          <div className="input-option">
            <Fieldinput
              label="Konfirmasi Ubah Password"
              name="confirm_password"
              type="password"
              placeholder="8-25 char upper/lowercase/digits"
              marbott
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          {confirmPassword !== "" && confirmPassword !== payload.password && (
            <Paragraph>
              Konfirmasi password tidak cocok! Pastikan isian password sama.
            </Paragraph>
          )}
          <br/>
          <br/>
          <Button onClicked={() => setIsSending(true)}>{isSending ? "Loading..." : "Ubah Data"}</Button>
        </div>
      </div>
    </div>
  );
};

export default DashboardEditProfile;
