import * as types from "../actions/actions";

const initState = {
  users: [],
  isEmpty: true,
};

export const searchUsersReducer = (state = initState, action) => {
  switch (action.type) {
    case types.set_users:
      let empty = true;
      if (action.payload.length !== 0) empty = false;
      return { users: action.payload, isEmpty: empty };
    default:
      return state;
  }
};
