import React from "react";
import "./SecondarySidebar.scss";

export const SecondarySidebar = ({ titlePage, items }) => {
  return (
    <div className="secondary-sidebar">
      <h3 className="title-page">{titlePage}</h3>
      <div className="item-group">
        {items.map((item) => {
          return (
            <button key={item} className="button-sidebar">
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};
