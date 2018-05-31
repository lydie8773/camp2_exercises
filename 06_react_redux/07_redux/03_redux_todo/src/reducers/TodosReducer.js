import {
  ADD_ITEM,
  DELETE_ITEM,
  COMPLETE_ITEM,
} from '../constants/ActionTypes';

const initialState = [];

export default (state = initialState, {type, payload}) => {
  switch(type) {
    case ADD_ITEM:
      return [...state, payload.item];
    case DELETE_ITEM:
      return state.filter(({id}) => payload.id !== id);
    case COMPLETE_ITEM:
      return state.map(todo =>
        todo.id === payload.id ?
        {...todo, complete: true} :
        todo
      )
    default:
      return state;
  }
}
