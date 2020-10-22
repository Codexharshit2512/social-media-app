import React, { useState, useEffect } from "react";
import AddPost from "../dashboard/addPost/AddPost";
import Post from "../dashboard/post/Post";
import { connect } from "react-redux";
import DummyPost from "../dashboard/post/DummyPost";
import {
  fetchUserPosts,
  likePost,
  unlikePost,
} from "../../redux/actionsCreators/postActions";
// import { css } from "glamor";

// const user_posts_container = css({
//   width: "40%",
//   margin: "10px auto",
//   display: "flex",
//   flexDirection: "column",
// });

const UserPosts = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (props.userPosts.length == 0) {
      props.fetchUserPosts();
    } else {
      setPosts(props.userPosts);
    }
  }, [props.userPosts]);

  const like = (postId) => props.likePost(postId);

  const unlike = (postId) => props.unlikePost(postId);

  return (
    <div className="user_posts_container">
      <AddPost />
      <div className="user_posts">
        {/* <DummyPost />
        <DummyPost />
        <DummyPost /> */}
        {posts.map((post) => (
          <Post data={post} key={post.id} like={like} unlike={unlike} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userPosts: state.posts.posts,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUserPosts: () => dispatch(fetchUserPosts()),
  likePost: (postId) => dispatch(likePost(postId)),
  unlikePost: (postId) => dispatch(unlikePost(postId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPosts);
