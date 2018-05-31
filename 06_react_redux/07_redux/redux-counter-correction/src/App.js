import React, { Component } from 'react';
import './App.css';
import Counter from "./modules/counter/Counter";
import { connect } from "react-redux";
import { resetter } from "./store/counter/handlers";
import { isFetching } from "./store/counter/selectors";


class App extends Component {
  render() {
    console.log(this.props.isFetching)
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.props.reset}>reset</button>
        </header>
        <div>
          {
            this.props.isFetching
              ? "loading"
              : <Counter />
          }
        </div>
      </div>
    );
  }
}

export default connect(isFetching, resetter)(App);
// export default App;

