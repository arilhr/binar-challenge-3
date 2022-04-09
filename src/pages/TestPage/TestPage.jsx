import React, { Component } from "react";
import { NotificationCard } from "../../assets/components/NotificationCard/NotificationCard";

export default class TestPage extends Component {
  render() {
    return (
      <div>
        <NotificationCard type="success" text={"Data Berhasil Disimpan"} />
      </div>
    );
  }
}
