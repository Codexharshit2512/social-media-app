import React, { useState } from "react";
import ProfileFormModal from "./profileForm/ProfileFormModal";

const EditProfileBtn = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="user_info_edit_profile_btn">
      <button type="button" onClick={handleOpen}>
        Edit Profile
      </button>
      <ProfileFormModal open={open} close={handleClose} />
    </div>
  );
};

export default EditProfileBtn;
