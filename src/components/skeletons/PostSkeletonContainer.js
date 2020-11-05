import React from "react";
import PostSkeleton from "./PostSkeleton.js";

const PostSkeletonContainer = () => {
  return (
    <div className="post_skeleton_container">
      <PostSkeleton />
      <PostSkeleton />
      <PostSkeleton />
    </div>
  );
};

export default PostSkeletonContainer;
