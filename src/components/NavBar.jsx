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
import {connect} from "react-redux";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  addToSearch: (text) =>
    dispatch({
      type: "ADD_TO_SEARCH_TEXT",
      payload: text,
    }),
});

class NavBar extends Component {
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
              this.props.addToSearch(this.state.text);
            }}
          >
            Search
          </Button>
        </Form>
      </Navbar>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
