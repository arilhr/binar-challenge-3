import React, { Fragment } from "react";
import { PageList } from "../../../assets/components/PageList/PageList";
import { SecondarySidebar } from "../../../assets/components/SecondarySidebar/SecondarySidebar";
import { SectionNavigation } from "../../../assets/components/SectionNavigation/SectionNavigation";
import UserData from "../../../user-data.json";
import CarData from "../../../car-data.json";
import "./DashboardMainPage.scss";

export const DashboardMainPage = () => {
  return (
    <Fragment>
      <SecondarySidebar
        titlePage={"DASHBOARD"}
        items={[{ label: "Dashboard", active: true }]}
      />
      <div className="dashboard-main">
        <SectionNavigation
          sections={[
            { name: "Dashboard", link: "/dashboard" },
            { name: "Dashboard" },
          ]}
        />
        <h3 className="section-title">Dashboard</h3>
        <PageList
          title={"List Order"}
          header={[
            "User Email",
            "Car",
            "Start Rent",
            "Finish Rent",
            "Price",
            "Status",
          ]}
          keys={["email", "car", "startRent", "finishRent", "price", "status"]}
          datas={UserData}
        />
        <PageList
          title={"List Car"}
          header={[
            "Name",
            "Category",
            "Price",
            "Start Rent",
            "Finish Rent",
            "Updated at",
          ]}
          keys={["name", "category", "price", "startRent", "finishRent", "updateAt"]}
          datas={CarData}
        />
      </div>
    </Fragment>
  );
};
