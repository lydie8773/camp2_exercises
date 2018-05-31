import {applyMiddleware, createStore} from "redux";
import todoReducer from "./todo/reducer";
import logger from "redux-logger";
import thunk from 'redux-thunk';

let store = createStore(
  todoReducer,
  applyMiddleware(thunk, logger)
)

export default store;