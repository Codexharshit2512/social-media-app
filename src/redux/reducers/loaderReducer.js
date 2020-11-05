import * as types from "../actions/actions";

const initState = {
  profilePicUploading: false,
  postsLoading: true,
};

export const loaderReducer = (state = initState, action = {}) => {
  switch (action.type) {
    case types.profile_pic_uploading:
      return { ...state, profilePicUploading: true };
    case types.profile_pic_uploading_complete:
      return { ...state, profilePicUploading: false };
    case types.posts_loading:
      return { ...state, postsLoading: true };
    case types.posts_loading_complete:
      return { ...state, postsLoading: false };
    default:
      return state;
  }
};
