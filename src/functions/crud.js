import firebase from "../config/config";
import { store } from "../store/store";
import * as types from "../redux/actions/actions";

export const addLike = (postId) => {
  firebase
    .firestore()
    .collection("likes")
    .add({ postId, user: "kaneki" })
    .catch((err) => console.log(err));
};

// export const getLikes = async () => {
//  const snapshot=await firebase
//     .firestore()
//     .collection("likes")
//     .where("user", "==", "kaneki")
//     .onSnapshot();

//   if(store.getState().posts.posts.length==0){
//     let posts=[];
//     let docs=await firebase
//       .firestore()
//       .collection("/posts")
//       .orderBy("createdAt", "desc")
//       .get()

//     docs.forEach(doc => posts.push({...doc.data(),isLiked:false}))

//     snapshot.forEach(doc => {
//       for(let i=0;i<posts.length;i++){
//        if(doc.data().postId==posts[i].id) posts[i]={...posts[i],isLiked:true}
//       }
//     })
//     store.dispatch({type:types.set_posts,payload:posts})
//   }
//   else{

//   }

// };
