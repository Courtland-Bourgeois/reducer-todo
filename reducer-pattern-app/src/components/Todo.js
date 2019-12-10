import React from 'react';
import '../css/Todo.css';

const Todo = (props) => {

  return (
    <div className="todo">
      <ul>
        <li>{props.item}</li>
      </ul>
    </div>
  )
}

export default Todo;