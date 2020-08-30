import React, {useEffect, useState} from "react";
import "./Login.scss";
import Fieldinput from "../../components/Field-input/Fieldinput";
import Paragraph from "../../components/Paragraph/Paragraph";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import Logo from "../../assets/logo.png";
import {Redirect} from "react-router";

import CheckSession from "../../components/CheckSession";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [isValid, setIsValid] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  
  useEffect(() => {
    if (!isFetching) return;
    
    fetch("http://multazamgsd.com/hology/api/login", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        email,
        password
      })
    }).then(raw => {
      return raw.json();
    }).then(res => {
      if (res["success"]) {
        localStorage.setItem('hology_user_session', res.data.access_token);
        localStorage.setItem('hology_user_ref', res.data.refresh_token);
        localStorage.setItem('hology_user_data', JSON.stringify(res.data.user));
        setIsValid(true);
      } else {
        console.log("gagal!")
        setIsFetching(false);
      }
    }).catch(err => {
      console.log("error!")
    });
  }, [isFetching]);

  return (
    <>
      <CheckSession loggedOut redirect/>
      
      <div className="login-container-full">
        <div className="flexbox-login">
          <div className="logo-container">
            <img src={Logo} alt="Hology Logo" />
          </div>
          <div className="form-login-container">
            <div className="title">
              <Header size="r" center>
                Login Hology
              </Header>
            </div>
            <Fieldinput
              label="Email"
              name="email"
              type="email"
              handleChange={e => setEmail(e.target.value)}
              required
              marbott
            />
            <Fieldinput
              label="Password"
              name="password"
              type="password"
              handleChange={e => setPassword(e.target.value)}
              marbott
              required
            />
            <Button
              onClicked={() => setIsFetching(true)}
            >
              {isFetching ? "Loading..." : "Login"}
            </Button>
            <div className="register-text">
              <Paragraph>
                If you haven't yet,{" "}
                <Link className="link-register" to="/register">
                  create an account here.
                </Link>
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
