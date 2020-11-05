import React from "react";

const SearchBar = (props) => {
  return (
    <input
      onFocus={(e) => {
        props.setFocus(true);
        props.handleChange(e.target.value);
      }}
      type="text"
      placeholder={!props.focus ? "Search Facebook" : null}
      style={{ paddingLeft: props.value && !props.focus ? "45px" : "13px" }}
      onChange={(e) => {
        props.setValue(e.target.value);

        props.handleChange(e.target.value);
      }}
      onBlur={() => {
        props.setFocus(false);
        props.handleChange("");
      }}
    />
  );
};

export default SearchBar;
