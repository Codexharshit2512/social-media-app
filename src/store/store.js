import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "../redux/reducers/rootReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

export let store = createStore(rootReducer, applyMiddleware(thunk, logger));
