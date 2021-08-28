import React, {Component} from "react";
import {Container, Row, Col, Card, Button, Badge} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeCard from "./HomeCard";
import Player from "./Player";
import {connect} from "react-redux";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  addTask: (arrayList) =>
    dispatch({
      type: "ADD_TO_HOME",
      payload: arrayList,
    }),

  addPlayer: (music) =>
    dispatch({
      type: "ADD_TO_PLAYER",
      payload: music,
    }),
});

class Home extends Component {
  state = {
    search: this.props.text,
    player: null,
  };

  componentDidMount() {
    let res = fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/search?q=${this.state.search}`
    )
      .then((data) => data.json())
      .then((file) => {
        console.log(file);
        this.props.addTask(file);
      });
  }

  // will recieve the whole state as a prop from the redux store;
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchText !== this.props.searchText) {
      let res = fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${this.props.searchText}`
      )
        .then((data) => data.json())
        .then((file) => {
          console.log(file);
          this.props.addTask(file);
        });
    }
  }

  render() {
    return (
      <Container fluid>
        <div className="sticky-top">
          {this.props.player ? (
            <Player music={this.props.player} />
          ) : (
            <div>No Song selected</div>
          )}
        </div>
        <Container>
          {this.props.homeMusic ? (
            <Row>
              {this.props.homeMusic.data.map((music) => (
                <HomeCard music={music} key={music.id} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
