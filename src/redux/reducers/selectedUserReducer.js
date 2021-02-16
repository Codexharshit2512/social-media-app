import * as types from "../actions/actions";

const initState = {
  profilePic: null,
  isProfilePic: false,
  info: {
    username: null,
    posts: 0,
    location: null,
    bio: null,
  },
};

export const selectedUserReducer = (state = initState, action = {}) => {
  let newState;
  switch (action.type) {
    case types.set_selected_user_info:
      const {
        userPic: profilePic,
        handle,
        location,
        bio,
        isProfilePic,
      } = action.payload;
      newState = {
        profilePic,
        isProfilePic,
        info: { ...state.info, username: handle, location, bio },
      };
      return newState;
    case types.change_user_info:
      // const { handle: username, ...rest } = action.payload;
      newState = {
        ...state,
        info: { ...state.info, ...action.payload },
      };
      return newState;
    case types.change_user_pic:
      newState = {
        ...state,
        profilePic: action.payload.url,
        isProfilePic: action.payload.isPic,
      };
      return newState;
    case types.set_posts_length:
      newState = { ...state, info: { ...state.info, posts: action.payload } };
      return newState;
    default:
      return state;
  }
};
