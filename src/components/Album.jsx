import React, {Component} from "react";
import {Card, Button, Col, Container, Row, Image} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Album extends Component {
  state = {
    Array: null,
  };

  componentDidMount() {
    let res = fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/album/${this.props.match.params.albumId}`
    )
      .then((data) => data.json())
      .then((file) => {
        this.setState({
          Array: file,
        });
        console.log(file.title);
        console.log(file);
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
        {this.state.Array ? (
          <div>
            {/* <h3>{this.state.Array.title}</h3> */}
            <div className="d-flex justify-content-center">
              <Card style={{width: "18rem"}} className="mt-2">
                <Card.Img variant="top" src={this.state.Array.cover_big} />
                <Card.Body>
                  <Card.Title>{this.state.Array.title}</Card.Title>
                  {/* <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text> */}
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            </div>
            <Container className="songs m-2">
              <Row>
                {this.state.Array.tracks.data.map((music) => (
                  <Col className="m-3">
                    <Card style={{width: "18rem"}} style={{width: "12rem"}}>
                      <Image
                        className=""
                        variant="top"
                        src={this.state.Array.cover_big}
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
