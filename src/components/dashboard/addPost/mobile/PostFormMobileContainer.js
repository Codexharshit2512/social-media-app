import React, { Component, createRef } from "react";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import CircularProgress from "@material-ui/core/CircularProgress";
import { addPost } from "../../../../redux/actionsCreators/postActions";
import { connect } from "react-redux";
import PostForm from "../PostForm";

class PostFormMobileContainer extends Component {
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
      //   console.log(value);
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
      this.props.close();
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
      <div className="post_form_mobile_container">
        <div className="post_form_mobile_header">
          <div className="post_form_mobile_heading">
            <span className="close_mobile_form_icon" onClick={this.props.close}>
              <ArrowBackRoundedIcon />
            </span>
            <h2>Create Post</h2>
          </div>
          <div className="post_form_mobile_submit_btn">
            <p
              style={{
                color: this.state.body.length != 0 ? "floralwhite" : "#3a3b3c",
                fontWeight: 600,
              }}
              onClick={this.handleSubmit}
            >
              {this.props.progressLoader ? (
                <CircularProgress size={25} style={{ color: "#1a90ff" }} />
              ) : (
                "POST"
              )}
            </p>
          </div>
        </div>
        <div className="post_form_mobile">
          <PostForm
            submit={this.handleSubmit}
            change={this.handleChange}
            body={this.state.body}
            pic={this.state.pic}
            delete={this.deletePic}
            loading={this.props.progressLoader}
            ref={this.fileInputRef}
          />
        </div>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostFormMobileContainer);
