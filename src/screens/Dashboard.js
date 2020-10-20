import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import firebase from "../config/config";
import { addLike, getLikes } from "../functions/crud";
import AddPost from "../components/dashboard/AddPost";
import Post from "../components/dashboard/Post";
import DummyPost from "../components/dashboard/DummyPost";
import {
  fetchPosts,
  addPost,
  addLikesToPosts,
  likePost,
  unlikePost,
} from "../redux/actionsCreators/postActions";

const Dashboard = (props) => {
  const [screams, setScreams] = useState([]);

  useEffect(() => {
    if (props.posts.length === 0) {
      props.fetchPosts();
    } else {
      console.log(props.posts);
      setScreams(props.posts);
    }
  }, [props.posts]);

  const like = (postId) => props.likePost(postId);

  const unlike = (postId) => props.unlikePost(postId);

  return (
    <div className="dashboard-container">
      <div className="posts-container">
        <div className="add_post_outer-container">
          <AddPost />
        </div>
        {/* <DummyPost /> */}
        {screams.map((post) => (
          <Post data={post} key={post.id} like={like} unlike={unlike} />
        ))}
      </div>
      {/* <div className="news">
        <h1>im news</h1>
      </div> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
  likes: state.likes.likes,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
  likePost: (postId) => dispatch(likePost(postId)),
  unlikePost: (postId) => dispatch(unlikePost(postId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
