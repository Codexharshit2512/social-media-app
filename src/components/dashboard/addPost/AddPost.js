import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import PostFormContainer from "./PostFormContainer";
import AddPostModalToggle from "./AddPostModalToggle";
import AddPostMobile from "./mobile/AddPostMobile";
import MediaQuery from "react-responsive";

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
      <AddPostModalToggle toggle={toggleModal} />
      <MediaQuery minDeviceWidth={450}>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={toggleModal}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <PostFormContainer closeModal={toggleModal} />
            </div>
          </Fade>
        </Modal>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={400}>
        <AddPostMobile toggleModal={toggleModal} open={open} />
      </MediaQuery>
    </>
  );
};

export default AddPost;
