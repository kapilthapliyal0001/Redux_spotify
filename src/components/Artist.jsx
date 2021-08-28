import React, {Component} from "react";
import {Card, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {connect} from "react-redux";

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  addToArtistList: (arrayList) =>
    dispatch({
      type: "ADD_TO_ARTIST",
      payload: arrayList,
    }),
});

class Artist extends Component {
  componentDidMount() {
    let res = fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/artist/${this.props.match.params.artistId}`
    )
      .then((data) => data.json())
      .then((file) => {
        console.log(file);
        this.props.addToArtistList(file);
      });
  }
  render() {
    return (
      <div className="d-flex justify-content-center">
        {this.props.artistMusic ? (
          <Card style={{width: "18rem"}}>
            <Card.Img variant="top" src={this.props.artistMusic.picture_big} />
            <Card.Body className="text-center">
              <Card.Title>{this.props.artistMusic.name}</Card.Title>
            </Card.Body>
          </Card>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Artist);
