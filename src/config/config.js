import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyAwQq5M7CkH7340dHzj7z3x_UR2wE9M5sU",
  authDomain: "social-media-app-567e0.firebaseapp.com",
  databaseURL: "https://social-media-app-567e0.firebaseio.com",
  projectId: "social-media-app-567e0",
  storageBucket: "social-media-app-567e0.appspot.com",
  messagingSenderId: "960130459724",
  appId: "1:960130459724:web:14e8844596f33445952ce9",
  measurementId: "G-Z19067BTGC",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
