import React from "react";

const MobileSearchBar = (props) => {
  return (
    <input
      type="text"
      placeholder="Search"
      value={props.value}
      onChange={(e) => props.change(e.target.value)}
      onBlur={() => setTimeout(() => props.setOpen(false), 100)}
      onFocus={() => props.setOpen(true)}
    />
  );
};

export default MobileSearchBar;
