import React from 'react';
import '../css/Todo.css';

const Todo = (props) => {

  return (
    <div className="todo">
      <ul>
        <li style={props.item.completed ? { textDecoration: 'line-through'} : null} onClick={() => props.toggleComplete(props.item.id)}>
          {props.item.item}
        </li>
      </ul>
    </div>
  )
}

export default Todo;