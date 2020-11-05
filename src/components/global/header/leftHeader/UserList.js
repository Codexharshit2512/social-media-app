import React from "react";

const UserList = ({ results }) => {
  return (
    <div className="user_list_container">
      <ul className="user_list">
        {results.map((user) => (
          <li key={user.id} className="user_list_item">
            {user.name}
          </li>
        ))}
        {/* <li className="user_list_item">Harshit</li>
        <li className="user_list_item">Manan</li>
        <li className="user_list_item">Neha</li>
        <li className="user_list_item">Akshit</li>
        <li className="user_list_item">Aditya</li> */}
      </ul>
    </div>
  );
};

export default UserList;
