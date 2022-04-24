import { createStore, applyMiddleware } from "redux";
import reduxThunkMiddleware from "redux-thunk";
import logger from 'redux-logger';
import reducer from "./reducer/index";

const middlewares = applyMiddleware(
    logger,
    reduxThunkMiddleware,
)
const store = createStore(reducer, middlewares);

export default store;