import * as types from "../actions/actions";

const initState = {
  profilePicUploading: false,
};

export const loaderReducer = (state = initState, action = {}) => {
  switch (action.type) {
    case types.profile_pic_uploading:
      return { ...state, profilePicUploading: true };
    case types.profile_pic_uploading_complete:
      return { ...state, profilePicUploading: false };
    default:
      return state;
  }
};
