import React from 'react';
// import { ListGroupItem, ButtonGroup, Button } from 'react-bootstrap';

const TodoItem = (props) => {
  const deleteItem = () => {
    props.deleteItem(props.item.id);
  }
  const completeItem = () => {
    props.completeItem(props.item.id);
  }
  return(
    <div>
      <table className="table">

        <tbody>
        <tr>
          {props.item.complete ?
            (<td className="complete">{props.item.title}</td>) :
            (<td>{props.item.title}</td>)
          }
          <td>
            {!props.item.complete ?
              <button onClick={completeItem}>
                {"Complete"}
              </button>
              : null}
            <button onClick={deleteItem}>
              {"Delete"}
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>

  );
}


export default TodoItem;
