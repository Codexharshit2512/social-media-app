import React, { useState, useEffect } from "react";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";

const PostPopularityTab = ({ data }) => {
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    setLikes(data.likes);
  }, [data.likes]);

  const calcLikes = () => {
    if (data.isLiked && likes !== 0) {
      if (likes == 1) return `You`;
      else if (likes == 2) return `You and 1 other`;
      else return `You and ${likes - 1} others`;
    } else if (data.isLiked && likes == 0) return `You`;
    else if (!data.isliked) return likes;
  };

  return (
    <div className="post_popularity_tab">
      <div className="post_like_count">
        <span className="like_count_icon">
          <ThumbUpAltOutlinedIcon />
        </span>
        <span className="like_count_number">{calcLikes()}</span>
      </div>
      <div className="post_comment_count">
        <span className="comment_count_number">{data.comments} comments</span>
      </div>
    </div>
  );
};

export default PostPopularityTab;
