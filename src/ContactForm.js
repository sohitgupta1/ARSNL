import React, { Component } from "react";
import { RouteURL } from "./helper/constant";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  componentDidMount() {
    this.setState({
      email: this.props.location.state.email,
      password: this.props.location.state.password,
    });
  }

  getSent = () => {
    alert("Thank You");
  };

  getNote = () => {
    this.props.history.push({
      pathname: RouteURL.NOTE,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="box">
          <h1>Contact</h1>
          <input
            type="text"
            name="email"
            className="email"
            value={this.state.email}
            disabled={true}
          />
          <input
            type="text"
            name="password"
            className="email"
            value={this.state.password}
            disabled={true}
          />
          <button className="btn" onClick={() => this.getSent()}>
            Sent
          </button>
          <button className="btn" onClick={() => this.getNote()}>
            ADD NOTE
          </button>
        </div>{" "}
      </React.Fragment>
    );
  }
}

export default Contact;
