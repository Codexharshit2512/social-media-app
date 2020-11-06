import React from "react";
import manan from "../../../../images/manan.png";

const Notification = () => {
  return (
    <li className="notification_item">
      <div className="sender_avatar">
        <img src={manan} alt="" />
      </div>
      <div className="notification_text">
        <p>Micah liked your Post</p>
      </div>
    </li>
  );
};

export default Notification;
