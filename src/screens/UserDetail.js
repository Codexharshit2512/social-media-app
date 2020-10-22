import React from "react";
// import UserImage from "../components/userDetails/UserImage";
import UserInfoContainer from "../components/userDetails/UserInfoContainer";
import UserPosts from "../components/userDetails/UserPosts";
// import UserPosts from "../components/userDetails/UserPosts";

const UserDetail = () => {
  return (
    <>
      <div className="user_detail_container">
        {/* <UserImage /> */}
        <UserInfoContainer />
        {/* <UserPosts /> */}
        <UserPosts />
      </div>
    </>
  );
};

export default UserDetail;
