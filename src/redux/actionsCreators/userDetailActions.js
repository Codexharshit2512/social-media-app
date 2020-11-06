import firebase from "../../config/config";
import * as types from "../actions/actions";

export const fetchUser = (user) => {
  return (dispatch) => {
    dispatch({ type: types.user_info_loading });
    firebase
      .firestore()
      .collection("/users")
      .where("handle", "==", user)
      .get()
      .then((doc) => {
        dispatch({
          type: types.set_selected_user_info,
          payload: doc.docs[0].data(),
        });
        dispatch({ type: types.user_info_complete });
      });
  };
};

export const changeUserProfilePic = (img) => {
  return (dispatch, getState) => {
    var url;
    const state = getState();
    dispatch({ type: types.profile_pic_uploading });
    firebase
      .storage()
      .ref(`/userProfilePics/${img.name}`)
      .put(img)
      .then((snapshot) => snapshot.ref.getDownloadURL())
      .then((res) => {
        url = res;
        dispatch({ type: types.profile_pic_uploading_complete });
        dispatch({ type: types.change_user_pic, payload: url });
        return firebase
          .firestore()
          .collection("/users")
          .where("handle", "==", state.auth.user.username)
          .get();
      })
      .then((docs) => {
        docs.forEach((doc) => {
          firebase
            .firestore()
            .doc(`/users/${doc.id}`)
            .update({ profilePic: url });
        });
      });
  };
};

export const editProfileInfo = (info) => {
  return (dispatch, getState) => {
    const currentInfo = getState().selectedUser.info;
    const state = getState();
    firebase
      .firestore()
      .doc(`/users/${state.auth.user.username}`)
      .update({ ...info });
    dispatch({ type: types.change_user_info, payload: info });
  };
};
