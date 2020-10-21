import React from "react";
import Modal from "@material-ui/core/Modal";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";
import PostFormMobileContainer from "./PostFormMobileContainer";
// import zIndex from "@material-ui/core/styles/zIndex";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "block",
    position: "fixed",
    zIndex: 100,
    top: 0,
    bottom: 0,
    width: "100vw",
  },
  paper: {
    height: "100%",
    // border: "2px solid #000",
    background: "#242526",
    boxShadow: "none",
    // padding: theme.spacing(2, 4, 3),
  },
}));

const AddPostMobile = (props) => {
  const classes = useStyles();

  return (
    <div className="add_post_mobile_container">
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={props.toggleModal}
        closeAfterTransition
      >
        <Slide direction="up" in={props.open}>
          <div className={classes.paper}>
            <PostFormMobileContainer close={props.toggleModal} />
          </div>
        </Slide>
      </Modal>
    </div>
  );
};

export default AddPostMobile;
