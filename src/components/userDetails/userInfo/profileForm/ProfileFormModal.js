import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProfileFormContainer from "./ProfileFormContainer";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
  },
}));

const ProfileFormModal = (props) => {
  const classes = useStyles();
  return (
    <div className="profile_form_modal_container">
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={props.close}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Slide direction="up" in={props.open}>
          <div>
            <ProfileFormContainer close={props.close} />
          </div>
        </Slide>
      </Modal>
    </div>
  );
};

export default ProfileFormModal;
