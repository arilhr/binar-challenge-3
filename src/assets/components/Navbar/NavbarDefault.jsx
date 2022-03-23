import React from "react";
import "./NavbarDefault.scss";
import { Container, Navbar } from "react-bootstrap";
import Logo from "../../img/binar-logo.png";
import { SearchBar } from "../SearchBar/SearchBar";

export const NavbarDefault = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">BCR</Navbar.Brand>
        <SearchBar />
      </Container>
    </Navbar>
  );
};
