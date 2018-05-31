import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import uuid from 'uuid';
import PropTypes from 'prop-types';

import { Col, FormGroup, FormControl } from 'react-bootstrap';

import { addItem } from '../actions';

class TodoInput extends Component {
  static propTypes = {
    addItem: PropTypes.func.isRequired,
  }
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
      <form onSubmit={this.onSubmit.bind(this)}>
        <FormGroup>
          <Col md={12}>
            <FormControl
              placeholder="What do you need to do?"
              bsSize="large"
              value={this.state.input}
              onChange={this.onInputChange.bind(this)}
            />
          </Col>
        </FormGroup>
      </form>
    );
  }
}


const mapDispatchToProps = (dispatch) => (
  bindActionCreators(({addItem}), dispatch)
)

export default connect(null, mapDispatchToProps)(TodoInput);
