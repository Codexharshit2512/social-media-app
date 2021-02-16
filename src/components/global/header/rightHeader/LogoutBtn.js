import React from "react";
import { useDispatch } from "react-redux";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";

const LogoutBtn = () => {
  const dispatch = useDispatch();

  const logout = () => dispatch({ type: "USER_LOGOUT" });

  return (
    <div className="logout_btn" onClick={logout}>
      <span className="logout_icon">
        <ExitToAppRoundedIcon />
      </span>
      <p className="logout_text">Log Out</p>
    </div>
  );
};

export default LogoutBtn;
