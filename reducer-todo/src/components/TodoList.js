import React from "react";

function TodoList({ todoArray }){

    return(
        <div>

            {todoArray.map(todoItem => <div key = {todoItem.id}> {todoItem.item} </div>)}

        </div>
    );


}

export default TodoList;