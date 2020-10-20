import React from "react";
import AddPost from "../dashboard/AddPost";
import Post from "../dashboard/Post";
import { css } from "glamor";

const user_posts_container = css({
  width: "40%",
  margin: "10px auto",
  display: "flex",
  flexDirection: "column",
});

const UserPosts = () => {
  return (
    <div className={`${user_posts_container}`}>
      <AddPost />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default UserPosts;
