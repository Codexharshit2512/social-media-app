import { combineReducers } from "redux";
import { fetchPostsReducer } from "./postOperationsReducer";
import { likesReducer } from "./likesReducer";
import { selectedUserReducer } from "./selectedUserReducer";
import { loaderReducer } from "./loaderReducer";

export const rootReducer = combineReducers({
  posts: fetchPostsReducer,
  likes: likesReducer,
  selectedUser: selectedUserReducer,
  loaders: loaderReducer,
});
