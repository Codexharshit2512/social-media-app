import React, { useState, useEffect } from "react";
import ProfileImageInput from "./ProfileImageInput";
import manan from "../../images/manan.png";

const UserImage = () => {
  const [profilePic, setProfilePic] = useState(manan);

  return (
    <div className="user_image_outer_container">
      <div className="user_image_inner_container">
        <div className="user_image">
          <img src={profilePic} alt="" />
        </div>
        <div className="change_pic_btn">
          <button type="button">Change Profile Pic</button>
        </div>
      </div>
    </div>
  );
};

export default UserImage;
