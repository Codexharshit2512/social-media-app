import React, { useState, useEffect } from "react";
import ProfilePicButton from "./ProfilePicButton";
import UserImageLoader from "./UserImageLoader";
import { connect } from "react-redux";

const UserImage = (props) => {
  const [profilePic, setProfilePic] = useState(null);

  useEffect(() => {
    setProfilePic(props.selectedUserPic);
  }, [props.selectedUserPic]);

  return (
    <div className="user_image_outer_container">
      <div className="user_image_inner_container">
        <div className="user_image">
          <img src={profilePic} alt="" />
          {props.loading ? <UserImageLoader loading={true} /> : null}
        </div>
        <ProfilePicButton />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  selectedUserPic: state.selectedUser.profilePic,
  loading: state.loaders.profilePicUploading,
});

export default connect(mapStateToProps)(UserImage);
