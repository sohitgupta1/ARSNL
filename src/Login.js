import React, { Component } from "react";
import { RouteURL } from "./helper/constant";
var email_regex = /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i;
class AppRouting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  getValidate = () => {
    let st = true;
    if (this.state.email.length > 0 && !email_regex.test(this.state.email)) {
      alert("Please enter valid email");
      st = false;
    }
    if (this.state.password.length <= 0) {
      alert("Please enter password");
      st = false;
    }
    return st;
  };

  getLogin = () => {
    if (this.getValidate()) {
      console.log(this.props, "Props");
      localStorage.setItem("access", true);
      this.props.history.push({
        pathname: RouteURL.CONTACT_FORM,
        state: { email: this.state.email, password: this.state.password },
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="box">
          <h1>Login</h1>
          <input
            type="email"
            name="email"
            className="email"
            placeholder="Enter Email"
            onChange={(e) => {
              this.setState({
                email: e.target.value,
              });
            }}
          />
          <input
            type="password"
            name="password"
            className="email"
            placeholder="Enter Password"
            onChange={(e) => {
              this.setState({
                password: e.target.value,
              });
            }}
          />
          <button className="btn" onClick={() => this.getLogin()}>
            Login
          </button>
        </div>{" "}
      </React.Fragment>
    );
  }
}

export default AppRouting;
