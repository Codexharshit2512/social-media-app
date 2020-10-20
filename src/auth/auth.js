import { firestore } from "firebase";
import firebase from "../config/config";
import { validateSignUp } from "../validation/validation";

const auth = firebase.auth();
const db = firebase.firestore();

export const submitSignUp = (data) => {
  const { email, password, handle, confirmPassword } = data;

  const errors = validateSignUp(data);

  if (errors.length === 0) {
    db.collection("users")
      .doc(`${handle}`)
      .get()
      .then((doc) => {
        if (doc.exists) {
          let handleError = {
            code: 10,
            error: "Handle already exists",
          };
          return handleError;
        } else return;
      })
      .then(() => {
        auth
          .createUserWithEmailAndPassword(email, password)
          .then((cred) => {
            let user = {
              email,
              handle,
              createdAt: db.Timestamp.fromDate(new Date()),
              userId: cred.user.uid,
            };
            db.collection("users").doc(`${handle}`).set(user);
          })
          .then((token) => {
            return token;
          })
          .catch((err) => err);
      });
  } else {
    return errors;
  }
};
