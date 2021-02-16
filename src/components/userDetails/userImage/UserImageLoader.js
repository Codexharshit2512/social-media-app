import React from "react";
import { Roller } from "react-awesome-spinners";

const UserImageLoader = (props) => {
  return (
    <div className="user_image_loader_container">
      <div className="user_image_loader">
        <Roller color={"red"} />
      </div>
    </div>
  );
};

export default UserImageLoader;
