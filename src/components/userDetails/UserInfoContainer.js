import React from "react";
import UserImage from "./UserImage";
import UserInfo from "./UserInfo";

const UserInfoContainer = () => {
  return (
    <div className="user_detail_info_container">
      <UserImage />
      <UserInfo />
    </div>
  );
};

export default UserInfoContainer;
