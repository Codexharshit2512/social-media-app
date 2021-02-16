import * as types from "../actions/actions";
import firebase from "../../config/config";
import { validateLogin, validateSignUp } from "../../validation/validation";
import { noImageUrl } from "../../config/noImage";
import { fetchNotifications } from "./globalActions";

export const signUpUser = (user) => {
  return (dispatch, getState) => {
    let result = validateSignUp(user);
    console.log(user);
    dispatch({ type: types.validate_creds_begin });
    if (result.errors !== null) {
      dispatch({ type: types.validate_creds_finish });
      return dispatch({ type: types.signup_failed, payload: result.errors });
    }
    let signedUser, tokenPromise;

    firebase
      .firestore()
      .collection("/users")
      .where("handle", "==", user.handle)
      .limit(1)
      .get()
      .then((snapshot) => {
        if (snapshot.docs.length !== 0) {
          dispatch({ type: types.validate_creds_finish });
          dispatch({
            type: types.signup_failed,
            payload: [{ field: "handle", message: "Handle already taken" }],
          });
        } else {
          return firebase
            .auth()
            .createUserWithEmailAndPassword(user.email, user.password);
        }
      })
      .then((result) => {
        console.log(result.user);
        signedUser = {
          email: result.user.email,
          photo: noImageUrl,
          username: user.handle,
        };
        const newUser = {
          email: result.user.email,
          handle: user.handle,
          bio: "",
          userPic: noImageUrl,
          isProfilePic: false,
          createdAt: new Date(),
          location: "",
        };
        tokenPromise = result.user;
        return firebase.firestore().collection("/users").add(newUser);
      })
      .then((doc) => {
        signedUser.uid = doc.id;
        return tokenPromise.getIdToken();
      })
      .then((token) => {
        console.log(token);
        dispatch({ type: types.validate_creds_finish });
        dispatch({
          type: types.signin_success,
          payload: { signedUser, token },
        });
        fetchNotifications();
      })
      .catch((err) => {
        if (err.code === "auth/email-already-in-use") {
          dispatch({
            type: types.signup_failed,
            payload: [{ field: "email", message: "Email already in use" }],
          });
        } else console.log(err);
      });
  };
};

export const signInUser = (user) => {
  return (dispatch, getState) => {
    let result = validateLogin(user);
    dispatch({ type: types.validate_creds_begin });
    if (result.errors !== null) {
      dispatch({ type: types.validate_creds_finish });
      return dispatch({ type: types.signin_failed, payload: result.errors });
    }
    let signedUser = {},
      tokenPromise;
    firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then((res) => {
        // return dispatch({ type: types.signin_success, payload: res.user });
        // console.log(res);

        tokenPromise = res.user;
        return firebase
          .firestore()
          .collection("/users")
          .where("email", "==", res.user.email)
          .limit(1)
          .get();
      })
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          signedUser = {
            uid: doc.id,
            photo: doc.data().userPic,
            username: doc.data().handle,
            email: doc.data().email,
          };
        });
        return tokenPromise.getIdToken();
      })
      .then((token) => {
        dispatch({ type: types.validate_creds_finish });
        console.log(token);
        dispatch({
          type: types.signin_success,
          payload: { signedUser, token },
        });
        dispatch(fetchNotifications());
      })
      .catch((err) => {
        let errors = [];
        if (err.code == "auth/wrong-password") {
          errors.push({
            field: "password",
            message: "Password entered is wrong",
          });
        } else if (err.code == "auth/user-not-found") {
          errors.push({ field: "email", message: "Email entered is wrong" });
        }
        dispatch({ type: types.validate_creds_finish });
        dispatch({ type: types.signin_failed, payload: errors });
      });
  };
};
