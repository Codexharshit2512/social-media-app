import React, { Component, createRef } from "react";
import PostFormLoader from "./PostFormLoader";
import { connect } from "react-redux";
import { addPost } from "../../redux/actionsCreators/postActions";
import CloseIcon from "@material-ui/icons/Close";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.fileInputRef = createRef();
    this.state = {
      body: "",
      // loading: false,
      postPic: null,
      pic: null,
    };
  }

  deletePic = () => {
    this.setState({ postPic: null, pic: null });
    this.fileInputRef.current.value = null;
  };

  componentDidMount() {
    console.log(this.props);
  }

  handleChange = (e) => {
    let name, value, picVal;
    if (e.target.name == "body") {
      name = "body";
      value = e.target.value;
    } else if (e.target.name == "postPic") {
      name = "postPic";
      value = e.target.files[0];
      console.log(value);
      let file = value;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      let that = this;
      reader.onload = function () {
        that.setState({ [name]: value, pic: reader.result });
        return;
      };
    }
    this.setState({ [name]: value });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.progressLoader && !this.props.progressLoader) {
      this.props.closeModal();
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.body != "") {
      this.setState({ loading: true });
      const newPost = {
        handle: "kaneki",
        body: this.state.body,
        postImg: this.state.postPic,
        createdAt: new Date(),
      };

      this.props.add(newPost);
    }
  };

  render() {
    return (
      <div className="post_form-container">
        <h2 className="post_form_container_heading">Create Post</h2>
        <form onSubmit={this.handleSubmit}>
          <textarea
            name="body"
            id="body_input"
            cols="30"
            rows="10"
            placeholder={"What's on Your Mind,Harshit"}
            onChange={this.handleChange}
            value={this.state.body}
          ></textarea>
          <div className="add_post_img">
            <input
              onChange={this.handleChange}
              type="file"
              ref={this.fileInputRef}
              name="postPic"
              id="post_pic_upload"
              hidden
            />
            <label htmlFor="post_pic_upload">Add to your post</label>
            {this.state.pic ? (
              <div className="post_pic">
                <img src={this.state.pic} />
                <span className="close_add_post_img" onClick={this.deletePic}>
                  <CloseIcon />
                </span>
              </div>
            ) : null}
          </div>
          <button
            type="submit"
            className={
              this.state.pic
                ? "post_form_submit_btn submit_btn_pos_change"
                : "post_form_submit_btn"
            }
          >
            {this.props.progressLoader ? <PostFormLoader /> : <span>Post</span>}
            {/* <PostFormLoader /> */}
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  progressLoader: state.posts.addPostLoader,
});

const mapDispatchToProps = (dispatch) => ({
  add: (newPost) => dispatch(addPost(newPost)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
