const initState = {
  user: {
    uid: null,
    username: "harshit",
    photo: null,
    email: null,
  },
  isAuthenticated: false,
};

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
