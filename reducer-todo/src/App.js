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
    dispatch({ type: "ADD TODO", payload: todoItem });

  };

  const toggleCompleted = (todoItemId) => {

    dispatch( { type: "TOGGLE COMPLETED", payload: todoItemId});

  };

  const clearCompleted = () => {
    dispatch( { type: "CLEAR COMPLETED" });
  };

  return (
    <div className="App">

      <div className = "todo-main-div">

        <div className = "header-div">
          <h1>Todo List</h1>
        </div>

        <TodoList todoArray = {state.todoArray} toggleCompleted = {toggleCompleted} />
        <TodoForm addTodo = {addTodo} clearCompleted = {clearCompleted} />

      </div>
     
    </div>
  );
}

export default App;
