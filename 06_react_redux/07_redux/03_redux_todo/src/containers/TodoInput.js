import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import uuid from 'uuid';

import { addItem } from '../actions';

class TodoInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
  }
  onInputChange(e) {
    this.setState({
      input: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.addItem({
      id: uuid.v4(),
      title: this.state.input,
      complete: false
    });
    this.setState({input: ''})
  }
  render() {
    return(
      <div className="container">
        <form onSubmit={this.onSubmit.bind(this)} className="form-inline">
          <input
            type="text"
            className="form-control"
            id="inlineFormInputName2"
            placeholder="Input your task"
            value={this.state.input}
            onChange={this.onInputChange.bind(this)}
          />
          <button type="submit" className="btn btn-primary mb-2">Submit</button>
        </form>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => (
  bindActionCreators(({addItem}), dispatch)
)

export default connect(null, mapDispatchToProps)(TodoInput);
