import React, { useState, useEffect } from "react";
import manan from "../../images/manan.png";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import PostForm from "./PostForm";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    justifyContent: "center",
    marginTop: "2rem",
    alignItems: "center",
  },
  paper: {
    background: "none",
    boxShadow: "1px 1px 6px #dedede",
    padding: 0,
  },
}));

const AddPost = (props) => {
  let classes = useStyles();

  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="add_post-container">
        <div className="add_post_user_img">
          <img src={manan} alt="user image" />
        </div>
        <div className="post_modal_toggle_btn">
          <p onClick={toggleModal}>What's on your mind,Harshit?</p>
        </div>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        style={{ top: "-300px" }}
        onClose={toggleModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <PostForm closeModal={toggleModal} />
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default AddPost;
