import React, { Component } from "react";
import { connect } from "react-redux";
import { signUpUser } from "../../redux/actionsCreators/authActions";
import TextField from "@material-ui/core/TextField";
import monkey from "../../images/monkey.svg";

export class RegisterForm extends Component {
  constructor(props) {
    super(props);
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
    const { email, handle, password, confirmPassword } = this.state;
    const user = { email, handle, password, confirmPassword };
    this.props.dispatch(signUpUser(user));
  };

  render() {
    const { errors } = this.props;
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
            <div
              className="error_field"
              style={{ fontSize: "13px", color: "red", marginTop: "5px" }}
            >
              {errors.email ? errors.email : null}
            </div>
          </div>
          <div className="form-block">
            <TextField
              label={"Handle"}
              value={this.state.handle}
              onChange={this.handleChange}
              name="handle"
            />
            <div
              className="error_field"
              style={{ fontSize: "13px", color: "red", marginTop: "5px" }}
            >
              {errors.handle ? errors.handle : null}
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
          <div className="form-block">
            <TextField
              label={"Confirm Password"}
              value={this.state.passwordConfirm}
              onChange={this.handleChange}
              name="confirmPassword"
            />
            <div
              className="error_field"
              style={{ fontSize: "13px", color: "red", marginTop: "5px" }}
            >
              {errors.confirmPassword ? errors.confirmPassword : null}
            </div>
          </div>
          <div className="register-submit-btn">
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  errors: state.validation.signUpErrors,
});

export default connect(mapStateToProps, null)(RegisterForm);
