import React from "react";
import manan from "../../../../images/manan.png";
import Notification from "./Notification";

const NotificationsList = () => {
  return (
    <div className="notifications_list_container">
      <h2>Notifications</h2>
      <ul className="notifications_list">
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
      </ul>
    </div>
  );
};

export default NotificationsList;
