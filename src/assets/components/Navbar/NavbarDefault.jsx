import React from "react";
import "./NavbarDefault.scss";
import { Container, Navbar } from "react-bootstrap";
import { SearchBar } from "../SearchBar/SearchBar";
import { ProfileCard } from "../ProfileCard/ProfileCard";
import { ReactComponent as HamburgerIcon } from "../../img/fi_menu.svg";

export const NavbarDefault = () => {
  return (
    <Navbar fixed="top">
      <div className="left-side">
        <Navbar.Brand href="/dashboard"></Navbar.Brand>
        <button className="menu-button">
          <HamburgerIcon />
        </button>
      </div>
      <div className="right-side">
        <SearchBar />
        <ProfileCard
          profileImg={
            "https://media-exp1.licdn.com/dms/image/C5603AQGUIxk8gAt21g/profile-displayphoto-shrink_800_800/0/1630070042876?e=1653523200&v=beta&t=d-HzbiibF12ix0SJ4y88QZspCfdQjWjUop8DdXL3zFs"
          }
          name={"Aril Harlih"}
        />
      </div>
    </Navbar>
  );
};
