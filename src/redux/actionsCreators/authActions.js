import * as types from "../actions/actions";
import { validateLogin, validateSignUp } from "../../validation/validation";

export const signUpUser = (user) => {
  let result = validateSignUp(user);
  if (result.errors !== null) {
    return { type: types.signup_failed, payload: result.errors };
  } else {
    return { type: types.signup_success };
  }
};

export const signInUser = (user) => {
  let result = validateLogin(user);

  if (result.errors !== null) {
    return { type: types.signin_failed, payload: result.errors };
  } else {
    return { type: types.signin_success };
  }
};
