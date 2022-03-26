import React from "react";
import "./ProfileCard.scss";
import { ReactComponent as ArrowDownIcon } from "../../img/fi_arrow-down.svg";

export const ProfileCard = ({ profileImg, name }) => {
  return (
    <div className="profile-card">
      <div className="profile-image">
        <img src={profileImg} alt="Profile" />
      </div>
      <span className="profile-name">{name}</span>
      <button className="profile-button">{<ArrowDownIcon />}</button>
    </div>
  );
};
