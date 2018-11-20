import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import Thunk from "redux-thunk";
import rootReducer from "./reducers";
import myLogger from "./myLogger";

const store = createStore(rootReducer, applyMiddleware(Thunk, myLogger));

export default store;
