import { combineReducers } from "redux";
import { fetchPostsReducer } from "./postOperationsReducer";
import { likesReducer } from "./likesReducer";

export const rootReducer = combineReducers({
  posts: fetchPostsReducer,
  likes: likesReducer,
});
