import firebase from "../../config/config";

import * as types from "../actions/actions";

export const fetchPosts = () => {
  return (dispatch, getState) => {
    const state = getState();
    let readPosts = firebase
      .firestore()
      .collection("/posts")
      .orderBy("createdAt", "desc")
      .get();

    let readLikes = firebase
      .firestore()
      .collection("/likes")
      .where("handle", "==", state.auth.user.username)
      .get();

    Promise.all([readPosts, readLikes]).then((resArr) => {
      let postDocs = resArr[0].docs;
      const likeDocs = resArr[1].docs;
      let posts = [];
      postDocs.forEach((post) =>
        posts.push({ ...post.data(), isLiked: false, id: post.id })
      );
      if (likeDocs.length != 0) {
        likeDocs.forEach((like) => {
          for (let i = 0; i < posts.length; i++) {
            if (like.data().postId === posts[i].id) {
              posts[i] = { ...posts[i], isLiked: true };
            }
          }
        });
      }
      dispatch({ type: types.set_posts, payload: posts });
    });
  };
};

export const addPost = ({ postImg, ...rest }) => {
  return (dispatch, getState) => {
    dispatch({ type: types.add_post_loading });
    const state = getState();
    if (postImg) {
      var storageRef = firebase
        .storage()
        .ref(`/screamPics/${new Date().getTime() + postImg.name}`)
        .put(postImg)
        .then((snapshot) => {
          return snapshot.ref.getDownloadURL();
        })
        .then((url) => {
          const post = { ...rest, postPic: url };
          firebase
            .firestore()
            .collection("/posts")
            .add({
              ...post,
              handle: state.auth.user.username,
              likes: 0,
              comments: 0,
            })
            .then((doc) => {
              const newDoc = {
                ...post,
                likes: 0,
                comments: 0,
                id: doc.id,
                isLiked: false,
                createdAt: new Date(post.createdAt).toDateString,
              };
              dispatch({ type: types.add_post, payload: newDoc });
            });
        });
    } else {
      const post = { ...rest };
      firebase
        .firestore()
        .collection("/posts")
        .add({
          ...post,
          handle: state.auth.user.username,
          likes: 0,
          comments: 0,
        })
        .then((doc) => {
          const newDoc = {
            ...post,
            likes: 0,
            comments: 0,
            handle: state.auth.user.username,
            id: doc.id,
            isLiked: false,
            createdAt: new Date(post.createdAt).toDateString,
          };
          dispatch({ type: types.add_post, payload: newDoc });
        });
    }
  };
};

export const deletePost = (postId) => {
  return (dispatch, getState) => {
    firebase.firestore().doc(`/posts/${postId}`).delete();

    dispatch({ type: types.delete_post, payload: postId });
  };
};

export const likePost = (postId) => {
  return (dispatch, getState) => {
    const state = getState();
    const newLike = {
      postId,
      handle: state.auth.user.username,
      createdAt: new Date(),
    };
    firebase.firestore().collection("/likes").add(newLike);

    firebase
      .firestore()
      .doc(`/posts/${postId}`)
      .update({ likes: firebase.firestore.FieldValue.increment(1) });

    dispatch({ type: types.add_like, payload: newLike });

    let temp = [];
    state.posts.posts.forEach((post) => {
      if (newLike.postId == post.id)
        temp.push({ ...post, isLiked: true, likes: post.likes + 1 });
      else temp.push({ ...post });
    });
    dispatch({ type: types.set_posts, payload: temp });
  };
};

export const unlikePost = (postId) => {
  return (dispatch, getState) => {
    const state = getState();
    firebase
      .firestore()
      .doc(`/posts/${postId}`)
      .update({ likes: firebase.firestore.FieldValue.increment(-1) });
    const query_snap = firebase
      .firestore()
      .collection("/likes")
      .where("postId", "==", postId)
      .where("handle", "==", state.auth.user.username);

    query_snap.get().then((docs) => {
      docs.forEach((doc) => {
        console.log(doc);
        firebase.firestore().collection("/likes").doc(doc.id).delete();
      });
    });

    let temp = [];
    state.posts.posts.forEach((post) => {
      if (postId == post.id)
        temp.push({ ...post, isLiked: false, likes: post.likes - 1 });
      else temp.push({ ...post });
    });
    dispatch({ type: types.set_posts, payload: temp });

    dispatch({ type: types.delete_like, payload: { postId } });
  };
};

export const fetchUserPosts = (username) => {
  return (dispatch, getState) => {
    const state = getState();
    // dispatch({ type: types.set_posts, payload: [] });
    const readUserPosts = firebase
      .firestore()
      .collection("posts")
      .where("handle", "==", username)
      .get();

    const readPostsLikes = firebase
      .firestore()
      .collection("/likes")
      .where("handle", "==", state.auth.user.username)
      .get();

    Promise.all([readUserPosts, readPostsLikes]).then((res) => {
      const posts = res[0].docs;
      const likes = res[1].docs;

      const userPosts = [],
        userLikes = [];
      posts.forEach((post) =>
        userPosts.push({ ...post.data(), isLiked: false, id: post.id })
      );
      likes.forEach((like) => userLikes.push({ ...like.data(), id: like.id }));

      userLikes.forEach((like) => {
        userPosts.forEach((post, index) => {
          if (like.postId == post.id)
            userPosts[index] = { ...userPosts[index], isLiked: true };
        });
      });
      console.log(userPosts);
      dispatch({ type: types.set_posts, payload: userPosts });
    });
  };
};
