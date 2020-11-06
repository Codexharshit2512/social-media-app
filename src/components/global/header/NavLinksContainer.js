import React from "react";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import TheatersRoundedIcon from "@material-ui/icons/TheatersRounded";

import NotificationsContainer from "./notifications/NotificationsContainer";
import { useHistory } from "react-router-dom";

const NavLinksContainer = () => {
  const history = useHistory();
  return (
    <div className="nav_links_container">
      <div className="nav_link_item">
        <div
          className={
            history.location.pathname == "/"
              ? "nav_icon nav_active"
              : "nav_icon"
          }
        >
          <HomeRoundedIcon />
        </div>
      </div>
      <div className="nav_link_item">
        <div
          className={
            history.location.pathname == "/videos"
              ? "nav_icon nav_active"
              : "nav_icon"
          }
        >
          <TheatersRoundedIcon />
        </div>
      </div>
      <div className="nav_link_item">
        <NotificationsContainer />
      </div>
      {/* <div className="nav_link_item">
        <span>LOGIN</span>
      </div>
      <div className="nav_link_item">
        <span>SIGNUP</span>
      </div> */}
    </div>
  );
};

export default NavLinksContainer;
