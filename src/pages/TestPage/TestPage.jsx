import React, { Component } from "react";
import { Container, Table } from "react-bootstrap";
import { DeleteCard } from "../../assets/components/DeleteCard/DeleteCard";
import { ListCarItem } from "../../assets/components/ListCarItem/ListCarItem";
import { NotificationCard } from "../../assets/components/NotificationCard/NotificationCard";
import { PageList } from "../../assets/components/PageList/PageList";
import { ProfileCard } from "../../assets/components/ProfileCard/ProfileCard";
import CarImage from "../../assets/img/car-image.png";
import DummyData from "../../dummydata";
import UserData from "../../user-data.json";

export default class TestPage extends Component {
  render() {
    return (
      <div>
        <NotificationCard type="success" text={"Data Berhasil Disimpan"} />
      </div>
    );
  }
}
