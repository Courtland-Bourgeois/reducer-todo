import React from 'react';

const TodoForm = () => {

  return (
    <div>
      <form>
        <input
          type="text"
          name="item"
          value=""
          onChange=""
          placeholder="Enter todo!"
        />
        <button>Add Todo</button>
        <button>Clear Completed</button>
      </form>
    </div>
  )
}

export default TodoForm;