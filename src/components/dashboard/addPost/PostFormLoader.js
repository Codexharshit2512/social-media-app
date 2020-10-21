import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = (theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const PostFormLoader = () => {
  return (
    <div className={`post_form_loader`} style={useStyles().root}>
      <CircularProgress size={20} />
    </div>
  );
};

export default PostFormLoader;
