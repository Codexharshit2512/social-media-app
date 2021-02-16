import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UserInfoContainer from "../components/userDetails/userInfo/UserInfoContainer";
import UserPosts from "../components/userDetails/UserPosts";
import Header from "../components/global/header/Header";
import { connect, useDispatch } from "react-redux";

import { fetchUser } from "../redux/actionsCreators/userDetailActions";

const UserDetail = (props) => {
  const user = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    props.fetchUser(user.uid);

    return () => {
      dispatch({ type: "SET_POSTS", payload: [] });
    };
  }, [user]);

  return (
    <>
      {/* <Header /> */}
      <div className="user_detail_container">
        <UserInfoContainer />
        <UserPosts uid={user.uid} />
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (uid) => dispatch(fetchUser(uid)),
});

export default connect(null, mapDispatchToProps)(UserDetail);
