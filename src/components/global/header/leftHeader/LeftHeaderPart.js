import React from "react";
import AppLogo from "./AppLogo";
import HeaderSearchBarContainer from "./HeaderSearchBarContainer";

const LeftHeaderPart = (props) => {
  return (
    <div className="left_header_container">
      <AppLogo />
      <HeaderSearchBarContainer toggle={props.toggle} />
    </div>
  );
};

export default LeftHeaderPart;
