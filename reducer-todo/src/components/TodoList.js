import React from "react";

function TodoList({ todoArray, toggleCompleted }){

    return(
        <div>

            {todoArray.map (todoItem => 
                            //pass the id to the toggleCompleted function so it knows what item needs to be toggled
                            <div key = {todoItem.id} 
                                 onClick = {toggleCompleted (todoItem.id)}
                                 className = {todoItem.completed ? "completed" : "not-completed"}> 

                                {todoItem.item} 

                            </div>)}

        </div>
    );


}

export default TodoList;