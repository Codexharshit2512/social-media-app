import firebase from "../../config/config";
import {} from "../../functions/crud";
import * as types from "../actions/actions";

export const fetchPosts = () => {
  return (dispatch) => {
    let readPosts = firebase
      .firestore()
      .collection("/posts")
      .orderBy("createdAt", "desc")
      .get();

    let readLikes = firebase
      .firestore()
      .collection("/likes")
      .where("handle", "==", "kaneki")
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
  console.log(postImg);
  return (dispatch) => {
    dispatch({ type: types.add_post_loading });

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
            .add({ ...post, likes: 0, comments: 0 })
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
        .add({ ...post, likes: 0, comments: 0 })
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
    }
  };
};

export const likePost = (postId) => {
  return (dispatch, getState) => {
    const newLike = { postId, handle: "kaneki", createdAt: new Date() };
    firebase.firestore().collection("/likes").add(newLike);

    dispatch({ type: types.add_like, payload: newLike });

    const state = getState();
    let temp = [];
    state.posts.posts.forEach((post) => {
      if (newLike.postId == post.id) temp.push({ ...post, isLiked: true });
      else temp.push({ ...post });
    });
    dispatch({ type: types.set_posts, payload: temp });
  };
};

export const unlikePost = (postId) => {
  return (dispatch, getState) => {
    const query_snap = firebase
      .firestore()
      .collection("/likes")
      .where("postId", "==", postId)
      .where("handle", "==", "kaneki");

    query_snap.get().then((docs) => {
      docs.forEach((doc) => {
        console.log(doc);
        firebase.firestore().collection("/likes").doc(doc.id).delete();
      });
    });

    const state = getState();

    let temp = [];
    state.posts.posts.forEach((post) => {
      if (postId == post.id) temp.push({ ...post, isLiked: false });
      else temp.push({ ...post });
    });
    dispatch({ type: types.set_posts, payload: temp });

    dispatch({ type: types.delete_like, payload: { postId } });
  };
};

// export const addLikesToPosts = (posts, likes) => {
//   let arr = [];
//   likes.forEach((like) => {
//     posts.forEach((post) => {
//       let liked = false;
//       if (like.postId == post.id) liked = true;
//       arr.push({ ...post, isliked: liked });
//     });
//   });
//   return { type: types.set_posts, payload: arr };
// };
