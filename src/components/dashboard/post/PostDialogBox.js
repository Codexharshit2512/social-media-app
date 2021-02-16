import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../../../redux/actionsCreators/postActions";

const PostDialogBox = ({ id, data }) => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const handleDelete = () => {
    console.log("deleting..");
    dispatch(deletePost(id, data));
  };

  return (
    <div className="post_dialog_box_container">
      <div className="toggle_dialog_btn">
        <span onClick={() => setOpen((open) => !open)}>•••</span>
      </div>
      {open ? (
        <div className="dialog_list">
          <div className="dialog_option" onClick={handleDelete}>
            Delete Post
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default PostDialogBox;
