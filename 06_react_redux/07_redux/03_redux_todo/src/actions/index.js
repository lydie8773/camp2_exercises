import * as types from '../constants/ActionTypes';

export const addItem = (item) => ({ type: types.ADD_ITEM, payload: {item} });
export const deleteItem = (id) => ({ type: types.DELETE_ITEM, payload: {id} });
export const completeItem = (id) => ({ type: types.COMPLETE_ITEM, payload: {id} });
export const clearCompleted = () => ({ type: types.CLEAR_COMPLETED});
