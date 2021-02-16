import * as types from "../actions/actions";

const initState = {
  posts: [],
  postsLoading: false,
  addPostLoader: false,
};

export const fetchPostsReducer = (state = initState, action = {}) => {
  let posts, postId;
  switch (action.type) {
    case types.set_posts:
      return { ...state, posts: action.payload };
    case types.add_post:
      posts = [action.payload].concat(state.posts);
      return { ...state, posts, addPostLoader: false };
    case types.delete_post:
      posts = state.posts.filter((post) => post.id !== action.payload);
      return { ...state, posts };
    case types.add_post_loading:
      return { ...state, addPostLoader: true };
    case types.increment_comment_count:
      postId = action.payload;
      posts = state.posts.map((post) => {
        if (post.id == postId) return { ...post, comments: post.comments + 1 };
        else return post;
      });
      return { ...state, posts };
    case types.decrement_comment_count:
      postId = action.payload;
      posts = state.posts.map((post) => {
        if (post.id == postId) return { ...post, comments: post.comments - 1 };
        else return post;
      });
      return { ...state, posts };
    default:
      return state;
  }
};
