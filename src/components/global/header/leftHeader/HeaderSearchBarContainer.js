import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import UserList from "./UserList";
import SearchBar from "./SearchBar";
import firebase from "../../../../config/config";

const HeaderSearchBarContainer = (props) => {
  const [users, setUsers] = useState([]);
  const [results, setResults] = useState([]);
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setUsers(props.users.users);
  }, [props.users]);

  const handleChange = (val) => {
    if (users.length !== 0 && val !== "") {
      const re = new RegExp(val, "i");
      let arr = [];
      users.forEach((user) => {
        if (re.test(user.handle)) arr.push(user);
      });
      setResults(arr);
    } else if (val === "") setResults([]);
  };

  return (
    <div className="header_search_bar_container">
      <div className="search_bar_box">
        <span className="input_wrapper">
          <SearchBar
            setFocus={setFocus}
            handleChange={handleChange}
            focus={focus}
            setValue={setValue}
            value={value}
            setOpen={() => setOpen((open) => !open)}
          />
          {!focus ? (
            <span className="desktop_search_icon">
              <SearchRoundedIcon />
            </span>
          ) : null}
          <div className="mobile_search_icon">
            <span onClick={props.toggle}>
              <SearchRoundedIcon />
            </span>
          </div>
          {open ? <UserList results={results} /> : null}
        </span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps)(HeaderSearchBarContainer);
