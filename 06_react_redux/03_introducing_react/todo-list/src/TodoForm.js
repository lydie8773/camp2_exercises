import React, { Component } from 'react';
import _ from "underscore";
import './App.css';

class TodoForm extends Component{
	constructor(props){
		super(props);
		this.state = {
			newTask: " ",
			taskList: []
		};
	}

	addNewTask(event){
		event.preventDefault();
		const newTask = {
			id: lastId,
			label: this.state.newTask,
			completed: false
		};
		lastId++;
		this.setState({
			taskList: [...this.state.taskList, newTask],
			newTask: ""
		})
	}

	render(){
		return(
			<form class="form-inline" onSubmit={this.addNewTask}>
				<div class="form-group mx-sm-3 mb-2">
					<label for="inputPassword2" class="sr-only">New task</label>
					<input type="text" value={this.state.newTask} class="form-control" id="task" placeholder="Your task" />
				</div>
				<button type="submit" class="btn btn-primary mb-2">Create new task</button>
			</form>
		)
	}
}

export default TodoForm;