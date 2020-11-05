import React, { Component } from "react";
import CloseIcon from "@material-ui/icons/Close";
import { connect } from "react-redux";
import { editProfileInfo } from "../../../../redux/actionsCreators/userDetailActions";
import ProfileForm from "./ProfileForm";

class ProfileFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.info.username,
      location: this.props.info.location,
      bio: this.props.info.bio,
    };
  }

  handleChange = (e) => {
    const target = e.target.name;
    const value = e.target.value;
    if (target == "bio") {
      if (value.length <= 100) this.setState({ [target]: value });
    } else {
      this.setState({ [target]: value });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.edit({
      handle: this.state.username,
      location: this.state.location,
      bio: this.state.bio,
    });
    this.props.close();
  };

  render() {
    return (
      <div className="profile_form_container">
        <h2>Edit Your Profile</h2>
        <div className="close_modal_btn">
          <span onClick={this.props.close}>
            <CloseIcon />
          </span>
        </div>
        <ProfileForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          username={this.state.username}
          location={this.state.location}
          bio={this.state.bio}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  info: state.selectedUser.info,
});

const mapDispatchToProps = (dispatch) => ({
  edit: (info) => dispatch(editProfileInfo(info)),
});

// export default ProfileFormContainer;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileFormContainer);
