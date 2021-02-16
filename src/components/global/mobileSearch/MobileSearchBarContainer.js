import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MobileSearchBar from "./MobileSearchBar";
import CloseIcon from "@material-ui/icons/Close";
import UserList from "../header/leftHeader/UserList";

const MobileSearchBarContainer = (props) => {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  const [results, setResults] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(props.users.users);
  }, [props.users]);

  useEffect(() => {
    if (users.length !== 0 && value !== "") {
      const re = new RegExp(value);
      let arr = [];
      users.forEach((user) => {
        if (re.test(user.handle)) arr.push(user);
      });
      setResults(arr);
    } else if (value === "") setResults([]);
  }, [value]);

  return (
    <div className="mobile_search_container">
      <div className="mobile_search_close">
        <span onClick={props.toggle}>
          <ArrowBackIcon />
        </span>
      </div>
      <div className="mobile_search_bar">
        <MobileSearchBar
          value={value}
          change={(val) => setValue(val)}
          setOpen={(bool) => setOpen(bool)}
        />
        <span className="delete_search" onClick={() => setValue("")}>
          <CloseIcon />
        </span>
        {open ? <UserList results={results} /> : null}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps)(MobileSearchBarContainer);
