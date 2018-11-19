import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import Thunk from "redux-thunk";
import rootReducer from "./reducers";

const store = createStore(rootReducer, applyMiddleware(logger, Thunk));

export default store;
