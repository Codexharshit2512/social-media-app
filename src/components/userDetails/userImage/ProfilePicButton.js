import React, { useState } from "react";
import ProfilePicInput from "./ProfilePicInput";

const ProfilePicButton = () => {
  const [profilePicModalOpen, setOpen] = useState(false);
  const open = () => setOpen(true);
  const close = () => setOpen(false);

  return (
    <div className="change_pic_btn">
      <button type="button" onClick={open}>
        Change Profile Pic
      </button>
      <ProfilePicInput close={close} open={profilePicModalOpen} />
    </div>
  );
};

export default ProfilePicButton;
