import React, { useReducer } from 'react';
import { reducer, initialState } from './reducers/todoReducer';
import './css/App.css';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [todoState, dispatch] = useReducer(reducer, initialState);
  // console.log(dispatch);
  
  const addNew = item => {
    dispatch({
      type: 'ADD_ITEM',
      payload: item
    })
  }

  const toggleComplete = id => {
    dispatch({
      type: 'TOGGLE_TODO',
      payload: id
    })
  }

  const clearCompleted = () => {
    dispatch({
      type: 'CLEAR_COMPLETED'
    })
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      {/* <img src={require('./images/todoApp.jpg')} alt="desktop pic" /> */}
      <TodoList 
         todos={todoState.todos}
         toggleComplete={toggleComplete}
        
      />
      <TodoForm 
        clearCompleted={clearCompleted}
        addNew={addNew}
      />
    </div>
  );
}

export default App;
