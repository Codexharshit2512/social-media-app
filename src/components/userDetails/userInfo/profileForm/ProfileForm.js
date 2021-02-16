import React from "react";
import ProfileFormBio from "./ProfileFormBio";

const ProfileForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="form-group">
        <label htmlFor="location">Location</label>
        <input
          onChange={props.handleChange}
          value={props.location}
          type="text"
          name="location"
        />
      </div>
      <div className="form-group">
        <ProfileFormBio bio={props.bio} handleChange={props.handleChange} />
      </div>
      <div className="form-group">
        <button type="submit" className="profile_form_submit_btn">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ProfileForm;
