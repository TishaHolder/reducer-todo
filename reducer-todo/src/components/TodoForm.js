import React from "react";
import {useState} from "react";

function TodoForm( { addTodo }){

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

    return (
        <form onSubmit = {handleSubmit}>
            <input type = "text" 
                   name = "todoItem" 
                   value = {todoItem} 
                   placeholder = "add a todo item" 
                   onChange = {handleChange}/>

            <button type = "submit"> Add To List </button>

        </form>

    );





}

export default TodoForm;