import React from "react";

const NotificationCount = (props) => {
  return (
    <div className="notification_count_container">
      <span>{props.count}</span>
    </div>
  );
};

export default NotificationCount;
