import React from "react";
import manan from "../../../images/manan.png";

const AddPostModalToggle = (props) => {
  return (
    <div className="add_post-container">
      <div className="add_post_user_img">
        <img src={manan} alt="user image" />
      </div>
      <div className="post_modal_toggle_btn">
        <p onClick={props.toggle}>What's on your mind,Harshit?</p>
      </div>
    </div>
  );
};

export default AddPostModalToggle;
