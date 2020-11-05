import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deletePost } from "../../../redux/actionsCreators/postActions";
import manan from "../../../images/manan.png";
import final from "../../../images/final.jpg";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";

const PostUserInfo = ({ data }) => {
  const { username } = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = () => {
    dispatch({ type: "SET_POSTS", payload: [] });
    history.push(`/user/${data.handle}`);
  };

  // console.log(new Date(data.createdAt.seconds * 1000).getTime());
  return (
    <div className="post-info">
      <div className="post-user-img">
        <img src={manan} alt="user image" />
      </div>

      <div className="post-user-name">
        <p onClick={handleClick}>{data.handle}</p>

        <p className="post-date">
          {new Date(data.createdAt.seconds * 1000).toLocaleDateString()}
        </p>
      </div>
      {data.handle === username ? (
        <div className="delete_post_icon">
          <span onClick={() => dispatch(deletePost(data.id))}>
            <DeleteRoundedIcon />
          </span>
        </div>
      ) : null}
    </div>
  );
};

export default PostUserInfo;
