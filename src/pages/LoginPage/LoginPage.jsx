import React, { Component, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { FormInput } from "../../assets/components/FormInput/FormInput";
import "./LoginPage.scss";
import JumbotronImage from "../../assets/img/jumbotron.png";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [info, setInfo] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordInput = (e) => {
    setPass(e.target.value);
  };

  const handleLogin = () => {
    const EMAIL_VALIDATION = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi;

    // input validation
    if (
      email === "" ||
      pass === "" ||
      !EMAIL_VALIDATION.test(email) ||
      pass.length < 6
    ) {
      setInfo(
        "Masukkan username dan password yang benar. Perhatikan penggunaan huruf kapital."
      );
      setStatus("danger");
      return;
    }

    setInfo("Login Berhasil!");
    setStatus("success");

    setTimeout(() => {
      navigate("/dashboard");
    }, 2000);
  };

  return (
    <div className="login-page">
      <div className="jumbotron-section">
        <img src={JumbotronImage} alt="Jumbotron" />
      </div>
      <div className="main-section">
        <div className="title-logo"></div>
        <h3 className="title">Welcome, Admin BCR</h3>
        <Alert show={status !== ""} variant={status}>
          <p>{info}</p>
        </Alert>
        <Form className="login-form">
          <FormInput
            id={"formEmail"}
            label={"Email"}
            placeholder={"Contoh: user@gmail.com"}
            type={"email"}
            handleChange={handleEmailInput}
          />
          <FormInput
            id={"formPassword"}
            label={"Password"}
            placeholder={"6+ karakter"}
            type={"password"}
            handleChange={handlePasswordInput}
          />
          <Button
            variant="primary"
            className="form-button w-100"
            onClick={handleLogin}
          >
            Sign In
          </Button>
        </Form>
      </div>
    </div>
  );
};
