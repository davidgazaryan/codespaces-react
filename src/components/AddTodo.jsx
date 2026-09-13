import React, { useEffect, useRef } from "react";

export const AddTodo = ({newTodo, addTodo,val, disabled}) => {
    const inputRef = useRef(null);
    console.log("ref obj",inputRef.current);
    
    useEffect(() => {
        inputRef.current.focus();
    },[])

    return (
        <div className="AddTodo" style={{width:"40%"}}>
            <label>
                <h3>Add Todo:</h3>
                <input  style={{width:"80%"}} type="text" value={val} onChange={(e) => newTodo(e.target.value)}/>
            </label>
            <button disabled={disabled} ref={inputRef} style={{width:"10%",padding:".5rem",marginLeft:"1rem"}} onClick={addTodo}>Add Todo</button>
        </div>
    )
}
