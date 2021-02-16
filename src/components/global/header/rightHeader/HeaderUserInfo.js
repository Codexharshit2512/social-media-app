import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import manan from "../../../../images/manan.png";

const HeaderUserInfo = () => {
  const { uid, photo, username } = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = () => {
    if (history.location.pathname !== `/user/${uid}`) {
      dispatch({ type: "SET_POSTS", payload: [] });
      history.push(`/user/${uid}`);
    }
  };

  return (
    <div className="header_user_info" onClick={handleClick}>
      <div className="user_image">
        <img src={photo} alt="user image" />
      </div>
      <div className="user_name">
        <p className="user_name_text">{username}</p>
        <p>See your profile</p>
      </div>
    </div>
  );
};

export default HeaderUserInfo;
