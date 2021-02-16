import React from "react";
import { useSelector } from "react-redux";
import manan from "../../../images/manan.png";

const AddPostModalToggle = (props) => {
  const user = useSelector((state) => state.auth.user);
  return (
    <div className="add_post-container">
      <div className="add_post_user_img">
        <img src={user.photo} alt="user image" />
      </div>
      <div className="post_modal_toggle_btn">
        <p onClick={props.toggle}>What's on your mind,{user.username}?</p>
      </div>
    </div>
  );
};

export default AddPostModalToggle;
