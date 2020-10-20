import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { submitSignUp } from "../../auth/auth";
import monkey from "../../images/monkey.svg";

export class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
  }

  handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState((state) => {
      return { [name]: value };
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(submitSignUp({ ...this.state }));
    console.log(this.state);
  };

  //   componentDidUpdate() {
  //     console.log(this.state);
  //   }

  render() {
    return (
      <div className="login-form-container">
        <div className="login-form-heading-container">
          <div className="logo">
            <img
              src={monkey}
              alt="monekey logo from flaticon"
              width="50px"
              height="38px"
            />
          </div>
          <h2>Sign In</h2>
        </div>
        <form id="login-form" onSubmit={this.handleSubmit}>
          <div className="form-block">
            <TextField
              label={"Email"}
              value={this.state.username}
              onChange={this.handleChange}
              name="username"
            />
          </div>

          <div className="form-block">
            <TextField
              label={"Password"}
              value={this.state.password}
              onChange={this.handleChange}
              name="password"
            />
          </div>

          <div className="login-submit-btn">
            <button type="submit">Sign In</button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
