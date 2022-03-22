import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { FormInput } from "../../assets/components/FormInput/FormInput";
import "./LoginPage.scss";
import JumbotronImage from "../../assets/img/jumbotron.png";

export default class LoginPage extends Component {
  render() {
    return (
      <div className="login-page">
        <div className="jumbotron-section">
          <img src={JumbotronImage} alt="Jumbotron" />
        </div>
        <div className="main-section">
          <div className="title-logo"></div>
          <h3 className="title">Welcome, Admin BCR</h3>
          <Form className="login-form">
            <FormInput
              id={"formEmail"}
              label={"Email"}
              placeholder={"Contoh: user@gmail.com"}
              type={"email"}
            />
            <FormInput
              id={"formPassword"}
              label={"Password"}
              placeholder={"6+ karakter"}
              type={"password"}
            />
            <Button variant="primary" className="form-button w-100">
              Sign In
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}
