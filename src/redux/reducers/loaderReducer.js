import * as types from "../actions/actions";

const initState = {
  profilePicUploading: false,
  postsLoading: true,
  userInfoLoading: true,
  validatingCreds: false,
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
    case types.user_info_loading:
      return { ...state, userInfoLoading: true };
    case types.user_info_complete:
      return { ...state, userInfoLoading: false };
    case types.validate_creds_begin:
      return { ...state, validatingCreds: true };
    case types.validate_creds_finish:
      return { ...state, validatingCreds: false };
    default:
      return state;
  }
};
