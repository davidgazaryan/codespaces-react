import React from "react";

export const AddTodo = ({newTodo}) => {
    return (
        <div className="AddTodo">
            <label>
                <h3>Add Todo:</h3>
                <input type="text" onChange={newTodo(e.target.value)}/>
            </label>
        </div>
    )
}
