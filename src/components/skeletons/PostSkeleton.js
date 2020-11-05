import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";

const PostSkeleton = () => {
  return (
    <div className="skeleton_post_container">
      <div className="skeleton_user_info">
        <div className="skeleton_avatar">
          <Skeleton animation="wave" variant="circle" width={40} height={40} />
        </div>
        <div className="skeleton_user">
          <Skeleton animation="wave" height={10} width="40%" />
          <Skeleton animation="wave" height={10} width="40%" />
        </div>
      </div>
      <div className="skeleton_post_img">
        <Skeleton animation="wave" variant="rect" height={300} width="100%" />
      </div>
      <div className="skeleton_interactive">
        <Skeleton animation="wave" height={10} width="40%" />
        <Skeleton animation="wave" height={10} width="40%" />
      </div>
    </div>
  );
};

export default PostSkeleton;
