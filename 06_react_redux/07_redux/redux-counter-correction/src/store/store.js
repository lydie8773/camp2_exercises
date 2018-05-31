import {applyMiddleware, createStore} from "redux";
// import { createStore} from "redux";

import counterReducer from "./counter/reducer";
import logger from "redux-logger";
import thunk from 'redux-thunk';


let store = createStore(
  counterReducer,
  applyMiddleware(thunk,logger)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;