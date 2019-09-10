import React from "react";
import {useState} from "react";

function TodoForm(){

    //components can still have local state
    const [todoItem, setTodoItem] = useState("");

    const handleChange = (event) => {

        setTodoItem(event.target.value);

    }

    return (
        <form>
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