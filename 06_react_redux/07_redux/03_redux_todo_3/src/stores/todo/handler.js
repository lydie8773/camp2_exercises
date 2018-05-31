import { addTodo } from "./action";
import { bindActionCreators } from "redux";

export const handlerAddTodo = (dispatch) => {
  bindActionCreators(({addTodo}), dispatch)
}