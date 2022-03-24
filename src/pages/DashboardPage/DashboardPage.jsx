import React, { Component } from "react";
import { useParams } from "react-router-dom";
import { NavbarDefault } from "../../assets/components/Navbar/NavbarDefault";
import { SecondarySidebar } from "../../assets/components/SecondarySidebar/SecondarySidebar";
import { SideNavbar } from "../../assets/components/SideNavbar/SideNavbar";
import { CarPage } from "./CarPage/CarPage";
import "./DashboardPage.scss";

export const DashboardPage = () => {
  let param = useParams();

  return (
    <div className="dashboard-page">
      <NavbarDefault />
      <SecondarySidebar titlePage={"DASHBOARD"} items={["Dashboard", "Cars"]} />
      <div className="main-content">
        {param.first === "car" ? <CarPage /> : ""}
      </div>
      <SideNavbar />
    </div>
  );
};
