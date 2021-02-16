import React, { useState } from "react";
import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";
import LogoutContainer from "./LogoutContainer";

const RightHeaderPart = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="right_header_container">
      <div className="toggle_user_info">
        <span
          onClick={() => setOpen((prev) => !prev)}
          className={open ? "toggle_icon icon_active" : "toggle_icon"}
        >
          <ArrowDropDownRoundedIcon />
        </span>
        {open ? <LogoutContainer /> : null}
      </div>
    </div>
  );
};

export default RightHeaderPart;
