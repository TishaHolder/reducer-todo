import React, {useReducer} from 'react';
import {initialState, reducer} from "./reducers/index.js";
import TodoList from "./components/TodoList.js";
import TodoForm from "./components/TodoForm.js";
import logo from './logo.svg';
import './App.css';

function App() {

  //dispatch changes the value of state - we dispatch an action that is handled by the reducer function
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">

      <TodoList todoArray = {state.todoArray} />
      <TodoForm />
     
    </div>
  );
}

export default App;
