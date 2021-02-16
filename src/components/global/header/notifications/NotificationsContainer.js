import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import NotificationsIcon from "@material-ui/icons/Notifications";
import NotificationsList from "./NotificationsList";
import NotificationCount from "./NotificationCount";
import firebase from "../../../../config/config";

const NotificationsContainer = () => {
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [notificationCount, setCount] = useState(null);

  const notifs = useSelector((state) => state.notifications);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    setNotifications(notifs.notifications);
    setCount(notifs.unred);
  }, [notifs]);

  const resetCount = () => dispatch({ type: "SET_NOTIFICATIONS_COUNT" });

  return (
    <div className="notifications_container">
      <div className="notification_link">
        <span onClick={() => setOpen((open) => !open)}>
          <NotificationsIcon />
          {notificationCount ? (
            <NotificationCount count={notificationCount} />
          ) : null}
        </span>
      </div>
      {open ? (
        <NotificationsList
          close={() => setOpen(false)}
          reset={resetCount}
          data={notifications}
          touched={notifs.touched}
          isEmpty={notifs.isEmpty}
        />
      ) : null}
    </div>
  );
};

export default NotificationsContainer;
