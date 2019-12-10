import React, { useReducer } from 'react';

import Todo from './Todo';

const TodoList = (props) => {

  return (
    <div className="todo-list">
      {props.todoState.map(task => (
        <Todo key={task.id} item={task.item} />
      ))}
    </div>
  )
}

export default TodoList;