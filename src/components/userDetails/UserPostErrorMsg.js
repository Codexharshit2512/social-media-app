import React from "react";

const UserPostErrorMsg = () => {
  return (
    <div className="user_post_error_msg">
      <p style={{ textAlign: "center", color: "red", fontSize: "19px" }}>
        There are no posts made by the user
      </p>
    </div>
  );
};

export default UserPostErrorMsg;
