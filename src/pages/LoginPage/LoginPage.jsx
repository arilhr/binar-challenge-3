import React, { Component } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { FormInput } from "../../assets/components/FormInput/FormInput";
import "./LoginPage.scss";
import JumbotronImage from "../../assets/img/jumbotron.png";
import LoginData from "./login-data.json";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  state = {
    email: "",
    password: "",
    error: "",
    status: "",
  };

  handleEmailInput(e) {
    this.setState({
      email: e.target.value,
    });
  }

  handlePasswordInput(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleLogin() {
    const EMAIL_VALIDATION = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi;

    // input validation
    if (
      this.state.email === "" ||
      this.state.password === "" ||
      !EMAIL_VALIDATION.test(this.state.email) ||
      this.state.password.length < 6
    ) {
      this.setState({
        info: "Masukkan username dan password yang benar. Perhatikan penggunaan huruf kapital.",
        status: "danger",
      });
      return;
    }

    this.setState({
      info: "Login Berhasil.",
      status: "success",
    });
  }

  render() {
    return (
      <div className="login-page">
        <div className="jumbotron-section">
          <img src={JumbotronImage} alt="Jumbotron" />
        </div>
        <div className="main-section">
          <div className="title-logo"></div>
          <h3 className="title">Welcome, Admin BCR</h3>
          <Alert show={this.state.status !== ""} variant={this.state.status}>
            <p>{this.state.info}</p>
          </Alert>
          <Form className="login-form">
            <FormInput
              id={"formEmail"}
              label={"Email"}
              placeholder={"Contoh: user@gmail.com"}
              type={"email"}
              handleChange={this.handleEmailInput}
            />
            <FormInput
              id={"formPassword"}
              label={"Password"}
              placeholder={"6+ karakter"}
              type={"password"}
              handleChange={this.handlePasswordInput}
            />
            <Button
              variant="primary"
              className="form-button w-100"
              onClick={this.handleLogin}
            >
              Sign In
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}
