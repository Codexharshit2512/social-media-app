import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import firebase from "../../../config/config";

const CommentInput = ({ postId }) => {
  const [commentVal, setValue] = useState("");

  const { username, photo } = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();

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
      .doc(`/posts/${postId}`)
      .update({
        comments: firebase.firestore.FieldValue.increment(1),
      });
    dispatch({ type: "INCREMENT_COMMENT_COUNT", payload: postId });
    setValue("");
  };

  return (
    <div className="comment_input_container">
      <div className="user_comment_input_pic">
        <img src={photo} alt="comment input pic" />
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
