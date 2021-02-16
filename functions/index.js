const functions = require("firebase-functions");
const admin = require("firebase-admin");

const firebaseConfig = {
  apiKey: "AIzaSyAwQq5M7CkH7340dHzj7z3x_UR2wE9M5sU",
  authDomain: "social-media-app-567e0.firebaseapp.com",
  databaseURL: "https://social-media-app-567e0.firebaseio.com",
  projectId: "social-media-app-567e0",
  storageBucket: "social-media-app-567e0.appspot.com",
  messagingSenderId: "960130459724",
  appId: "1:960130459724:web:14e8844596f33445952ce9",
  measurementId: "G-Z19067BTGC",
};

admin.initializeApp(firebaseConfig);

const db = admin.firestore();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", { structuredData: true });
//   response.send("Hello from Firebase!");
// });

exports.createNotificationsOnLike = functions.firestore
  .document("/likes/{likeId}")
  .onCreate((snap) => {
    return db
      .doc(`/posts/${snap.data().postId}`)
      .get()
      .then((doc) => {
        if (doc.data().handle !== snap.data().handle) {
          const notification = {
            type: "like",
            sender: snap.data().handle,
            recipient: doc.data().handle,
            createdAt: new Date(),
            postId: doc.id,
            read: false,
            userPic: snap.data().userPic,
          };
          db.doc(`/notifications/${snap.id}`).set(notification);
        }
        return true;
      })
      .catch((err) => console.log(err));
  });

exports.createNotificationOnComment = functions.firestore
  .document("/comments/{commentId}")
  .onCreate((snap) => {
    return db
      .doc(`/posts/${snap.data().postId}`)
      .get()
      .then((doc) => {
        if (doc.data().handle !== snap.data().handle) {
          const notification = {
            type: "comment",
            sender: snap.data().handle,
            recipient: doc.data().handle,
            createdAt: new Date(),
            postId: doc.id,
            read: false,
            userPic: snap.data().userPic,
          };
          db.doc(`/notifications/${snap.id}`).set(notification);
        }
        return true;
      })
      .catch((err) => console.log(err));
  });

exports.deleteNotificationsOnUnlike = functions.firestore
  .document("/likes/{likeId}")
  .onDelete((snap) => {
    return db
      .doc(`notifications/${snap.id}`)
      .delete()
      .catch((err) => console.log(err));
  });

exports.deleteNotificationsOnCommentDelete = functions.firestore
  .document("/comments/{commentId}")
  .onDelete((snap) => {
    return db
      .doc(`notifications/${snap.id}`)
      .delete()
      .catch((err) => console.log(err));
  });

exports.deleteLikesAndComments = functions.firestore
  .document("/posts/{postId}")
  .onDelete((snap) => {
    return db
      .collection("/likes")
      .where("postId", "==", snap.id)
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          db.doc(`/likes/${doc.id}`).delete();
        });
        return db.collection("/comments").where("postId", "==", snap.id).get();
      })
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          db.doc(`/comments/${doc.id}`).delete();
        });
        return db.collection("/notifications").where("postId", "==", snap.id);
      })
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          db.doc(`/notifications/${doc.id}`).delete();
        });
        return true;
      })
      .catch((err) => console.log(err));
  });

exports.changeUserPic = functions.firestore
  .document("/users/{userId}")
  .onUpdate((change) => {
    const before = change.before.data();
    const after = change.after.data();

    if (before.userPic !== after.userPic) {
      return db
        .collection("/posts")
        .where("handle", "==", before.handle)
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            db.doc(`/posts/${doc.id}`).update({ userPic: after.userPic });
          });
          return db
            .collection("/comments")
            .where("handle", "==", before.handle)
            .get();
        })
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            db.doc(`/comments/${doc.id}`).update({ userPic: after.userPic });
          });
          return db
            .collection("/notifications")
            .where("sender", "==", before.handle)
            .get();
        })
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            db.doc(`/notifications/${doc.id}`).update({
              userPic: after.userPic,
            });
          });
          return true;
        })
        .catch((err) => console.log(err));
    }

    if (before.handle !== after.handle) {
      return db
        .collection("/posts")
        .where("handle", "==", before.handle)
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            db.doc(`/posts/${doc.id}`).update({ handle: after.handle });
          });
          return db
            .collection("/comments")
            .where("handle", "==", before.handle)
            .get();
        })
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            db.doc(`/comments/${doc.id}`).update({ handle: after.handle });
          });
          return db
            .collection("/likes")
            .where("handle", "==", before.handle)
            .get();
        })
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            db.doc(`/likes/${doc.id}`).update({
              handle: after.handle,
            });
          });

          return db
            .collection("/notifications")
            .where("sender", "==", before.handle)
            .get();
        })
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            db.doc(`/notifications/${doc.id}`).update({
              sender: after.handle,
            });
          });
          return db
            .collection("/notifications")
            .where("recipient", "==", before.handle)
            .get();
        })
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            db.doc(`/notifications/${doc.id}`).update({
              recipient: after.handle,
            });
          });
          return true;
        })
        .catch((err) => console.log(err));
    }

    return true;
  });
