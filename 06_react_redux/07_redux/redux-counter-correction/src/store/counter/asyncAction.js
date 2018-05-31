// import { increment } from "./action";
import { fetching, increment } from "./action";


export function delayedIncrement(incrementBy){
  return dispatch => {
    dispatch(fetching());
    setTimeout(() =>
      dispatch(increment(incrementBy)),
      1000
    );
  }
}