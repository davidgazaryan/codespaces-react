import React from "react";

export const AddTodo = ({newTodo, addTodo,val}) => {
    return (
        <div className="AddTodo">
            <label>
                <h3>Add Todo:</h3>
                <input type="text" value={val} onChange={(e) => newTodo(e.target.value)}/>
            </label>
            <button onClick={addTodo}>Add Todo</button>
        </div>
    )
}
