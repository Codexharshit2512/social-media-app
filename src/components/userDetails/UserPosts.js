import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AddPost from "../dashboard/addPost/AddPost";
import Post from "../dashboard/post/Post";
import PostSkeletonContainer from "../skeletons/PostSkeletonContainer";
import { connect, useDispatch } from "react-redux";
import DummyPost from "../dashboard/post/DummyPost";
import UserPostErrorMsg from "./UserPostErrorMsg";
import {
  fetchUserPosts,
  likePost,
  unlikePost,
} from "../../redux/actionsCreators/postActions";

const UserPosts = ({ user, selectedUser, ...props }) => {
  const [posts, setPosts] = useState([]);

  const { username } = useParams();
  const dispatch = useDispatch();
  // console.log(username);
  useEffect(() => {
    props.fetchUserPosts(props.uid);
  }, [props.uid]);
  useEffect(() => {
    setPosts(props.userPosts);
  }, [props.userPosts]);

  const like = (postId) => props.likePost(postId);

  const unlike = (postId) => props.unlikePost(postId);

  return (
    <div className="user_posts_container">
      {user.username == selectedUser.username ? <AddPost /> : null}
      <div className="user_posts">
        {props.loading ? (
          <PostSkeletonContainer />
        ) : posts.length == 0 ? (
          <UserPostErrorMsg />
        ) : (
          posts.map((post) => (
            <Post data={post} key={post.id} like={like} unlike={unlike} />
          ))
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userPosts: state.posts.posts,
  user: state.auth.user,
  selectedUser: state.selectedUser.info,
  loading: state.loaders.postsLoading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUserPosts: (username) => dispatch(fetchUserPosts(username)),
  likePost: (postId) => dispatch(likePost(postId)),
  unlikePost: (postId) => dispatch(unlikePost(postId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPosts);
