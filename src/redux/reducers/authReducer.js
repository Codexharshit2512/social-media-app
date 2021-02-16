import * as types from "../actions/actions";
const initState = {
  user: {
    uid: "Ob6AKgAhYsX4gYVDGzFJ",
    username: "shisui",
    photo:
      "https://firebasestorage.googleapis.com/v0/b/social-media-app-567e0.appspot.com/o/userProfilePics%2Fno_user_image.jpg?alt=media&token=424581f7-2248-4a3d-9f4e-d34229039b6e",
    email: null,
  },
  isAuthenticated: false,
};

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case types.signin_success:
      localStorage.setItem("FbIdToken", action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload.signedUser));
      return {
        user: action.payload.signedUser,
        isAuthenticated: true,
      };
    case types.user_logout:
      localStorage.removeItem("FbIdToken");
      localStorage.removeItem("user");
      console.log("logging out");
      return initState;
    case types.change_user_pic:
      const newState = {
        ...state,
        user: {
          ...state.user,
          photo: action.payload.url,
        },
      };
      return newState;
    default:
      return state;
  }
};
