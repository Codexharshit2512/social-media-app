import * as types from "../actions/actions";

const initState = {
  likesLoading: false,
  likes: [],
};

export const likesReducer = (state = initState, action) => {
  let newLikes;
  switch (action.type) {
    case types.read_likes:
      let newState = action.payload;
      return newState;
    case types.add_like:
      newLikes = state.likes.map((like) => ({ ...like }));
      newLikes.push(action.payload);
      return { ...state, likes: newLikes };
    case types.delete_like:
      newLikes = state.likes.filter(
        (like) => like.postId !== action.payload.postId
      );
      return { ...state, likes: newLikes };
    default:
      return state;
  }
};
