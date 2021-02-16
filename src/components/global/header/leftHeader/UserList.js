import React from "react";
import { useHistory } from "react-router-dom";

const UserList = ({ results }) => {
  const history = useHistory();

  const handleClick = (uid) => {
    history.push(`/user/${uid}`);
  };

  return (
    <div className="user_list_container">
      <ul className="user_list">
        {results.map((user) => (
          <li
            onClick={() => handleClick(user.id)}
            key={user.id}
            className="user_list_item"
          >
            {user.handle}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
