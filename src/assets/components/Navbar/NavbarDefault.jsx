import React from "react";
import "./NavbarDefault.scss";
import { Container, Navbar } from "react-bootstrap";
import Logo from "../../img/binar-logo.png";

export const NavbarDefault = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">
          BCR
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};
