import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import firebase from "../../../config/config";
import CommentInput from "./CommentInput";
import Comment from "./Comment";

const CommentBox = ({ postId }) => {
  const [comments, setComments] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    let unsub = firebase
      .firestore()
      .collection("/comments")
      .where("postId", "==", postId)
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        let commentsArr = [];

        snapshot.forEach((doc) =>
          commentsArr.push({ ...doc.data(), id: doc.id })
        );

        setComments(commentsArr);
      });

    return () => {
      unsub();
    };
  }, []);

  const deleteComment = (commentId) => {
    firebase.firestore().doc(`/comments/${commentId}`).delete();
    firebase
      .firestore()
      .doc(`/posts/${postId}`)
      .update({
        comments: firebase.firestore.FieldValue.increment(-1),
      });
    dispatch({ type: "DECREMENT_COMMENT_COUNT", payload: postId });
  };

  return (
    <div className="comment_box_container">
      <CommentInput postId={postId} />
      {comments.map((comment) => (
        <Comment key={comment.id} data={comment} delete={deleteComment} />
      ))}
    </div>
  );
};

export default CommentBox;
