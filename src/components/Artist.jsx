import React, {Component} from "react";
import {Card, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Artist extends Component {
  state = {
    Array: [],
  };

  componentDidMount() {
    let res = fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/artist/${this.props.match.params.artistId}`
    )
      .then((data) => data.json())
      .then((file) => {
        this.setState({
          Array: file,
        });
        console.log(file);
      });
  }
  render() {
    return (
      <div className="d-flex justify-content-center">
        <Card style={{width: "18rem"}}>
          <Card.Img variant="top" src={this.state.Array.picture_big} />
          <Card.Body className="text-center">
            <Card.Title>{this.state.Array.name}</Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
