import React from "react";
import { connect } from "react-redux";
import {
  changeUserProfilePic,
  removeUserPic,
} from "../../../redux/actionsCreators/userDetailActions";

const ProfilePicInputModal = (props) => {
  const handleSubmit = (e) => {
    const img = e.target.files[0];
    props.changePic(img);
    props.close();
  };

  const handleRemove = () => {
    props.close();
    props.removePic();
  };

  return (
    <div className="profile_pic_input_modal_container">
      <h2>Change Profile Photo</h2>
      <div className="change_profile_pic_input">
        <label
          style={{ color: "royalblue", cursor: "pointer" }}
          htmlFor="profile_pic_input"
        >
          Change Profile Pic
        </label>
        <input
          onChange={handleSubmit}
          type="file"
          id="profile_pic_input"
          hidden
        />
      </div>
      {props.isProfilePic ? (
        <div
          onClick={handleRemove}
          style={{ color: "red" }}
          className="remove_profile_pic_btn"
        >
          <p>Remove Profile Pic</p>
        </div>
      ) : null}
      <div className="close_profile_input_modal" onClick={props.close}>
        <p>Cancel</p>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  changePic: (img) => dispatch(changeUserProfilePic(img)),
  removePic: () => dispatch(removeUserPic()),
});

const mapStateToProps = (state) => ({
  isProfilePic: state.selectedUser.isProfilePic,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePicInputModal);
