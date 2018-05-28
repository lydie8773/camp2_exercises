import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from "./TodoForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Todo list</h1>
        </header>
        <p className="App-intro">
					<div class="container">
						<TodoForm/>
					</div>
        </p>
      </div>
    );
  }
}

export default App;
