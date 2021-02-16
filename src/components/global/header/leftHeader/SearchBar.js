import React from "react";

const SearchBar = (props) => {
  const handleBlur = () => {
    props.setFocus(false);
    setTimeout(() => {
      props.setOpen();
    }, 100);
  };

  return (
    <input
      onFocus={(e) => {
        props.setFocus(true);
        props.handleChange(e.target.value);
        props.setOpen();
      }}
      type="text"
      placeholder={!props.focus ? "Search ConnectApe" : null}
      style={{ paddingLeft: props.value && !props.focus ? "45px" : "13px" }}
      onChange={(e) => {
        props.setValue(e.target.value);

        props.handleChange(e.target.value);
      }}
      onBlur={handleBlur}
    />
  );
};

export default SearchBar;
