import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { signInUser } from "../../redux/actionsCreators/authActions";
import monkey from "../../images/monkey.svg";

export class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
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
    this.props.dispatch(signInUser(this.state));
  };

  //   componentDidUpdate() {
  //     console.log(this.state);
  //   }

  render() {
    const { errors } = this.props;
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
              value={this.state.email}
              onChange={this.handleChange}
              name="email"
            />
            <div
              className="error_field"
              style={{ fontSize: "13px", color: "red", marginTop: "5px" }}
            >
              {errors.email ? errors.email : null}
            </div>
          </div>

          <div className="form-block">
            <TextField
              label={"Password"}
              value={this.state.password}
              onChange={this.handleChange}
              name="password"
            />
            <div
              className="error_field"
              style={{ fontSize: "13px", color: "red", marginTop: "5px" }}
            >
              {errors.password ? errors.password : null}
            </div>
          </div>

          <div className="login-submit-btn">
            <button type="submit">Sign In</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  errors: state.validation.signInErrors,
});

export default connect(mapStateToProps, null)(LoginForm);
