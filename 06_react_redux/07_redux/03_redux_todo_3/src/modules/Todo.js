import React, { Component } from "react";
import { connect } from "react-redux";
// import { getTodo } from "../stores/todo/selector";
// import { handlerAddTodo } from "../stores/todo/handler";
import uuid from "uuid";
import { addTodo } from "../stores/todo/action"
import { bindActionCreators } from "redux";


class Todo extends Component{

  constructor(props){
    super(props);
    this.state = {
      input: " "
    }
  }

  onInputChange(e){
    this.setState({
      input: e.target.value
    });
  }

  onSubmit(e){
    e.preventDefault();
    this.props.addTodo({
      id: uuid.v4(),
      title: this.state.input,
      complete: false
    });
    this.setState({
      input: " "
    })
  }

  render(){
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          {/*<form onSubmit={(dispatch) => dispatch(addTodo(props.text))}>*/}
          <input
            type="text"
            placeholder="New task"
            value={this.state.input}
            onChange={this.onInputChange.bind(this)}
          />
          <button type="submit">Add Task</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  bindActionCreators(({addTodo}), dispatch)
}

// export default connect(getTodo, handlerAddTodo)(Todo);
export default connect(null, mapDispatchToProps)(Todo);



