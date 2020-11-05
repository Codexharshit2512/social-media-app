import { combineReducers } from "redux";
import { fetchPostsReducer } from "./postOperationsReducer";
import { likesReducer } from "./likesReducer";
import { selectedUserReducer } from "./selectedUserReducer";
import { loaderReducer } from "./loaderReducer";
import { authReducer } from "./authReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  posts: fetchPostsReducer,
  likes: likesReducer,
  selectedUser: selectedUserReducer,
  loaders: loaderReducer,
});
