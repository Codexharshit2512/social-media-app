import React from "react";
import manan from "../../../images/manan.png";
import final from "../../../images/final.jpg";

const PostUserInfo = (props) => {
  return (
    <div className="post-info">
      <div className="post-user-img">
        <img src={manan} alt="user image" />
      </div>

      <div className="post-user-name">
        <p>{props.handle}</p>
        <p className="post-date">{new Date(props.date).toLocaleDateString}</p>
      </div>
    </div>
  );
};

export default PostUserInfo;
