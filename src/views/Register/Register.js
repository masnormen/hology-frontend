import React, { useState } from "react";
import "./Register.scss";
import Fieldinput from "../../components/Field-input/Fieldinput";
import Paragraph from "../../components/Paragraph/Paragraph";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";

const Register = () => {
  const [step, setStep] = useState(0);
  const onChange = (nextStep) => {
    setStep(nextStep < 0 ? 0 : nextStep > 3 ? 3 : nextStep);
  };

  const onNext = () => onChange(step + 1);
  const onPrevious = () => onChange(step - 1);
  return (
    <>
      <div className="form-container">
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
        <Fieldinput label="Email" name="email" type="email" marbott required />
        <Button onClicked={onNext}>Next</Button>
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
