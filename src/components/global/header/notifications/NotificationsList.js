import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import manan from "../../../../images/manan.png";
import Notification from "./Notification";
import firebase from "../../../../config/config";

const NotificationsList = ({ data, ...props }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleClick = (e) => {
      if (
        !document
          .querySelector(".notifications_list_container")
          .contains(e.target)
      ) {
        props.close();
      }
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    if (!props.touched) {
      data.forEach((notification) => {
        if (!notification.read) {
          firebase
            .firestore()
            .doc(`/notifications/${notification.id}`)
            .update({ read: true });
        }
      });
      dispatch({ type: "SET_TOUCHED" });
    }

    return () => {
      props.reset();
    };
  }, []);

  return (
    <div className="notifications_list_container">
      <h2>Notifications</h2>
      {props.isEmpty ? (
        <div
          className="empty_msg"
          style={{ textAlign: "center", fontSize: "15px" }}
        >
          There are no notifications right now
        </div>
      ) : (
        <ul className="notifications_list">
          {data.map((notification) => (
            <Notification key={notification.id} data={notification} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default NotificationsList;
