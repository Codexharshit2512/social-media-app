import React from "react";
import { useSelector } from "react-redux";
// import manan from "../../../images/manan.png";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";

const Comment = ({ data, ...props }) => {
  const { username } = useSelector((state) => state.auth.user);

  return (
    <div className="comment_container">
      <div className="user_comment_pic">
        <img src={data.userPic} alt="comment user image" />
      </div>
      <div className="comment_para">
        <div className="comment_username">{data.handle}</div>
        <div className="comment_text">
          <p>{data.comment}</p>
        </div>
      </div>
      {username === data.handle ? (
        <div className="comment_delete_btn">
          <span onClick={() => props.delete(data.id)}>
            <DeleteRoundedIcon />
          </span>
        </div>
      ) : null}
    </div>
  );
};

export default Comment;
