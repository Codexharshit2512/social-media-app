import React, { useState, useEffect } from "react";
import firebase from "../../../../config/config";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import ThumbUpAltRoundedIcon from "@material-ui/icons/ThumbUpAltRounded";
import MobileCommentInput from "./MobileCommentInput";
import Comment from "../Comment";

const styleBox = (top) => ({
  position: "fixed",
  top: `${top}px`,
  bottom: "0",
});

const MobileCommentBox = (props) => {
  const [comments, setComments] = useState([]);
  const [offsetTop, setOffset] = useState(0);
  const [touched, setTouched] = useState(false);

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

  useEffect(() => {
    if (!touched && offsetTop < window.innerHeight / 2) setOffset(0);
    else if (!touched && offsetTop > window.innerHeight / 2) props.close();
  }, [offsetTop, touched]);

  const moveBox = (e) => {
    const commentBox = document.querySelector(".mobile_comment_box_container");
    const clientY = e.touches[0].clientY;
    if (clientY > 0) setOffset(clientY);
  };

  return (
    <div
      className="mobile_comment_box_container"
      style={styleBox(offsetTop)}
      onTouchStart={() => setTouched(true)}
      onTouchMove={moveBox}
      onTouchEnd={() => setTouched(false)}
    >
      <div className="like_header">
        <div className="likes_count">
          <span>
            <ThumbUpAltOutlinedIcon />
          </span>
          <span>11k</span>
        </div>
        <div className="like_btn">
          <span>
            <ThumbUpAltOutlinedIcon />
          </span>
        </div>
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
