import React, { Component } from "react";
import { Container, Table } from "react-bootstrap";
import { ListCarItem } from "../../assets/components/ListCarItem/ListCarItem";
import { PageList } from "../../assets/components/PageList/PageList";
import CarImage from "../../assets/img/car-image.png";
import DummyData from "../../dummydata";

export default class TestPage extends Component {
  state = {
    datas: [],
  };

  componentDidMount() {
    this.setState({
      datas: DummyData,
    });
  }

  render() {
    return (
      <div>
        <Container className="d-flex justify-content-start pt-5 flex-wrap gap-5">
          {this.state.datas.map((item) => {
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
        </Container>
      </div>
    );
  }
}
