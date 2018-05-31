import React from 'react';
import { ListGroupItem, ButtonGroup, Button } from 'react-bootstrap';

import PropTypes from 'prop-types';

const TodoItem = (props) => {
  const deleteItem = () => {
    props.deleteItem(props.item.id);
  }
  const completeItem = () => {
    props.completeItem(props.item.id);
  }
  return(
    <ListGroupItem>
      <div className="todo-item">
        {props.item.complete ?
          (<h4 className="complete">{props.item.title}</h4>) :
          (<h4>{props.item.title}</h4>)
        }
        <ButtonGroup className="group">
          {!props.item.complete ?
            <Button onClick={completeItem}>
              {"Complete"}
            </Button>
          : null}
          <Button onClick={deleteItem}>
            {"Delete"}
          </Button>
        </ButtonGroup>
      </div>
    </ListGroupItem>
  );
}

TodoItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    complete: PropTypes.boolean
  }).isRequired,
  deleteItem: PropTypes.func.isRequired,
  completeItem: PropTypes.func.isRequired
};

export default TodoItem;
