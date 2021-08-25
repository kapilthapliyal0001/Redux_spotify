import React, {Component} from "react";
import {Container, Row} from "react-bootstrap";

export default class Album extends Component {
  state = {
    album: [],
    search: "queen",
  };

  componentDidMount() {
    let res = fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/search?q=${this.state.search}`
    )
      .then((data) => data.json())
      .then((file) => {
        console.log(file);
      });
  }

  render() {
    return (
      <>
        <Container fluid>
          <Row>I am here</Row>
        </Container>
      </>
    );
  }
}
