import React, { Component, createRef } from "react";
import PostFormLoader from "./PostFormLoader";
import PostForm from "./PostForm";
import { connect } from "react-redux";
import { addPost } from "../../../redux/actionsCreators/postActions";
import CloseIcon from "@material-ui/icons/Close";

class PostFormContainer extends Component {
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
        body: this.state.body,
        postImg: this.state.postPic,
      };

      this.props.add(newPost);
    }
  };

  render() {
    return (
      <div className="post_form-container">
        <h2 className="post_form_container_heading">Create Post</h2>
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
    );
  }
}

const mapStateToProps = (state) => ({
  progressLoader: state.posts.addPostLoader,
});

const mapDispatchToProps = (dispatch) => ({
  add: (newPost) => dispatch(addPost(newPost)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostFormContainer);
