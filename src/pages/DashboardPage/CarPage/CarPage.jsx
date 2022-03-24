import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { ListCarItem } from "../../../assets/components/ListCarItem/ListCarItem";
import { SectionNavigation } from "../../../assets/components/SectionNavigation/SectionNavigation";
import CarImage from "../../../assets/img/car-image.png";
import { ReactComponent as PlusIcon } from "../../../assets/img/fi_plus.svg";
import DummyData from "../../../dummydata";
import "./CarPage.scss";

export const CarPage = () => {
  const [carDatas, setCarDatas] = useState(() => {
    return DummyData;
  });

  return (
    <div className="list-car-section">
      <SectionNavigation
        sections={[
          { name: "Cars", link: "/dashboard/car" },
          { name: "List Car" },
        ]}
      />
      <div className="group-1">
        <h3 className="section-title">List Car</h3>
        <Button variant="primary">
          <PlusIcon />
          Add New Car
        </Button>
      </div>
      <div className="category-group">
        <Button variant="outline-primary" active>
          All
        </Button>
        <Button variant="outline-primary">Small</Button>
        <Button variant="outline-primary">Medium</Button>
        <Button variant="outline-primary">Large</Button>
      </div>
      <div className="list-car-group">
        {carDatas.map((item) => {
          return (
            <ListCarItem
              key={item.id}
              image={CarImage}
              name={item.name}
              type={item.type}
              price={item.price}
              start={item.start}
              finish={item.finish}
              lastUpdate={item.lastUpdate}
            />
          );
        })}
      </div>
    </div>
  );
};
