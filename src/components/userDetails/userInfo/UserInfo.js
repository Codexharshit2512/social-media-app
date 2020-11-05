import React, { useState } from "react";
import { connect } from "react-redux";
import EditProfileBtn from "./EditProfileBtn";

const UserInfo = (props) => {
  // const [profileModalOpen, setProfileModalOpen] = useState(false);
  console.log(props.user.username, props.selectedUserInfo.username);
  return (
    <div className="user_info_container">
      <div className="user_info_header">
        <div className="user_info_name">{props.selectedUserInfo.username}</div>
        {props.user.username == props.selectedUserInfo.username ? (
          <EditProfileBtn />
        ) : null}
      </div>
      <div className="user_info_post_stats">
        <span className="user_info_post_count">
          {props.selectedUserInfo.posts}
        </span>{" "}
        posts
      </div>
      <div className="user_info_bio">
        <div className="user_info_location">
          <p>{props.selectedUserInfo.location}</p>
        </div>
        <div className="user_info_bio">
          <p>{props.selectedUserInfo.bio}</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  selectedUserPic: state.selectedUser.profilePic,
  selectedUserInfo: state.selectedUser.info,
  user: state.auth.user,
});

export default connect(mapStateToProps, null)(UserInfo);
