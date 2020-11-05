import React, { useState, useEffect } from "react";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import UserList from "./UserList";
import SearchBar from "./SearchBar";

const HeaderSearchBarContainer = (props) => {
  const [users, setUsers] = useState([]);
  const [results, setResults] = useState([]);
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleChange = (val) => {
    if (users.length !== 0 && val !== "") {
      const re = new RegExp(val);
      let arr = [];
      users.forEach((user) => {
        if (re.test(user.name)) arr.push(user);
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
          <UserList results={results} />
        </span>
      </div>
    </div>
  );
};

export default HeaderSearchBarContainer;
