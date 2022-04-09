import React, { Fragment, useState } from "react";
import { Button } from "react-bootstrap";
import { DeleteCard } from "../../../assets/components/DeleteCard/DeleteCard";
import { ListCarItem } from "../../../assets/components/ListCarItem/ListCarItem";
import { SecondarySidebar } from "../../../assets/components/SecondarySidebar/SecondarySidebar";
import { SectionNavigation } from "../../../assets/components/SectionNavigation/SectionNavigation";
import CarImage from "../../../assets/img/car-image.png";
import { ReactComponent as PlusIcon } from "../../../assets/img/fi_plus.svg";
import CarData from "../../../car-data.json";
import "./CarPage.scss";
import "./AddNewCarPage.scss";
import { NotificationCard } from "../../../assets/components/NotificationCard/NotificationCard";

export const CarPage = () => {
  const [pageState, setPageState] = useState("list-car");
  const [deleteItem, setDeleteItem] = useState(false);
  const [notif, setNotif] = useState({ show: false, type: "", message: "" });
  const [carFilter, setCarFilter] = useState("all");
  const carDatas = CarData;

  const handleCarFilter = (category) => {
    setCarFilter(category);
  };

  const getCarShowed = () => {
    switch (carFilter) {
      case "all":
        return carDatas;
      case "small":
        return carDatas.filter((value) => {
          return value.category === "Small";
        });
      case "medium":
        return carDatas.filter((value) => {
          return value.category === "Medium";
        });
      case "large":
        return carDatas.filter((value) => {
          return value.category === "Large";
        });
      default:
        break;
    }
  };

  const handleShowDeleteAlert = () => {
    setDeleteItem(true);
  };

  const handleUnshowDeleteAlert = () => {
    setDeleteItem(false);
  };

  const handleDeleteItem = () => {
    handleUnshowDeleteAlert();
    handleShowNotification("black", "Data Berhasil Dihapus");
  };

  const handleToAddnewCar = () => {
    setPageState("add-new-car");
  };

  const handleToListCar = () => {
    setPageState("list-car");
    setCarFilter("all");
  };

  const handleShowNotification = (type, message) => {
    setPageState("list-car");
    setNotif({
      show: true,
      type: type,
      message: message,
    });

    setTimeout(() => {
      setNotif({
        show: false,
        type: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <Fragment>
      <SecondarySidebar
        titlePage={"CARS"}
        items={[{ label: "List Car", active: true }]}
      />

      {/* LIST CAR */}
      {notif.show ? (
        <NotificationCard type={notif.type} text={notif.message} />
      ) : null}
      {pageState === "list-car" ? (
        <Fragment>
          {deleteItem ? (
            <DeleteCard
              onCancel={handleUnshowDeleteAlert}
              onAccept={handleDeleteItem}
            />
          ) : null}
          <div className="list-car-section">
            <SectionNavigation
              sections={[
                { name: "Cars", link: "/dashboard/car" },
                { name: "List Car" },
              ]}
            />
            <div className="group-1">
              <h3 className="section-title">List Car</h3>
              <Button variant="primary" onClick={handleToAddnewCar}>
                <PlusIcon />
                Add New Car
              </Button>
            </div>
            <div className="category-group">
              <Button
                variant="outline-primary"
                onClick={() => handleCarFilter("all")}
                active={carFilter === "all"}
              >
                All
              </Button>
              <Button
                variant="outline-primary"
                onClick={() => handleCarFilter("small")}
                active={carFilter === "small"}
              >
                Small
              </Button>
              <Button
                variant="outline-primary"
                onClick={() => handleCarFilter("medium")}
                active={carFilter === "medium"}
              >
                Medium
              </Button>
              <Button
                variant="outline-primary"
                onClick={() => handleCarFilter("large")}
                active={carFilter === "large"}
              >
                Large
              </Button>
            </div>
            <div className="list-car-group">
              {getCarShowed().map((item) => {
                return (
                  <ListCarItem
                    key={item.id}
                    image={CarImage}
                    name={item.name}
                    type={item.category}
                    price={item.price}
                    start={item.startRent}
                    finish={item.finishRent}
                    lastUpdate={item.updateAt}
                    onDelete={handleShowDeleteAlert}
                    onEdit={handleToAddnewCar}
                  />
                );
              })}
            </div>
          </div>
        </Fragment>
      ) : null}

      {/* ADD NEW CAR */}
      {pageState === "add-new-car" ? (
        <Fragment>
          <div className="add-new-car-page">
            <SectionNavigation
              sections={[
                { name: "Cars", link: "/dashboard/car" },
                { name: "List Car", link: "/dashboard/car" },
                { name: "Add New Car" },
              ]}
            />
            <h3 className="section-title">Add New Car</h3>
            <form className="form-new-car">
              <div className="form-group">
                <label htmlFor="formName">Nama</label>
                <input
                  type="text"
                  name="name"
                  id="formName"
                  className="form-control input-field"
                  placeholder="Input Nama Mobil..."
                />
              </div>
              <div className="form-group">
                <label htmlFor="formPrice">Harga</label>
                <input
                  type="number"
                  name="name"
                  id="formPrice"
                  className="form-control input-field"
                  placeholder="Input Harga Mobil..."
                />
              </div>
              <div className="form-group">
                <label htmlFor="formPhoto">Foto</label>
                <input
                  type="file"
                  name="name"
                  id="formPrice"
                  className="form-control input-field"
                />
              </div>
              <div className="form-group">
                <label>Start Rent</label>
                <span className="input-field">-</span>
              </div>
              <div className="form-group">
                <label>Finish Rent</label>
                <span className="input-field">-</span>
              </div>
              <div className="form-group">
                <label>Created at</label>
                <span className="input-field">-</span>
              </div>
              <div className="form-group">
                <label>Updated At</label>
                <span className="input-field">-</span>
              </div>
            </form>
            <div className="button-group">
              <Button variant="outline-primary" onClick={handleToListCar}>
                Cancel
              </Button>
              <Button
                variant="primary"
                onClick={() =>
                  handleShowNotification("success", "Data Berhasil Disimpan")
                }
              >
                Save
              </Button>
            </div>
          </div>
        </Fragment>
      ) : null}
    </Fragment>
  );
};
