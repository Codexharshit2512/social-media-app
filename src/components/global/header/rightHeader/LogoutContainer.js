import React from "react";
import HeaderUserInfo from "./HeaderUserInfo";
import LogoutBtn from "./LogoutBtn";

const LogoutContainer = () => {
  return (
    <div className="logout_container">
      <HeaderUserInfo />
      <LogoutBtn />
    </div>
  );
};

export default LogoutContainer;
