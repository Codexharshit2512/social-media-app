import React, { useState, useEffect } from "react";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import firebase from "../../config/config";

const ProfileImageInput = (props) => {
  const [profileImg, setProfileImg] = useState(null);

  useEffect(() => {
    if (profileImg) {
      let storageRef = firebase
        .storage()
        .child(`/userProfilePics/${new Date().getTime() + profileImg.name}`);

      storageRef
        .put(profileImg)
        .then((snapshot) => {
          snapshot.ref.getDownloadURL().then((url) => props.changeProfile(url));
        })
        .catch((err) => console.log(err));
    }
  }, [profileImg]);

  return (
    <div className="profile_img_input_container">
      <input
        onChange={(e) => setProfileImg(e.target.files[0])}
        type="file"
        name="profileImgInput"
        id="profile_img_input"
        hidden
      />
      <label htmlFor="profile_img_input">
        <CameraAltIcon color="primary" />
      </label>
    </div>
  );
};

export default ProfileImageInput;
