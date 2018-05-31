// import React, { Component } from 'react';
//
// import './App.css';
// import Counter from "./Counter";
// import { connect } from "react-redux";
//
//
// class App extends Component {
//
//   onIncrement() {
//     this.props.Increase();
//   }
//
//   onDecrement() {
//     this.props.Decrease();
//   }
//   render() {
//
//     return (
//       <div>
//         <h2>Counter</h2>
//         <p>The counter value is {this.props.count}</p>
//         <button onClick={this.onIncrement.bind(this)}>Increase</button>
//         <button onClick={this.onDecrement.bind(this)}>Decrease</button>
//       </div>
//     )
//   }
//
//
//
//   // render() {
//   //   return (
//   //     <div className="App">
//   //       <header className="App-header">
//   //         <img src={logo} className="App-logo" alt="logo" />
//   //         <h1 className="App-title">Welcome to React</h1>
//   //       </header>
//   //       <p className="App-intro">
//   //         {/*<Counter value={store.getState()}/>*/}
//   //         <Counter/>
//   //       </p>
//   //     </div>
//   //   );
//   // }
// }
//
// const mapStateToProps = function (state) {
//   return state;
// };
//
// const mapDispatchToProps = function (dispatch) {
//   return {
//     Increase: function () {
//       return dispatch({type: "COUNTER_INCRE"})
//     },
//     Decrease: function () {
//       return dispatch({type: "COUNTER_DECRE"})
//     }
//   }
// };
//
// export const CounterPackage = connect(mapStateToProps, mapDispatchToProps)(Counter);
//
//
// export default App;







import React, {Component} from 'react';
import {connect} from 'react-redux';

class App extends Component {

  onIncrement() {
    this.props.Increase();
  }

  onDecrement() {
    this.props.Decrease();
  }

  render() {

    console.log(this.props.count);
    return (
      <div>
        <h2>Counter</h2>
        <p>The counter value is {this.props.count}</p>
        <button onClick={this.onIncrement.bind(this)}>+</button>
        <button onClick={this.onDecrement.bind(this)}>-</button>
      </div>
    )
  }
}
const mapStateToProps = function (state) {
  return { count: state.count }
};

const mapDispatchToProps = function (dispatch) {
  return {
    Increase: function () {
      return dispatch({
        type: "COUNTER_INCRE"
      })
    },
    Decrease: function () {
      return dispatch({
        type: "COUNTER_DECRE"
      })
    }
  }
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);


export default ConnectedApp;

