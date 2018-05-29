import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList from "./TaskList";

class App extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     taskList: props.taskList
  //   }
  // }

  // toggleTask(index){
  //   const newState = this.state.taskList.map((task, i) => {
  //     // (i === index)?{...task, finished: !task.finished}:task;
  //
  //     if(i === index){
  //       return {...task, finished: !task.finished}
  //     }else {
  //       return task;
  //     }
  //   });
  //
  //   this.setState({
  //     taskList: newState
  //   });
  // }

  // toggleTask = (index) => {
  //   const newState = this.state.taskList.map((task, i) => (
  //     (i === index)?{...task, finished: !task.finished}:task;
  //
  //     // if(i === index){
  //     //   return {...task, finished: !task.finished}
  //     // }else {
  //     //   return task;
  //     // }
  //   });
  //
  //   this.setState({
  //     taskList: newState
  //   });
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <TaskList taskList={this.state.taskList} toggler={this.toggleTask()}/>
        </p>
      </div>
    );
  }
}

export default App;
