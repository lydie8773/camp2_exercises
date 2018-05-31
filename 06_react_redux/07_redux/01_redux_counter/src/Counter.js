// import React from 'react';
// import { connect } from "react-redux";
//
// // class Counter extends Component{
// //
// // }
//
//
// const INITIAL_STATE = {
//   count:0
// }
//
// const handleCounter = (state =INITIAL_STATE , action)=> {
//   switch(action.type){
//     case 'COUNTER_INCRE':
//       return Object.assign({}, state, { count: state.count + 1});
//     case 'COUNTER_DECRE':
//       return Object.assign({}, state, { count: state.count -1});
//   }
//   return state;
// };
//
//
// function combineReducers(reducers) {
//   return (state = {}, action)=> {
//     return Object.keys(reducers).reduce((nextState, key)=> {
//       nextState = reducers[key](state[key],action);
//       console.log(nextState);
//       return nextState;
//     }, {})
//   }
// }
//
// export const reducers = combineReducers(this.handleCounter);



// export const INCREMENT_COUNTER = "increment";
// export const DECREMENT_COUNTER = "decrement";
//
//
//
// export function counter(state = 0, action){
//   switch (action.type){
//     case INCREMENT_COUNTER:
//       return state + 1;
//     case DECREMENT_COUNTER:
//       return state - 1;
//     default:
//       return state;
//   }
// }
//
//
// class Counter extends Component{
//
//   increment(){
//     return {
//       type: INCREMENT_COUNTER
//     }
//   }
//
//   decrement(){
//     return {
//       type: DECREMENT_COUNTER
//     }
//   }
//
//   render() {
//     // const { increment,decrement} = this.props;
//     return (
//       <p>
//         Clicked: {counter} times
//         {' '}
//         <button onClick={this.increment}>+</button>
//         {' '}
//         <button onClick={this.decrement}>-</button>
//       </p>
//     );
//   }
// }
//
//
//
// export default Counter;

const INITIAL_STATE = {
  count: 0
};

const reducers = (state = INITIAL_STATE , action)=> {
  switch(action.type){
    case 'COUNTER_INCRE':
      return Object.assign({}, state, { count: state.count + 1});
    case 'COUNTER_DECRE':
      return Object.assign({}, state, { count: state.count -1});
    default:
      return state;
  }
};


// function combineReducers(reducers) {
//   return (state = {}, action)=> {
//     return Object.keys(reducers).reduce((nextState, key)=> {
//       nextState = reducers[key](state[key],action);
//       console.log(nextState);
//       return nextState;
//     }, {})
//   }
// }

// const reducers = combineReducers(handleCounter);
// const reducers = handleCounter;


export default reducers;