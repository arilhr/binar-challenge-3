import React from "react";
import "./NavbarDefault.scss";
import { Container, Navbar } from "react-bootstrap";
import { SearchBar } from "../SearchBar/SearchBar";

export const NavbarDefault = () => {
  return (
    <Navbar fixed="top">
      <Container fluid>
        <Navbar.Brand href="/">BCR</Navbar.Brand>
        <SearchBar />
      </Container>
    </Navbar>
  );
};
