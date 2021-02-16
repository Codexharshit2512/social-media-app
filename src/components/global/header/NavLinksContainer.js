import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import NotificationsContainer from "./notifications/NotificationsContainer";
import { useHistory } from "react-router-dom";

const NavLinksContainer = (props) => {
  const history = useHistory();

  const [active, setActive] = useState(null);

  const uid = useSelector((state) => state.auth.user.uid);

  useEffect(() => {
    setActive(props.history.location.pathname);
  }, [props]);

  const handleClick = (path) => {
    if (path == "/") {
      if (history.location.pathname !== path) {
        history.push(path);
        setActive("/");
      }
    } else if (path == `/user/${uid}`) {
      if (history.location.pathname !== path) {
        history.push(path);
        setActive(`/user/${uid}`);
      }
    }
  };

  return (
    <div className="nav_links_container">
      <div className="nav_link_item">
        <div
          className={active == "/" ? "nav_icon nav_active" : "nav_icon"}
          onClick={() => handleClick("/")}
        >
          <HomeRoundedIcon />
        </div>
      </div>
      <div className="nav_link_item">
        <div
          className={
            active == `/user/${uid}` ? "nav_icon nav_active" : "nav_icon"
          }
          onClick={() => handleClick(`/user/${uid}`)}
        >
          <AccountCircleIcon />
        </div>
      </div>
      <div className="nav_link_item">
        <NotificationsContainer />
      </div>
    </div>
  );
};

export default withRouter(NavLinksContainer);
