import React, { useEffect, useState } from "react";
import "./Register.scss";
import Fieldinput from "../../components/Field-input/Fieldinput";
import Paragraph from "../../components/Paragraph/Paragraph";
import { Link, Redirect } from "react-router-dom";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import Select from "react-select";
import Helmet from "react-helmet";
import CheckSession from "../../components/CheckSession";

function checkValid(obj) {
  for (let key in obj) {
    if (obj[key] == null && obj[key] === "") return false;
  }
  return true;
}

const Register = () => {
  const [isSuccess, setIsSuccess] = useState("maybe");
  const [isSending, setIsSending] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [institutions, setInstitutions] = useState([]);
  const [payload, setPayload] = useState({
    fullname: "",
    password: "",
    email: "",
    gender: 0,
    birthdate: "1999-12-31",
    institution: 0,
    institution_custom: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    console.log(payload);
    if (!isLoading) return;
    fetch("https://multazamgsd.com/hology/api/institutions", {
      method: "GET",
    })
      .then((raw) => raw.json())
      .then((res) => {
        let theData = [];
        theData = res.data.map((item) => {
          return {
            value: item["institution_id"],
            label: item["institution_name"].replace(/\\r\\n/g, ""),
          };
        });
        return theData;
      })
      .then((readyData) => {
        setInstitutions(readyData);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [isLoading]);

  useEffect(() => {
    if (!isSending) return;
    if (confirmPassword !== "" && confirmPassword !== payload.password) return;
    if (!checkValid(payload)) {
      alert("Registration failed! Please check your inputed data!");
      setIsSuccess("no");
      return;
    }
    console.log(payload);
    fetch("https://multazamgsd.com/hology/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((raw) => {
        return raw.json();
      })
      .then((res) => {
        if (res["success"]) {
          alert("Your account has been succesfully registered!");
          setIsSuccess("yes");
        } else {
          alert("Registration failed! Please check your inputed data!");
          setIsSuccess("no");
        }
        setIsSending(false);
      })
      .catch((err) => {
        alert("Registration failed! Please check your inputed data!");
        setIsSuccess("no");
        setIsSending(false);
      });
  }, [isSending]);

  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <CheckSession loggedOut redirect />
      {isSuccess === "yes" && <Redirect to="/login" />}
      {isSuccess === "no" && window.location.reload()}
      <div className="form-register-container">
        <div className="title">
          <Header size="r" center>
            Account Registration
          </Header>
        </div>
        <Fieldinput
          label="Nama Lengkap"
          name="name"
          type="text"
          required
          marbott
          value={payload.fullname}
          onChange={(e) => setPayload({ ...payload, fullname: e.target.value })}
        />
        <Fieldinput
          label="Email"
          name="email"
          type="email"
          marbott
          required
          value={payload.email}
          onChange={(e) => setPayload({ ...payload, email: e.target.value })}
        />
        <Fieldinput
          label="Tanggal Lahir"
          name="tanggalLahir"
          type="date"
          marbott
          required
          value={payload.birthdate}
          min="1994-01-01"
          max="2006-31-31"
          onChange={(e) =>
            setPayload({ ...payload, birthdate: e.target.value })
          }
        />
        <div className="select-container">
          <span className="label">Gender</span>
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
              { value: 0, label: "Male" },
              { value: 1, label: "Female" },
            ]}
            onChange={(e) => setPayload({ ...payload, gender: e.value })}
          />
        </div>
        <div className="select-container">
          <span className="label">Universitas asal (ketik untuk mencari)</span>
          {isLoading ? (
            <Paragraph>Mohon tunggu... Memuat data...</Paragraph>
          ) : (
            <>
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
                isSearchable
                name="competition"
                options={institutions}
                onChange={(e) =>
                  setPayload({ ...payload, institution: e.value })
                }
              />
              <br />
              <p className="hint">
                Jika Nama Universitasmu tidak ada dilist pilih "Lainnya"
              </p>
            </>
          )}
        </div>
        {payload.institution == 9999 ? (
          <Fieldinput
            label="Nama Universitas"
            name="institution_custom"
            type="text"
            placeholder="Ketik disini"
            marbott
            required
            value={payload.institution_custom}
            onChange={(e) =>
              setPayload({ ...payload, institution_custom: e.target.value })
            }
          />
        ) : null}
        <Fieldinput
          label="Password"
          name="password"
          type="password"
          placeholder="8-25 char upper/lowercase/digits"
          marbott
          required
          value={payload.password}
          onChange={(e) => setPayload({ ...payload, password: e.target.value })}
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
        <br />
        <br />
        {confirmPassword !== "" && confirmPassword !== payload.password && (
          <Paragraph>
            Konfirmasi password tidak cocok! Pastikan isian password sama.
            <br />
            <br />
            <br />
          </Paragraph>
        )}
        <Button onClicked={() => setIsSending(true)}>Daftar</Button>
        <div className="login-text">
          <Paragraph>
            If you have an account,{" "}
            <Link to="/login" className="link-login">
              login here.
            </Link>
          </Paragraph>
        </div>
      </div>
    </>
  );
};

export default Register;
