import React, {useReducer} from 'react';
import {initialState, reducer} from "./reducers/index.js";
import TodoList from "./components/TodoList.js";
import TodoForm from "./components/TodoForm.js";
import logo from './logo.svg';
import './App.css';
import { isTemplateElement } from '@babel/types';

function App() {

  //dispatch changes the value of state - we dispatch an action that is handled by the reducer function
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = (todoItem) => {

    //payload and type are just keys inside of an object, we could call them whatever we like
    dispatch({ type: "ADD_TODO", payload: todoItem });

  };

  return (
    <div className="App">

      <TodoList todoArray = {state.todoArray} />
      <TodoForm addTodo = {addTodo} />
     
    </div>
  );
}

export default App;
