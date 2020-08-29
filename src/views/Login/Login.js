import React, { useState } from "react";
import "./Login.scss";
import Fieldinput from "../../components/Field-input/Fieldinput";
import Paragraph from "../../components/Paragraph/Paragraph";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import Logo from "../../assets/logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
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
              required
              marbott
            />
            <Fieldinput
              label="Password"
              name="password"
              type="password"
              marbott
              required
            />
            <Button>Login</Button>
            <div className="register-text">
              <Paragraph>
                If you dont have an account Create{" "}
                <Link className="link-register" to="/register">
                  here
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
