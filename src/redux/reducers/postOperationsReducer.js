import * as types from "../actions/actions";

const initState = {
  posts: [],
  postsLoading: false,
  addPostLoader: false,
};

export const fetchPostsReducer = (state = initState, action = {}) => {
  switch (action.type) {
    case types.set_posts:
      return { ...state, posts: action.payload };
    case types.add_post:
      const posts = [action.payload].concat(state.posts);
      return { ...state, posts, addPostLoader: false };
    case types.delete_post:
      const newPosts = state.posts.filter((post) => post.id !== action.payload);
      return { ...state, posts: newPosts };
    case types.add_post_loading:
      return { ...state, addPostLoader: true };
    default:
      return state;
  }
};
