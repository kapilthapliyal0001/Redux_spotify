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
import Album from "./components/Album";

export default class App extends Component {
  state = {
    search: "queen",
  };

  render() {
    return (
      <Router>
        <Container fluid>
          <Row>
            <Col>
              <Link to="/">
                <NavBar
                  seachQuery={this.state.search}
                  submit={(props) => {
                    this.setState({search: props});
                  }}
                />
              </Link>
            </Col>
            {/* <CartIndicatore /> */}
          </Row>
          {/* <Route exact path="/basic" component={HomePage} /> */}
          <Route path="/" exact component={Album} />
          {/* <Route path="/cart" exact component={Cart} /> */}
        </Container>
      </Router>
    );
  }
}
