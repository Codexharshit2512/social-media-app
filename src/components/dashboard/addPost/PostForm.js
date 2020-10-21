import React, { useState, useEffect, forwardRef } from "react";
import CloseIcon from "@material-ui/icons/Close";
import PostFormLoader from "./PostFormLoader";
import MediaQuery from "react-responsive";

const PostForm = forwardRef((props, ref) => {
  const setHeight = (e) => {
    const target = e.target;
    target.style.height = target.scrollHeight + "px";
  };
  return (
    <form onSubmit={props.submit}>
      <MediaQuery maxDeviceWidth={400}>
        <textarea
          name="body"
          id="body_input"
          cols="30"
          rows="2"
          placeholder={"What's on Your Mind,Harshit"}
          onChange={(e) => {
            props.change(e);
            setHeight(e);
          }}
          value={props.body}
        ></textarea>
      </MediaQuery>
      <MediaQuery minDeviceWidth={450}>
        <textarea
          name="body"
          id="body_input"
          cols="30"
          rows="10"
          placeholder={"What's on Your Mind,Harshit"}
          onChange={props.change}
          value={props.body}
        ></textarea>
      </MediaQuery>
      <div className="add_post_img">
        <input
          onChange={props.change}
          type="file"
          ref={ref}
          name="postPic"
          id="post_pic_upload"
          hidden
        />
        <label htmlFor="post_pic_upload">Add to your post</label>
        {props.pic ? (
          <div className="post_pic">
            <img src={props.pic} />
            <span className="close_add_post_img" onClick={props.delete}>
              <CloseIcon />
            </span>
          </div>
        ) : null}
      </div>
      <MediaQuery minDeviceWidth={450}>
        <button
          type="submit"
          className={
            props.pic
              ? "post_form_submit_btn submit_btn_pos_change"
              : "post_form_submit_btn"
          }
        >
          {props.loading ? <PostFormLoader /> : <span>Post</span>}
          {/* <PostFormLoader /> */}
        </button>
      </MediaQuery>
    </form>
  );
});

export default PostForm;
