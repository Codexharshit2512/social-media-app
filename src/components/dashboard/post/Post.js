import React, { useState, useEffect } from "react";
import PostUserInfo from "./PostUserInfo";
import CommentBox from "../comment/CommentBox";
import MobileCommentBox from "../comment/mobile/MobileCommentBox";
import PostPopularityTab from "./PostPopularityTab";
import PostInteractTab from "./PostInteractTab";
import MediaQuery from "react-responsive";

const Post = ({ data, ...rest }) => {
  const [commentSectionOpen, setOpen] = useState(false);

  return (
    <div className="post-container">
      <PostUserInfo date={data.createdAt} />
      <p className="post-text">{data.body}</p>
      <div className="post-img">
        {data.postPic ? <img src={data.postPic} alt="post image" /> : null}
        {/* <img src={final} alt="post image" /> */}
      </div>
      <PostPopularityTab />
      <PostInteractTab
        isLiked={data.isLiked}
        unlike={rest.unlike}
        like={rest.like}
        id={data.id}
        open={() => setOpen((prev) => !prev)}
      />
      <div className="comment_section">
        <MediaQuery minDeviceWidth={450}>
          {commentSectionOpen ? <CommentBox postId={data.id} /> : null}
        </MediaQuery>
        <MediaQuery maxDeviceWidth={400}>
          {commentSectionOpen ? (
            <MobileCommentBox
              postId={data.id}
              close={() => setOpen((prev) => !prev)}
            />
          ) : null}
        </MediaQuery>
      </div>
    </div>
  );
};

export default Post;
