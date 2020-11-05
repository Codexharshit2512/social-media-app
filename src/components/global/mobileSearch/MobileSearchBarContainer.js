import React, { useState } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MobileSearchBar from "./MobileSearchBar";
import CloseIcon from "@material-ui/icons/Close";

const MobileSearchBarContainer = (props) => {
  const [value, setValue] = useState("");

  const handleChange = (val) => setValue(val);

  return (
    <div className="mobile_search_container">
      <div className="mobile_search_close">
        <span onClick={props.toggle}>
          <ArrowBackIcon />
        </span>
      </div>
      <div className="mobile_search_bar">
        <MobileSearchBar value={value} change={handleChange} />
        <span className="delete_search" onClick={() => setValue("")}>
          <CloseIcon />
        </span>
      </div>
    </div>
  );
};

export default MobileSearchBarContainer;
