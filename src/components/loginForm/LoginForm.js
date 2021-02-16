import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signInUser } from "../../redux/actionsCreators/authActions";
import CircularProgress from "@material-ui/core/CircularProgress";
import monkey from "../../images/monkey.svg";
// import Visibility from "@material-ui/icons/Visibility";
// import VisibilityOff from "@material-ui/icons/VisibilityOff";
// import IconButton from "@material-ui/core/IconButton";
// import InputAdornment from "@material-ui/core/InputAdornment";
// import Input from "@material-ui/core/Input";
// import InputLabel from "@material-ui/core/InputLabel";

// const styles={

// }
// const inputStyle = { WebkitBoxShadow: "0 0 0 1000px #15202b inset" };

export class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      // showPassword: false,
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
    this.props.dispatch(
      signInUser({ email: this.state.email, password: this.state.password })
    );
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
              // inputProps={{ style: inputStyle }}
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
              type="password"
              // inputProps={{ style: inputStyle }}
            />
            {/* <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={this.state.showPassword ? "text" : "password"}
              value={this.state.password}
              onChange={this.handleChange}
              name="password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() =>
                      this.setState({ showPassword: !this.state.showPassword })
                    }
                    // onMouseDown={handleMouseDownPassword}
                  >
                    {this.state.showPassword ? (
                      <Visibility />
                    ) : (
                      <VisibilityOff />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            /> */}
            <div
              className="error_field"
              style={{ fontSize: "13px", color: "red", marginTop: "5px" }}
            >
              {errors.password ? errors.password : null}
            </div>
          </div>

          <div className="login-submit-btn">
            <button type="submit">
              {this.props.loading ? <CircularProgress /> : "Sign In"}
            </button>
          </div>
        </form>
        <div className="link_text">
          <p>
            Don't have an account?
            <Link to="/signUp">
              {" "}
              <span>Sign Up</span>
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  errors: state.validation.signInErrors,
  loading: state.loaders.validatingCreds,
});

export default connect(mapStateToProps, null)(LoginForm);
