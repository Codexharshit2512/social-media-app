import firebase from "../../config/config";
import { noImageUrl } from "../../config/noImage";
import * as types from "../actions/actions";

export const fetchUser = (uid) => {
  return (dispatch) => {
    dispatch({ type: types.user_info_loading });
    console.log(uid);
    firebase
      .firestore()
      .doc(`/users/${uid}`)
      .get()
      .then((doc) => {
        console.log(doc.exists);
        dispatch({
          type: types.set_selected_user_info,
          payload: doc.data(),
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
    console.log(img);
    const oldPic = state.selectedUser.profilePic;
    firebase
      .storage()
      .ref(`/userProfilePics/${img.name}`)
      .put(img)
      .then((snapshot) => snapshot.ref.getDownloadURL())
      .then((res) => {
        url = res;
        const user = JSON.parse(localStorage.getItem("user"));
        user.photo = url;
        localStorage.setItem("user", JSON.stringify(user));
        dispatch({ type: types.profile_pic_uploading_complete });
        dispatch({
          type: types.change_user_pic,
          payload: { url: url, isPic: true },
        });
        return firebase
          .firestore()
          .collection("/users")
          .where("handle", "==", state.auth.user.username)
          .get();
      })
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          firebase
            .firestore()
            .doc(`/users/${doc.id}`)
            .update({ userPic: url, isProfilePic: true });
        });
      });

    if (oldPic !== noImageUrl) {
      const picPath = firebase.storage().refFromURL(oldPic);

      var storageRef = firebase.storage().ref();
      storageRef
        .child(picPath.fullPath)
        .delete()
        .catch((err) => console.log(err));
    }
  };
};

export const removeUserPic = () => {
  return (dispatch, getState) => {
    const state = getState();
    const handle = state.auth.user.username;
    const picUrl = state.selectedUser.profilePic;
    const picPath = firebase.storage().refFromURL(picUrl);
    dispatch({ type: types.profile_pic_uploading });
    firebase
      .firestore()
      .collection("/users")
      .where("handle", "==", handle)
      .limit(1)
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          firebase
            .firestore()
            .doc(`/users/${doc.id}`)
            .update({ isProfilePic: false, userPic: noImageUrl });
        });
        dispatch({ type: types.profile_pic_uploading_complete });
        dispatch({
          type: types.change_user_pic,
          payload: { url: noImageUrl, isPic: false },
        });
      });

    var storageRef = firebase.storage().ref();
    storageRef
      .child(picPath.fullPath)
      .delete()
      .then(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        user.photo = noImageUrl;
        localStorage.setItem("user", JSON.stringify(user));
      })
      .catch((err) => console.log(err));
  };
};

export const editProfileInfo = (info) => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      const currentInfo = getState().selectedUser.info;
      const state = getState();
      firebase
        .firestore()
        .collection("/users")
        .where("handle", "==", state.auth.user.username)
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            firebase
              .firestore()
              .doc(`/users/${doc.id}`)
              .update({ ...info });
          });
          dispatch({ type: types.change_user_info, payload: info });
        })
        .catch((err) => console.log(err));
    });
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    firebase
      .firestore()
      .collection("/users")
      .get()
      .then((snapshot) => {
        let arr = [];
        snapshot.docs.forEach((doc) => arr.push({ ...doc.data(), id: doc.id }));
        console.log(arr);
        dispatch({ type: types.set_users, payload: arr });
      });
  };
};
