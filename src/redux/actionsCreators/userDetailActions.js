import firebase from "../../config/config";
import * as types from "../actions/actions";

export const fetchUser = () => {
  return (dispatch) => {
    firebase
      .firestore()
      .collection("/users")
      .where("handle", "==", "harshit")
      .get()
      .then((doc) => {
        console.log(doc);
        dispatch({
          type: types.set_selected_user_info,
          payload: doc.docs[0].data(),
        });
      });
  };
};

export const changeUserProfilePic = (img) => {
  return (dispatch) => {
    var url;
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
          .where("handle", "==", "harshit")
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
    firebase
      .firestore()
      .doc("/users/harshit")
      .update({ ...info });
    dispatch({ type: types.change_user_info, payload: info });
  };
};
