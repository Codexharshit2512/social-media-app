import React from "react";

const Notification = ({ data }) => {
  return (
    <li className="notification_item">
      <div className="sender_avatar">
        <img src={data.userPic} alt="sender pic" />
      </div>
      <div className="notification_text">
        <p>
          {data.sender}{" "}
          {data.type == "like" ? "liked your post" : "commented on your post"}
        </p>
      </div>
      {!data.read ? <p className="new">new</p> : null}
    </li>
  );
};

export default Notification;
