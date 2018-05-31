import React from "react";
import { connect } from "react-redux";
import { getCounter } from "../../store/counter/selectors";
// import { incrementDecrement, resetter } from "../../store/counter/handlers";
import { incrementDecrement } from "../../store/counter/handlers";


// class Counter extends Component{
//   render(){
//     console.log("counter: ", this.props.myCounter);
//     return (
//       <div>
//         {/*<button onClick={() => this.props.dispatch({type: "DECREMENT"})}>-</button>*/}
//         <button onClick={this.props.decrement}>-</button>
//         <span>{this.props.myCounter}</span>
//         {/*<button onClick={() => this.props.dispatch({type: "INCREMENT"})}>+</button>*/}
//         <button onClick={this.props.increment}>+</button>
//         {/*<button onClick={this.props.reset}>reset</button>*/}
//       </div>
//
//     )
//   }
// }

function Counter(props) {
  return (
    <div>
      <button onClick={props.decrement}>-</button>
      <span>{props.myCounter}</span>
      <button onClick={props.increment}>+</button>
    </div>
  )
}



// export default connect(getCounter, incrementDecrement, resetter)(Counter);
export default connect(getCounter, incrementDecrement)(Counter);