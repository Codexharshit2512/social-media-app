import React, { useState, useEffect } from "react";
import firebase from "../../../../config/config";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import ThumbUpAltRoundedIcon from "@material-ui/icons/ThumbUpAltRounded";
import MobileCommentInput from "./MobileCommentInput";
import Comment from "../Comment";

const MobileCommentBox = (props) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    return firebase
      .firestore()
      .collection("/comments")
      .where("postId", "==", props.postId)
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
    <div className="mobile_comment_box_container">
      <div className="like_header">
        <h2>Comments</h2>
        <div onClick={props.close}>&times;</div>
      </div>

      <div className="comments">
        {comments.map((comment) => (
          <Comment key={comment.id} data={comment} />
        ))}
      </div>
      <MobileCommentInput postId={props.postId} />
    </div>
  );
};

export default MobileCommentBox;
