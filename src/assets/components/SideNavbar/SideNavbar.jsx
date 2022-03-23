import React from "react";
import "./SideNavbar.scss";
import HouseIcon from "../../img/fi_home.svg";
import TruckIcon from "../../img/fi_truck.svg";

export const SideNavbar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <div className="logo-image"></div>
      </div>
      <SideNavbarItem icon={HouseIcon} text={"Dashboard"} />
      <SideNavbarItem icon={TruckIcon} text={"Cars"} />
    </div>
  );
};

const SideNavbarItem = ({ icon, text, status }) => {
  return (
    <button className={status ? "sidebar-item active" : "sidebar-item"}>
      <img src={icon} alt="House" />
      <span className={"button-text"}>{text}</span>
    </button>
  );
};
