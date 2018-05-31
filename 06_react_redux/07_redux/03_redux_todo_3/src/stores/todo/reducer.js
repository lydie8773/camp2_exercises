import { combineReducers } from "redux";
const initialState = [];

function todoReducer(state = initialState, {type, payload}) {
  switch (type) {
    case "ADD_ITEM":
      console.log("state: ", state);
      return [...state, payload.item];
    case "DELETE_ITEM":
      return state.filter(({id}) => payload.id !== id);
    case "COMPLETE_ITEM":
      return state.map((todo) =>
        todo.id === payload.id ?
          {...todo, complete: true} :
          todo
      )
    default:
      return state;
  }
}

export default combineReducers(todoReducer);