import React from "react";
import FadeLoader from "react-spinners/FadeLoader";
import { css } from "@emotion/core";

const override = css`
  display: block;
`;

const UserImageLoader = (props) => {
  return (
    <div className="user_image_loader_container">
      <div className="user_image_loader">
        <FadeLoader color="red" css={override} loading={props.loading} />
      </div>
    </div>
  );
};

export default UserImageLoader;
