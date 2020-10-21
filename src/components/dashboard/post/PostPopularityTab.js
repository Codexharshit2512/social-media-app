import React from "react";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";

const PostPopularityTab = () => {
  return (
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
  );
};

export default PostPopularityTab;
