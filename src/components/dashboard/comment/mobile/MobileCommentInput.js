import React, { useState } from "react";
import firebase from "../../../../config/config";
import SendRoundedIcon from "@material-ui/icons/SendRounded";

const MobileCommentInput = ({ postId }) => {
  const [commentVal, setValue] = useState("");

  const handlePostComment = (e) => {
    e.preventDefault();
    const newComment = {
      handle: "harshit",
      comment: commentVal,
      userPic: null,
      createdAt: new Date(),
      postId,
    };
    firebase.firestore().collection("/comments").add(newComment);

    setValue("");
  };
  return (
    <div className="mobile_comment_input_container">
      <div className="input_box">
        <input
          value={commentVal}
          type="text"
          placeholder="Write a comment..."
          onChange={(e) => setValue(e.target.value)}
        />
        <span className="send_comment" onClick={handlePostComment}>
          <SendRoundedIcon />
        </span>
      </div>
    </div>
  );
};

export default MobileCommentInput;
