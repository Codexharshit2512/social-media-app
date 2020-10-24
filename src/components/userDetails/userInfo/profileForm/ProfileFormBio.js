import React, { useState, useRef, useEffect } from "react";

const ProfileFormBio = (props) => {
  const [characters, setCharacters] = useState(100);

  const bioRef = useRef();

  useEffect(() => {
    setCharacters(100 - props.bio.length);
  }, [props.bio]);

  return (
    <>
      <label htmlFor="bio">Bio</label>
      <textarea
        value={props.bio}
        name="bio"
        cols="30"
        rows="8"
        onChange={props.handleChange}
        ref={bioRef}
      ></textarea>
      <p style={{ fontSize: "13px" }} className="char_remaining">
        {characters} characters remaining
      </p>
    </>
  );
};

export default ProfileFormBio;
