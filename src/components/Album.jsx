import React, {Component} from "react";
import {Card, Button, Col, Container, Row, Image} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {connect} from "react-redux";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  addToAlbum: (arrayList) =>
    dispatch({
      type: "ADD_TO_ALBUM",
      payload: arrayList,
    }),
});

class Album extends Component {
  componentDidMount() {
    let res = fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/album/${this.props.match.params.albumId}`
    )
      .then((data) => data.json())
      .then((file) => {
        console.log(file.title);
        console.log(file);
        this.props.addToAlbum(file);
        return file;
      })
      .then((check) => {
        console.log(check.tracks.data[0], "This is the data");
      });
  }

  render() {
    return (
      <div className="text-center">
        <h2>{this.props.match.params.albumId}</h2>
        {this.props.albumMusic ? (
          <div>
            <div className="d-flex justify-content-center">
              <Card style={{width: "18rem"}} className="mt-2">
                <Card.Img variant="top" src={this.props.albumMusic.cover_big} />
                <Card.Body>
                  <Card.Title>{this.props.albumMusic.title}</Card.Title>
                </Card.Body>
              </Card>
            </div>
            <Container className="songs m-2">
              <Row>
                {this.props.albumMusic.tracks.data.map((music) => (
                  <Col className="m-3" key={music.id}>
                    <Card style={{width: "18rem"}} style={{width: "12rem"}}>
                      <Image
                        className=""
                        variant="top"
                        src={this.props.albumMusic.cover_big}
                        roundedCircle
                      />
                      <Card.Body>
                        <Card.Title>{music.title}</Card.Title>
                        <Card.Text
                          onClick={() =>
                            this.props.history.push(
                              "/artist/" + music.artist.id
                            )
                          }
                        >
                          {music.artist.name}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          </div>
        ) : (
          <div> Is Loading</div>
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Album);
