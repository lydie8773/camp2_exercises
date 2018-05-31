import React from 'react';
import { ListGroup } from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const AnimatedList = (props) => {
  return(
    <ListGroup>
      <ReactCSSTransitionGroup
        transitionName="slide"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
      >
        {props.children}
      </ReactCSSTransitionGroup>
    </ListGroup>
  );
}

export default AnimatedList;
