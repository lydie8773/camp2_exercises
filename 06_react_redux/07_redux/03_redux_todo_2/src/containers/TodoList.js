import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import TodoItem from '../components/TodoItem';
import AnimatedList from '../components/AnimatedList';

import {
  completeItem,
  deleteItem
} from '../actions';

class TodoList extends Component {
  getTodos() {
    let { todos } = this.props;
    if (!todos.length) {
      return (
        <h2 className="text-center">{"No todos to display 😕"}</h2>
      );
    } else {
      return(
        <AnimatedList>
          {todos.map(item =>
            <TodoItem
              key={item.id}
              item={item}
              completeItem={this.props.completeItem}
              deleteItem={this.props.deleteItem}
            />
          )}
        </AnimatedList>
      );
    }
  }

  render() {
    return(
      <div>
        <h1 className="text-center">Your Todos</h1>
        {this.getTodos()}
      </div>
    );
  }

  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      complete: PropTypes.boolean
    })).isRequired,
    completeItem: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired,
  }
}

const mapStateToProps = (state) => (
  {todos: state.todos}
)

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({completeItem, deleteItem}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
