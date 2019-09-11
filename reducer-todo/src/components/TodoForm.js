import React from "react";
import {useState} from "react";

function TodoForm( { addTodo, clearCompleted }){

    //components can still have local state
    const [todoItem, setTodoItem] = useState("");

    const handleChange = (event) => {

        setTodoItem(event.target.value);

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addTodo(todoItem);
        setTodoItem(""); //clears the value of input
    }

    const handleClearCompleted = (event) => {
        event.preventDefault();
        clearCompleted();
    }

    return (
        <form onSubmit = {handleSubmit}>
            <input type = "text" 
                   name = "todoItem" 
                   value = {todoItem} 
                   placeholder = "add a todo item" 
                   onChange = {handleChange}/>

            <button type = "submit"> Add To List </button>
            <button type = "submit" onClick = {handleClearCompleted}>Clear Completed</button>

        </form>

    );





}

export default TodoForm;