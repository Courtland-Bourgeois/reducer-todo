import React, { useReducer } from 'react';
import { reducer, initialState } from './reducers/todoReducer';
import './css/App.css';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [todoState, dispatch] = useReducer(reducer, initialState);
  console.log(todoState);

  return (
    <div className="App">
      <h1>Todo App</h1>
      {/* <img src={require('./images/todoApp.jpg')} alt="desktop pic" /> */}
      <TodoList todoState={todoState} />
      <TodoForm />
    </div>
  );
}

export default App;
