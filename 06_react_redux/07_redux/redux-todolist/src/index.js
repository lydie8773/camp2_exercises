import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// import { createStore } from "redux";
//
// const myFirstTask = {title: "Finir la todolist", finished: false};
//
//
// //{type: "toggle_task", index: 0}
// function reducer(state=[myFirstTask], action){
//   switch (action.type){
//     case "TOGGLE_TASK":
//       return state.map((task, i) => {
//         return (i === action.index)?{...task, finished: !task.finished}: task
//       });
//     case "ADD_TASK":
//       return state;
//     default:
//       return state;
//   }
// }
// const store = createStore(reducer);
//
// console.log(store.getState());
//
// //const newState = reducer(state, {type: "TOGGLE_TASK", index: 0});
// //state = newState;
// store.dispatch({type: "toggle_task", index: 0});
//
// console.log(store.getState());

// ReactDOM.render(<App taskList={[myFirstTask]}/>, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
