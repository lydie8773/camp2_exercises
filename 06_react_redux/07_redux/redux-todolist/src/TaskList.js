import React, { Component } from 'react';
import Task from "./Task";
import store from "./store";

class TaskList extends Component{
  componentDidMount(){
    store.subscribe(() => {
      this.forceUpdate();
    })
  }

  renderTaskList(){
    // return this.props.taskList.map((task, i) => {
    return store.getState().map((task, i) => {
      return <Task key={i} title={task.title} finished={task.finished} toggler={this.props.toggler} index={i}/>
      // <Task
      //   key={i}/>
    });
  }

  render(){
    return(
      <ul>
        {/*<Task title="lalalala" finished={true}/>*/}
        <ul>{this.renderTaskList()}</ul>
      </ul>
    )
  }
}

export default TaskList;