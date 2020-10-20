import React, { useState, useEffect } from "react";
import ProfileImageInput from "./ProfileImageInput";
import manan from "../../images/manan.png";

const UserImage = () => {
  const [profilePic, setProfilePic] = useState(manan);

  return (
    <div className="user_detail_image_container">
      <div className="user_detail_image_inner">
        <div className="user_img_cover">
          <div className="user_img_profile">
            <img src={profilePic} alt="" />
            <ProfileImageInput changeProfile={(pic) => setProfilePic(pic)} />
          </div>
        </div>
        <div className="user_name">
          <h1>Harshit Jain</h1>
        </div>
      </div>
    </div>
  );
};

export default UserImage;
