import { AddTodo } from "./AddTodo"
import TodoItem from "./TodoItem"
import React from 'react';
import {useState} from 'react';

export const TodoLayout = () => {
    const [newTodo,setNewTodo] = useState('');
    const [todos,setTodos] = useState([]);

    console.log("new todo:",newTodo);

    const addTodo = () => {
        setTodos(prev => [...prev,newTodo])
        setNewTodo('');
    }

    const deleteTodo = () => {

    }

    return (
        <div className="TodoLayout">
            <div style={{display:"flex", textAlign:"center",justifyContent:"center"}}>
                <AddTodo newTodo={setNewTodo} addTodo={addTodo} val={newTodo}/>
            </div>
            <div style={{display:"grid",paddingTop:"2rem"}}>
                <TodoItem/>
            </div>
        </div>
    )
}