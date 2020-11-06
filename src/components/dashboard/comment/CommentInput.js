import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import firebase from "../../../config/config";
import manan from "../../../images/manan.png";

const CommentInput = ({ postId }) => {
  const [commentVal, setValue] = useState("");

  const { username, photo } = useSelector((state) => state.auth.user);

  const handlePostComment = (e) => {
    e.preventDefault();
    const newComment = {
      handle: username,
      comment: commentVal,
      userPic: photo,
      createdAt: new Date(),
      postId,
    };
    firebase.firestore().collection("/comments").add(newComment);
    firebase
      .firestore()
      .doc(`/comments/${postId}`)
      .update({
        comments: firebase.firestore.FieldValue.increment(1),
      });
    setValue("");
  };

  return (
    <div className="comment_input_container">
      <div className="user_comment_input_pic">
        <img src={manan} alt="comment input pic" />
      </div>
      <div className="comment_input">
        <form onSubmit={handlePostComment}>
          <input
            value={commentVal}
            type="text"
            onChange={(e) => setValue(e.target.value)}
            placeholder="Write a comment..."
          />
        </form>
        <p>Press Enter to post</p>
      </div>
    </div>
  );
};

export default CommentInput;
