import React, { useState, useEffect } from "react";
import "./Register.scss";
import Fieldinput from "../../components/Field-input/Fieldinput";
import Paragraph from "../../components/Paragraph/Paragraph";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import Select from "react-select";

const Register = () => {
  const [institutions, setinstItutions] = useState([
    {
      value: "",
      label: "",
    },
  ]);
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://multazamgsd.com/hology/api/institutions", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result.data))
      .catch((error) => console.log("error", error));
  });
  return (
    <>
      <div className="form-register-container">
        <div className="title">
          <Header size="r" center>
            Personal Info
          </Header>
        </div>
        <Fieldinput
          label="Full Name"
          name="name"
          type="text"
          required
          marbott
        />
        <div className="select-container">
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
            isClearable
            isSearchable
            name="competition"
            options={institutions}
          />
        </div>
        <Fieldinput label="Email" name="email" type="email" marbott required />
        <Button>Register</Button>
      </div>
      <div className="login-text">
        <Paragraph>
          If you have an account login <Link className="link-login">here</Link>
        </Paragraph>
      </div>
    </>
  );
};

export default Register;
