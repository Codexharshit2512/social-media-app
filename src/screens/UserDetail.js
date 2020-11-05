import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UserInfoContainer from "../components/userDetails/userInfo/UserInfoContainer";
import UserPosts from "../components/userDetails/UserPosts";
import { connect, useDispatch } from "react-redux";
import { fetchUser } from "../redux/actionsCreators/userDetailActions";

const UserDetail = (props) => {
  const user = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    props.fetchUser(user.username);

    return () => {
      dispatch({ type: "SET_POSTS", payload: [] });
    };
  }, []);

  return (
    <>
      <div className="user_detail_container">
        <UserInfoContainer />
        <UserPosts />
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (user) => dispatch(fetchUser(user)),
});

export default connect(null, mapDispatchToProps)(UserDetail);
