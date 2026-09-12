import React from 'react';
import {useState} from 'react';

const TodoItem = ({todos, onCompleted, onDelete, completed}) => {

    return (
            <div className='todoItem' style={{width:""}}>
                <input style={{width:"50%", backgroundColor:completed ? "green" : "white" }} type='text' id='todo' name='todo' readOnly value={todos}
                />
                <button onClick={onCompleted}>Completed</button>
                <button onClick={onDelete}>Delete</button>
            </div>
    )
}
export default TodoItem;