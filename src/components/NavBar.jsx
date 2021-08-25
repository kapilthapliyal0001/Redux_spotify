import React, {Component} from "react";
import {
  NavLink,
  Navbar,
  Form,
  Button,
  Nav,
  NavDropdown,
  FormControl,
} from "react-bootstrap";

export default class NavBar extends Component {
  state = {
    text: this.props.searchQuery,
  };
  render() {
    return (
      <Navbar
        bg="light"
        expand="lg"
        className="px-2 d-flex justify-content-between"
      >
        <h3>Spotify</h3>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
            value={this.state.text}
            onChange={(e) => this.setState({text: e.target.value})}
          />
          <Button
            variant="outline-success"
            className="px-1"
            onClick={() => {
              this.props.submit(this.state.text);
            }}
          >
            Search
          </Button>
        </Form>
      </Navbar>
    );
  }
}
