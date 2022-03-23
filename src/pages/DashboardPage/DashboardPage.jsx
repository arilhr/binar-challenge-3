import React, { Component } from "react";
import { NavbarDefault } from "../../assets/components/Navbar/NavbarDefault";
import { SideNavbar } from "../../assets/components/SideNavbar/SideNavbar";
import "./DashboardPage.scss";

export default class DashboardPage extends Component {
  render() {
    return (
      <div className="dashboard-page">
        <NavbarDefault />
        <SideNavbar />
      </div>
    );
  }
}
