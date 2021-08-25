import "./App.css";
import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Col,
  Container,
  Row,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Album from "./components/Album";
import Artist from "./components/Artist";

export default class App extends Component {
  state = {
    search: "queen",
  };

  render() {
    return (
      <Router>
        <Container fluid>
          <Link to="/">
            <NavBar
              seachQuery={this.state.search}
              submit={(props) => {
                this.setState({search: props});
              }}
            />
          </Link>
          <Route
            path="/"
            exact
            render={(props) => <Home text={this.state.search} {...props} />}
          />
          <Route path="/album/:albumId/" component={Album} />
          <Route path="/artist/:artistId/" component={Artist} />
        </Container>
      </Router>
    );
  }
}
