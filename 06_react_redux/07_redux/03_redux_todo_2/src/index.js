import React from 'react';
import { ReactDOM } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';

import RootReducer from './reducers';
import App from './components/App';
import registerServiceWorker from "./registerServiceWorker";

let store;
const root = document.getElementById('root');

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    store = createStore(RootReducer, applyMiddleware(logger));
} else {
    store = createStore(RootReducer);
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);

registerServiceWorker();