import React, { useState } from 'react';

const TodoForm = (props) => {
  // console.log(props)
  const [inputTodo, setInputTodo] = useState('');

  const handleChange = e => {
    setInputTodo(e.target.value);
  }

  const submitHandle = e => {
    e.preventDefault()
    props.addNew(inputTodo)
    setInputTodo('')
  }

  const clearCompleted = e => {
    e.preventDefault()
    props.clearCompleted()
  }

  return (
    <div>
      <form onSubmit={submitHandle}>
        <input
          type="text"
          name="item"
          value={inputTodo}
          onChange={handleChange}
          placeholder="Enter todo!"
        />
        <button type='submit'>Add Todo</button>
        <button onClick={clearCompleted}>Clear Completed</button>
      </form>
    </div>
  )
}

export default TodoForm;