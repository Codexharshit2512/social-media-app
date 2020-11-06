import * as types from "../actions/actions";

const initState = {
  signUpErrors: [],
  signInErrors: [],
};

export const validationReducer = (state = initState, action) => {
  let errors,
    errorObj = {};
  switch (action.type) {
    case types.signin_failed:
      errors = action.payload;
      errorObj = {};

      errors.forEach((error) => (errorObj[error.field] = error.message));

      return { ...state, signInErrors: errorObj };
    case types.signup_failed:
      errors = action.payload;
      errorObj = {};
      errors.forEach((error) => (errorObj[error.field] = error.message));
      return { ...state, signUpErrors: errorObj };
    default:
      return state;
  }
};
