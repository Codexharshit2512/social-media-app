import React from "react";
import ThumbUpAltRoundedIcon from "@material-ui/icons/ThumbUpAltRounded";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";

const PostInteractTab = (props) => {
  return (
    <div className="post_interact_tab">
      <div
        className="like_btn"
        onClick={
          props.isLiked
            ? () => props.unlike(props.id)
            : () => props.like(props.id)
        }
      >
        <span className="like_interact_icon">
          {props.isLiked ? (
            <ThumbUpAltRoundedIcon htmlColor="#4080ff" />
          ) : (
            <ThumbUpAltOutlinedIcon />
          )}
        </span>
        <span style={{ color: props.isLiked ? "#4080FF" : "white" }}>Like</span>
      </div>
      <div className="comment_btn" onClick={() => props.open()}>
        <span className="comment_interact_icon">
          <ChatBubbleOutlineOutlinedIcon />
        </span>
        <span>Comment</span>
      </div>
    </div>
  );
};

export default PostInteractTab;
