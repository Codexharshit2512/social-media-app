import * as types from "../actions/actions";

const initState = {
  notifications: [],
  isEmpty: true,
  unred: 0,
  opened: false,
};

export const notificationsReducer = (state = initState, action) => {
  switch (action.type) {
    case types.set_notifications:
      if (action.payload.notifications.length === 0) return { ...state };
      else
        return {
          notifications: action.payload.notifications,
          isEmpty: false,
          unred: action.payload.count,
          opened: false,
        };
    case types.set_notifications_count:
      return { ...state, unred: 0 };
    case types.set_touched:
      return { ...state, touched: true };
    default:
      return state;
  }
};
