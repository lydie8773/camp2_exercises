const initialState = {
  myCounter: 0,
  fetching: false
};

function counterReducer(state = initialState, action){
  switch (action.type){
    case "FETCHING":
      return {
        ...state,
        fetching: true
      }
    case "INCREMENT":
      // const incrementBy = action.incrementBy || 2;
      // return state + 1;
      return {
        ...state,
        myCounter: state.myCounter + action.incrementBy,
        fetching: false
      }
    case "DECREMENT":
      // return state - 1;
      return {
        ...state,
        myCounter: state.myCounter - action.decrementBy
      }
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

export default counterReducer;