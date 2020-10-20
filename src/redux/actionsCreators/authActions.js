import { validateLogin, validateSignUp } from "../../validation/validation";

export const signUp = (newUser) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const db = getFirestore();
    const { email, password, handle, confirmPassword } = newUser;

    const errors = validateSignUp(newUser);

    if (errors.length === 0) {
      db.collection("users")
        .doc(`${handle}`)
        .get()
        .then((doc) => {
          if (doc.exists) throw (new Error() = "Handle already exists");
          else return;
        })
        .then(() => {
          return firebase
            .auth()
            .createUserWithEmailAndPassword(email, password);
        })
        .then((user) => {
          const newUser = {
            email,
            handle,
            userId: user.user.uid,
            createdAt: new Date(),
          };
          dispatch({ type: "LOGIN_SUCCESS", payload: { email, handle } });
          db.collection("user").doc(`${handle}`).set(newUser);
          return user.user.getIdToken();
        })
        .then((token) => {
          console.log(token);
        })
        .catch((err) => {
          // if(err.message){

          // }
          console.log(err);
        });
    } else {
      dispatch({ type: "SIGN_UP_FAILURE", payload: errors });
    }
  };
};

export const signIn = (creds) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    let firebase = getFirebase();
    let db = getFirestore();
    const { email, password } = creds;

    const { errors } = validateLogin(email, password);
    // console.log(result);
    //   if (result.errors.length > 0) return res.status(403).json(result.errors);
    if (errors.length === 0) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((user) => {
          return db.collection("users").where("userId", "==", user.user.uid);
        })
        .then((doc) => {
          const data = { email, handle: doc.data().handle };
          dispatch({ type: "LOGIN_SUCCESS", payload: data });
        })
        .catch((err) => console.log(err));
    } else {
      console.log(errors);
    }
  };
};
