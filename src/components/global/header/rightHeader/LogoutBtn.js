import React from "react";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";

const LogoutBtn = () => {
  return (
    <div className="logout_btn">
      <span className="logout_icon">
        <ExitToAppRoundedIcon />
      </span>
      <p className="logout_text">Log Out</p>
    </div>
  );
};

export default LogoutBtn;
