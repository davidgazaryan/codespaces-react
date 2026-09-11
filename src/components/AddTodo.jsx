import React, { useEffect, useRef } from "react";

export const AddTodo = ({newTodo, addTodo,val}) => {
    const inputRef = useRef(null);
    console.log("ref obj",inputRef.current);
    
    useEffect(() => {
        inputRef.current.focus();
    },[])

    return (
        <div className="AddTodo" style={{width:"40%"}}>
            <label>
                <h3>Add Todo:</h3>
                <input ref={inputRef} style={{width:"80%"}} type="text" value={val} onChange={(e) => newTodo(e.target.value)}/>
            </label>
            <button style={{width:"10%",padding:".5rem",marginLeft:"1rem"}} onClick={addTodo}>Add Todo</button>
        </div>
    )
}
