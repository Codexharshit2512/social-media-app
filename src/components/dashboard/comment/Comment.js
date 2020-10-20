import React from "react";
import manan from "../../../images/manan.png";

const Comment = ({ data }) => {
  return (
    <div className="comment_container">
      <div className="user_comment_pic">
        <img src={manan} alt="" />
      </div>
      <div className="comment_para">
        <div className="comment_username">{data.handle}</div>
        <div className="comment_text">
          <p>{data.comment}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
