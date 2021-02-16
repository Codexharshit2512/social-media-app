import * as types from "../actions/actions";
import firebase from "../../config/config";

export const fetchNotifications = () => {
  return (dispatch, getState) => {
    const { username } = getState().auth.user;
    console.log(username);
    firebase
      .firestore()
      .collection("/notifications")
      .where("recipient", "==", username)
      .orderBy("createdAt", "desc")
      .get()
      .then((snapshot) => {
        let arr = [],
          count = 0;
        snapshot.docs.forEach((doc) => {
          arr.push({ ...doc.data(), id: doc.id });
          if (!doc.data().read) count++;
        });
        console.log(arr);
        dispatch({
          type: types.set_notifications,
          payload: { notifications: arr, count },
        });
      });
  };
};

// export const markNotificationsRead=() => {
//   return (dispatch,getState) => {
//     const {notifications}=getState().notifications;
//     let arr=[];
//     notifications.forEach(doc => {
//       if(!notification.read){
//         firebase.firestore()
//         .doc(`/notifications/${doc.id}`).update({read:true})
//       }
//       arr.push({...doc.data()});
//     })
//   }
// }
