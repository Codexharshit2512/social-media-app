import React, { useState, useEffect } from "react";
// import UserImage from "../components/userDetails/UserImage";
import UserInfoContainer from "../components/userDetails/userInfo/UserInfoContainer";
import UserPosts from "../components/userDetails/UserPosts";
import { connect } from "react-redux";
import { fetchUser } from "../redux/actionsCreators/userDetailActions";
// import UserPosts from "../components/userDetails/UserPosts";

const UserDetail = (props) => {
  useEffect(() => {
    props.fetchUser();
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
  fetchUser: () => dispatch(fetchUser()),
});

export default connect(null, mapDispatchToProps)(UserDetail);
