import React, { useState, useEffect } from "react";
import firebase from "../../../config/config";
import CommentInput from "./CommentInput";
import Comment from "./Comment";

const CommentBox = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    return firebase
      .firestore()
      .collection("/comments")
      .where("postId", "==", postId)
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        let commentsArr = [];

        snapshot.forEach((doc) =>
          commentsArr.push({ ...doc.data(), id: doc.id })
        );
        console.log(commentsArr);
        setComments(commentsArr);
      });
  }, []);

  return (
    <div className="comment_box_container">
      <CommentInput postId={postId} />
      {comments.map((comment) => (
        <Comment key={comment.id} data={comment} />
      ))}
    </div>
  );
};

export default CommentBox;
