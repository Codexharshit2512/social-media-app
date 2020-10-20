import React, { useState, useEffect } from "react";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import ThumbUpAltRoundedIcon from "@material-ui/icons/ThumbUpAltRounded";
import CommentBox from "./comment/CommentBox";
import MobileCommentBox from "./comment/mobile/MobileCommentBox";
import manan from "../../images/manan.png";
import final from "../../images/final.jpg";

const Post = ({ data, ...rest }) => {
  const [commentSectionOpen, setOpen] = useState(false);

  return (
    <div className="post-container">
      <div className="post-info">
        <div className="post-user-img">
          <img src={manan} alt="user image" />
        </div>

        <div className="post-user-name">
          <p>kaneki</p>
          <p className="post-date">
            {new Date(data.createdAt).toLocaleDateString}
          </p>
        </div>
      </div>
      <p className="post-text">{data.body}</p>
      <div className="post-img">
        {data.postPic ? <img src={data.postPic} alt="post image" /> : null}
        {/* <img src={final} alt="post image" /> */}
      </div>
      <div className="post_popularity_tab">
        <div className="post_like_count">
          <span className="like_count_icon">
            <ThumbUpAltOutlinedIcon />
          </span>
          <span className="like_count_number">30K</span>
        </div>
        <div className="post_comment_count">
          <span className="comment_count_number">500 comments</span>
        </div>
      </div>
      <div className="post_interact_tab">
        <div
          className="like_btn"
          onClick={
            data.isLiked ? () => rest.unlike(data.id) : () => rest.like(data.id)
          }
        >
          <span className="like_interact_icon">
            {data.isLiked ? (
              <ThumbUpAltRoundedIcon htmlColor="#4080ff" />
            ) : (
              <ThumbUpAltOutlinedIcon />
            )}
          </span>
          <span style={{ color: data.isLiked ? "#4080FF" : "white" }}>
            Like
          </span>
        </div>
        <div className="comment_btn" onClick={() => setOpen((prev) => !prev)}>
          <span className="comment_interact_icon">
            <ChatBubbleOutlineOutlinedIcon />
          </span>
          <span>Comment</span>
        </div>
      </div>
      <div className="comment_section">
        {/* {commentSectionOpen ? <CommentBox postId={data.id} /> : null} */}
        {commentSectionOpen ? (
          <MobileCommentBox
            postId={data.id}
            close={() => setOpen((prev) => !prev)}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Post;
