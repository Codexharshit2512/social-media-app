import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import firebase from "../config/config";
import Header from "../components/global/header/Header";
import AddPost from "../components/dashboard/addPost/AddPost";
import Post from "../components/dashboard/post/Post";
import PostSkeletonContainer from "../components/skeletons/PostSkeletonContainer";
import AddPostMobile from "../components/dashboard/addPost/mobile/AddPostMobile";
import {
  fetchPosts,
  addPost,
  addLikesToPosts,
  likePost,
  unlikePost,
} from "../redux/actionsCreators/postActions";

const Dashboard = (props) => {
  const [screams, setScreams] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (props.posts.length === 0) {
      dispatch({ type: "POSTS_LOADING" });
      props.fetchPosts();
    } else {
      console.log(props.posts);
      dispatch({ type: "POSTS_LOADING_COMPLETE" });
      setScreams(props.posts);
    }
  }, [props.posts]);

  const like = (postId) => props.likePost(postId);

  const unlike = (postId) => props.unlikePost(postId);

  return (
    <>
      <div className="dashboard-container">
        <div className="posts-container">
          <div className="add_post_outer-container">
            <AddPost />
          </div>

          {props.loading ? (
            <PostSkeletonContainer />
          ) : (
            screams.map((post) => (
              <Post data={post} key={post.id} like={like} unlike={unlike} />
            ))
          )}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
  likes: state.likes.likes,
  loading: state.loaders.postsLoading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
  likePost: (postId) => dispatch(likePost(postId)),
  unlikePost: (postId) => dispatch(unlikePost(postId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
