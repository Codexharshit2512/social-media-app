import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import MediaQuery from "react-responsive";

const UserInfoSkeleton = () => {
  return (
    <div className="user_info_skeleton">
      <div className="user_info_header">
        <div className="user_info_avatar">
          <Skeleton
            animation="wave"
            variant="circle"
            width={140}
            height={140}
          />
        </div>
        <MediaQuery maxWidth={650}>
          <div className="mobile_info">
            <Skeleton animation="wave" height={10} width="100%" />
            <Skeleton animation="wave" height={10} width="100%" />
          </div>
        </MediaQuery>
      </div>
      <div className="user_info_info">
        <Skeleton animation="wave" height={10} width="70%" />
        <Skeleton animation="wave" height={10} width="70%" />
        <Skeleton animation="wave" height={10} width="70%" />
      </div>
    </div>
  );
};

export default UserInfoSkeleton;
