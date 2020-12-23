import React from 'react';

import Todo from './Todo';

const TodoList = (props) => {
  // console.log(props)
  return (
    <div className="todo-list">
      {props.todos.map(item => (
        <Todo key={item.id} item={item} toggleComplete={props.toggleComplete} />
      ))}
    </div>
  )
}

export default TodoList;