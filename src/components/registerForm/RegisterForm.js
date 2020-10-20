import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { submitSignUp } from "../../auth/auth";
import monkey from "../../images/monkey.svg";

export class RegisterForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      handle: "",
      password: "",
      confirmPassword: "",
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
    console.log(submitSignUp({ ...this.state }));
  };

  //   componentDidUpdate() {
  //     console.log(this.state);
  //   }

  render() {
    return (
      <div className="register-form-container">
        <div className="register-form-heading-container">
          <div className="logo">
            <img src={monkey} alt="monekey logo from flaticon" />
          </div>
          <h2>Sign Up</h2>
        </div>
        <form id="register-form" onSubmit={this.handleSubmit}>
          <div className="form-block">
            <TextField
              label={"Email"}
              value={this.state.email}
              onChange={this.handleChange}
              name="email"
            />
          </div>
          <div className="form-block">
            <TextField
              label={"Handle"}
              value={this.state.handle}
              onChange={this.handleChange}
              name="handle"
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
          <div className="form-block">
            <TextField
              label={"Confirm Password"}
              value={this.state.passwordConfirm}
              onChange={this.handleChange}
              name="confirmPassword"
            />
          </div>
          <div className="register-submit-btn">
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
