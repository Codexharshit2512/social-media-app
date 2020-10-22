import React from "react";

const UserInfo = () => {
  return (
    <div className="user_info_container">
      <div className="user_info_header">
        <div className="user_info_name">Harshit Jain</div>
        <div className="user_info_edit_profile_btn">
          <button type="button">Edit Profile</button>
        </div>
      </div>
      <div className="user_info_post_stats">
        <span className="user_info_post_count">10</span> posts
      </div>
      <div className="user_info_bio">
        <div className="user_info_location">
          <p>Delhi,India</p>
        </div>
        <div className="user_info_bio">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            nulla voluptates impedit eveniet omnis. Saepe iusto temporibus
            distinctio officiis perspiciatis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
