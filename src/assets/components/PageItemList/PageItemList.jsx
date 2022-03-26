import React from "react";
import "./PageItemList.scss";

export const PageItemList = ({ number, keys, datas }) => {
  return (
    <tr>
      <td>{number}</td>
      {keys.map((key) => {
        return <td key={`${datas[key]}`}>{datas[key]}</td>;
      })}
    </tr>
  );
};
