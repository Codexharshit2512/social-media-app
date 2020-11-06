import { combineReducers } from "redux";
import { fetchPostsReducer } from "./postOperationsReducer";
import { likesReducer } from "./likesReducer";
import { selectedUserReducer } from "./selectedUserReducer";
import { loaderReducer } from "./loaderReducer";
import { authReducer } from "./authReducer";
import { validationReducer } from "./validationReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  validation: validationReducer,
  posts: fetchPostsReducer,
  likes: likesReducer,
  selectedUser: selectedUserReducer,
  loaders: loaderReducer,
});
