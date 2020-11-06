import React, { useState } from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";
import NotificationsList from "./NotificationsList";

const NotificationsContainer = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="notifications_container">
      <div className="notification_link">
        <span onClick={() => setOpen((open) => !open)}>
          <NotificationsIcon />
        </span>
      </div>
      {open ? <NotificationsList /> : null}
    </div>
  );
};

export default NotificationsContainer;
