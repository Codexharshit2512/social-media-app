import React, { useState, useEffect } from "react";
import ProfilePicButton from "./ProfilePicButton";
import UserImageLoader from "./UserImageLoader";
import ProfilePicInput from "./ProfilePicInput";
import { connect } from "react-redux";

const UserImage = (props) => {
  const [profilePic, setProfilePic] = useState(null);
  const [profilePicModalOpen, setOpen] = useState(false);
  const open = () => setOpen(true);
  const close = () => setOpen(false);

  useEffect(() => {
    setProfilePic(props.selectedUserPic);
  }, [props.selectedUserPic]);

  return (
    <>
      <div className="user_image_outer_container">
        <div className="user_image_inner_container">
          <div className="user_image">
            <img
              src={profilePic}
              onClick={() =>
                props.user.username == props.selectedUser.username
                  ? open()
                  : null
              }
              alt=""
            />
            {props.loading ? <UserImageLoader loading={true} /> : null}
          </div>
          {/* <ProfilePicButton /> */}
        </div>
      </div>
      <ProfilePicInput close={close} open={profilePicModalOpen} />
    </>
  );
};

const mapStateToProps = (state) => ({
  selectedUserPic: state.selectedUser.profilePic,
  loading: state.loaders.profilePicUploading,
  user: state.auth.user,
  selectedUser: state.selectedUser.info,
});

export default connect(mapStateToProps)(UserImage);
