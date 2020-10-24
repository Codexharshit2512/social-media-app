import * as types from "../actions/actions";
import manan from "../../images/manan.png";
const initState = {
  profilePic: manan,
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
      const { profilePic, handle, location, bio } = action.payload;
      newState = {
        profilePic,
        info: { ...state.info, username: handle, location, bio },
      };
      return newState;
    case types.change_user_pic:
      newState = { profilePic: action.payload, info: { ...state.info } };
      return newState;
    case types.change_user_info:
      newState = { ...state, info: action.payload };
      return newState;
    default:
      return state;
  }
};
