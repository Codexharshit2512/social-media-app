import React from "react";
import { useSelector } from "react-redux";
import manan from "../../../../images/manan.png";

const HeaderUserInfo = () => {
  const { username, photo } = useSelector((state) => state.auth.user);

  return (
    <div className="header_user_info">
      <div className="user_image">
        <img src={manan} alt="" />
      </div>
      <div className="user_name">
        <p className="user_name_text">{username}</p>
        <p>See your profile</p>
      </div>
    </div>
  );
};

export default HeaderUserInfo;
