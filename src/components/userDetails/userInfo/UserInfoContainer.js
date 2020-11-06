import React from "react";
import { connect } from "react-redux";
import UserInfoSkeletonContainer from "../../skeletons/UserInfoSkeletonContainer";
import UserImage from "../userImage/UserImage";
import UserInfo from "./UserInfo";

const UserInfoContainer = (props) => {
  return (
    <div className="user_detail_info_container">
      {props.loading ? (
        <UserInfoSkeletonContainer />
      ) : (
        <>
          <UserImage />
          <UserInfo />
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.loaders.userInfoLoading,
});

export default connect(mapStateToProps, null)(UserInfoContainer);
