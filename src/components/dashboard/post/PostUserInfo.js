import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import PostDialogBox from "./PostDialogBox";

const PostUserInfo = ({ data }) => {
  const { username, photo } = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = () => {
    dispatch({ type: "SET_POSTS", payload: [] });
    history.push(`/user/${data.uid}`);
  };

  const calcDate = (postDate) => {
    const mili =
      new Date().getTime() - new Date(postDate.seconds * 1000).getTime();

    const miliInADay = 24 * 60 * 60 * 1000;
    const sec = mili / 1000;
    if (sec < 60) return `${Math.floor(sec)}s`;
    else if (sec >= 60 && sec < 60 * 60) return `${Math.floor(sec / 60)}min`;
    else if (sec >= 60 * 60 && sec < 60 * 60 * 24)
      return `${Math.floor(sec / 3600)}h`;
    else return `${Math.floor(mili / miliInADay)}d`;
  };

  // console.log(new Date(data.createdAt.seconds * 1000).getTime());
  return (
    <div className="post-info">
      <div className="post-user-img">
        <img src={data.userPic} alt="user image" />
      </div>

      <div className="post-user-name">
        <p onClick={handleClick}>{data.handle}</p>

        <p className="post-date" style={{ fontSize: "13px" }}>
          • {calcDate(data.createdAt)}
        </p>
      </div>
      {data.handle === username ? (
        <PostDialogBox id={data.id} data={data} />
      ) : null}
    </div>
  );
};

export default PostUserInfo;
