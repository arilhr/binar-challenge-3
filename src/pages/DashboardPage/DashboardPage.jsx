import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { NavbarDefault } from "../../assets/components/Navbar/NavbarDefault";
import { SideNavbar } from "../../assets/components/SideNavbar/SideNavbar";
import { CarPage } from "./CarPage/CarPage";
import HouseIcon from "../../assets/img/fi_home.svg";
import TruckIcon from "../../assets/img/fi_truck.svg";
import "./DashboardPage.scss";
import { DashboardMainPage } from "./DashboardMainPage/DashboardMainPage";

export const DashboardPage = () => {
  const params = useParams();

  return (
    <div className="dashboard-page">
      <NavbarDefault />
      <div className="main-content">
        {params.first === undefined? <DashboardMainPage /> : null}
        {params.first === "car"? <CarPage /> : null}
      </div>
      <SideNavbar
        items={[
          { icon: HouseIcon, text: "Dashboard", link: "/dashboard" },
          { icon: TruckIcon, text: "Cars", link: "/dashboard/car" },
        ]}
        activeItem={params.first === undefined? 0 : 1}
      />
    </div>
  );
};
