// import { increment, decrement } from "./action";
import { decrement, reset } from "./action";
import { delayedIncrement } from "./asyncAction";

export function incrementDecrement(dispatch){
  return {
    // increment: () => dispatch({type: "INCREMENT", incrementBy: 2}),
    increment: () => dispatch(delayedIncrement(2)),
    decrement: () => dispatch(decrement(2))
  }
}

export function resetter(dispatch) {
  return {
    // reset: () => dispatch({type: "RESET"})
    reset: () => dispatch(reset())
  }
}