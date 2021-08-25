import React, {Component} from "react";
import {Container, Row, Col, Card, Button, Badge} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeCard from "./HomeCard";

class Home extends Component {
  state = {
    album: null,
    search: this.props.text,
  };

  componentDidMount() {
    let res = fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/search?q=${this.state.search}`
    )
      .then((data) => data.json())
      .then((file) => {
        console.log(file);
        this.setState({album: file});
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.text !== this.props.text) {
      let res = fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${this.props.text}`
      )
        .then((data) => data.json())
        .then((file) => {
          console.log(file);
          this.setState({search: this.props.text});
          this.setState({album: file});
        });
    }
  }

  render() {
    return (
      <Container style={{backgroundColor: "black"}} fluid>
        <Container>
          {this.state.album ? (
            <Row>
              {this.state.album.data.map((music) => (
                <HomeCard music={music} />
              ))}
            </Row>
          ) : (
            <div>The array list is null here.</div>
          )}
        </Container>
      </Container>
    );
  }
}

export default Home;
