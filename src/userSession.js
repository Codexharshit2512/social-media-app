import jwt_decode from "jwt-decode";
import { store } from "./store/store";
import { fetchNotifications } from "./redux/actionsCreators/globalActions";

export const checkUserSession = () => {
  const token = localStorage.getItem("FbIdToken");
  if (token) {
    const decodedToken = jwt_decode(token);
    const expDate = new Date(decodedToken.exp * 1000);
    const currentDate = new Date();
    if (currentDate < expDate) {
      const signedUser = JSON.parse(localStorage.getItem("user"));
      store.dispatch({
        type: "SIGNIN_SUCCESS",
        payload: { signedUser, token },
      });
      store.dispatch(fetchNotifications());
    } else store.dispatch({ type: "USER_LOGOUT" });
  } else store.dispatch({ type: "USER_LOGOUT" });
};
