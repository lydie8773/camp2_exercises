import React, { Component } from 'react';
import store from "./store";



class Task extends Component{
  renderButton(){
    return(
      {/*<button onClick={() => this.props.toggler(this.props.index)}>*/}
      <button onClick={() => store.dispatch({type: "toggle_task", index: 0})}>

        {(this.props.finished)? "Recommencer !":"Terminier"}
      </button>
    );
  }

  renderClass(){
    return (this.props.finished)?"finished":"on progress";
  }

  render(){
    return(
      <li className={this.renderClass()}>
        <span>{this.props.title}</span>
        {this.renderButton()}
      </li>
    )
  }
}

export default Task;